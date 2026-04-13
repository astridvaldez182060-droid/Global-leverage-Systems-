import express from 'express';
import { createServer as createViteServer } from 'vite';
import Stripe from 'stripe';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_mock', {
  apiVersion: '2025-02-24.acacia',
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());

  // Webhook endpoint needs raw body
  app.post('/api/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
    const sig = req.headers['stripe-signature'];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    let event;

    try {
      if (!webhookSecret) {
        // For development without webhook secret, just parse the body
        event = JSON.parse(req.body.toString());
      } else {
        event = stripe.webhooks.constructEvent(req.body, sig as string, webhookSecret);
      }
    } catch (err: any) {
      console.error(`Webhook Error: ${err.message}`);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object as Stripe.Checkout.Session;
        console.log('Payment verified for session:', session.id);
        
        // Here you would typically:
        // 1. Update user in database to 'subscribed' or 'purchased_tool'
        // 2. Send an automatic email with the product or subscription confirmation
        // For example, using Resend or SendGrid:
        // await sendEmail(session.customer_details.email, 'Your GLS Access', 'Welcome to the Inner Circle...');
        console.log(`[MOCK EMAIL] Sending product/access to ${session.customer_details?.email}`);
        
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    res.json({ received: true });
  });

  // Standard JSON parsing for other routes
  app.use(express.json());

  app.post('/api/create-checkout-session', async (req, res) => {
    try {
      const { type, price, name } = req.body;
      
      // In a real app, use the actual domain
      const domain = req.headers.origin || 'http://localhost:3000';

      // Mock checkout if no real Stripe key is provided
      if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === 'sk_test_mock') {
        console.log('Mocking Stripe checkout session because no real STRIPE_SECRET_KEY is set.');
        return res.json({ url: `${domain}?payment=success&type=${type}` });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: name || (type === 'subscription' ? 'GLS Inner Circle Subscription' : 'GLS Armoury Tool'),
                description: type === 'subscription' ? 'Monthly access to the private community and dispatches' : 'One-time purchase of strategic tool',
              },
              unit_amount: price * 100, // Convert to cents
              recurring: type === 'subscription' ? { interval: 'month' } : undefined,
            },
            quantity: 1,
          },
        ],
        mode: type === 'subscription' ? 'subscription' : 'payment',
        success_url: `${domain}?payment=success&type=${type}`,
        cancel_url: `${domain}?payment=cancelled`,
      });

      res.json({ url: session.url });
    } catch (error: any) {
      console.error('Error creating checkout session:', error);
      res.status(500).json({ error: error.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
