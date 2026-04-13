import React, { useState, useEffect } from 'react';
import { Search, Activity, ArrowRightLeft, Clock, Cloud, Sun, CloudRain, CloudLightning } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const DEFAULT_CITIES = [
  { name: 'New York', tz: 'America/New_York', currency: 'USD', rate: '1.00', symbol: '$' },
  { name: 'Paris', tz: 'Europe/Paris', currency: 'EUR', rate: '0.92', symbol: '€' },
  { name: 'Madrid', tz: 'Europe/Madrid', currency: 'EUR', rate: '0.92', symbol: '€' },
  { name: 'Nairobi', tz: 'Africa/Nairobi', currency: 'KES', rate: '131.50', symbol: 'KSh' },
  { name: 'Tokyo', tz: 'Asia/Tokyo', currency: 'JPY', rate: '151.50', symbol: '¥' },
  { name: 'São Paulo', tz: 'America/Sao_Paulo', currency: 'BRL', rate: '5.05', symbol: 'R$' },
  { name: 'Sydney', tz: 'Australia/Sydney', currency: 'AUD', rate: '1.52', symbol: 'A$' },
];

const CURRENCIES = [
  { code: 'USD', rate: 1.00, symbol: '$' },
  { code: 'EUR', rate: 0.92, symbol: '€' },
  { code: 'KES', rate: 131.50, symbol: 'KSh' },
  { code: 'JPY', rate: 151.50, symbol: '¥' },
  { code: 'BRL', rate: 5.05, symbol: 'R$' },
  { code: 'AUD', rate: 1.52, symbol: 'A$' },
];

const formatTime = (tz: string, date: Date) => {
  try {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: tz,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }).format(date);
  } catch (e) {
    return '--:--:--';
  }
};

const AnimatedTime = ({ tz, time }: { tz: string, time: Date }) => {
  const timeStr = formatTime(tz, time);
  if (timeStr === '--:--:--') return <div className="text-3xl font-mono text-white tracking-wider">--:--:--</div>;
  
  const [hours, minutes, seconds] = timeStr.split(':');

  return (
    <div className="flex items-center text-3xl font-mono text-white tracking-wider overflow-hidden h-10">
      <span>{hours}</span>
      <span className="mx-1 text-zinc-500">:</span>
      <span>{minutes}</span>
      <span className="mx-1 text-zinc-500">:</span>
      <div className="relative w-10 h-10 flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={seconds}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute text-[var(--copper)]"
          >
            {seconds}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

const getCurrencyForTimezone = (tz: string) => {
  if (tz.includes('Europe')) return { code: 'EUR', symbol: '€' };
  if (tz.includes('London')) return { code: 'GBP', symbol: '£' };
  if (tz.includes('New_York') || tz.includes('Los_Angeles') || tz.includes('Chicago')) return { code: 'USD', symbol: '$' };
  if (tz.includes('Tokyo')) return { code: 'JPY', symbol: '¥' };
  if (tz.includes('Sydney') || tz.includes('Melbourne')) return { code: 'AUD', symbol: 'A$' };
  if (tz.includes('Nairobi')) return { code: 'KES', symbol: 'KSh' };
  if (tz.includes('Sao_Paulo')) return { code: 'BRL', symbol: 'R$' };
  if (tz.includes('Dubai')) return { code: 'AED', symbol: 'د.إ' };
  return { code: 'USD', symbol: '$' };
};

const getWeatherForCity = (city: string) => {
  const hash = city.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const temps = [18, 22, 25, 28, 15, 12, 30, 32, 10, 5];
  const conditions = ['Sunny', 'Partly Cloudy', 'Cloudy', 'Rain', 'Thunderstorms'];
  
  const temp = temps[hash % temps.length];
  const condition = conditions[hash % conditions.length];
  
  let Icon = Sun;
  if (condition.includes('Cloud')) Icon = Cloud;
  if (condition.includes('Rain')) Icon = CloudRain;
  if (condition.includes('Thunder')) Icon = CloudLightning;
  
  return { temp, condition, Icon };
};

export function GlobalClockSystem() {
  const [time, setTime] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState<{ city: string, tz: string, currency: string } | null>(null);
  const [recentSearches, setRecentSearches] = useState<{city: string, tz: string, currency: string}[]>([]);
  
  // Currency Converter State
  const [convertAmount, setConvertAmount] = useState('1000');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem('gls_recent_searches');
    if (stored) {
      try {
        setRecentSearches(JSON.parse(stored));
      } catch (e) {}
    }
  }, []);

  const saveSearch = (city: string, tz: string, currency: string) => {
    const newSearch = { city, tz, currency };
    setRecentSearches(prev => {
      const filtered = prev.filter(s => s.tz !== tz);
      const updated = [newSearch, ...filtered].slice(0, 5);
      localStorage.setItem('gls_recent_searches', JSON.stringify(updated));
      return updated;
    });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery) return;
    
    const tzs = Intl.supportedValuesOf('timeZone');
    const query = searchQuery.toLowerCase().trim();
    
    const match = tzs.find(tz => tz.toLowerCase().includes(query.replace(' ', '_')));
    
    if (match) {
      const cityName = match.split('/').pop()?.replace(/_/g, ' ') || match;
      const currency = getCurrencyForTimezone(match).code;
      setSearchResult({
        city: cityName,
        tz: match,
        currency
      });
      saveSearch(cityName, match, currency);
    } else {
      setSearchResult({ city: 'Not found', tz: '', currency: '' });
    }
  };

  const loadRecentSearch = (city: string, tz: string, currency: string) => {
    setSearchResult({ city, tz, currency });
    setSearchQuery(city);
  };

  const calculateConversion = () => {
    const amount = parseFloat(convertAmount) || 0;
    const fromRate = CURRENCIES.find(c => c.code === fromCurrency)?.rate || 1;
    const toRate = CURRENCIES.find(c => c.code === toCurrency)?.rate || 1;
    const toSymbol = CURRENCIES.find(c => c.code === toCurrency)?.symbol || '';
    
    const converted = (amount / fromRate) * toRate;
    return `${toSymbol}${converted.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <section className="py-16 px-6 border-t border-zinc-800 bg-[#0a0a0a] relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mb-2 flex items-center gap-3">
              <Activity className="text-[var(--copper)]" size={24} />
              Global Clock & Currency System
            </h2>
            <p className="text-zinc-400 font-mono text-sm uppercase tracking-widest">Real-time leverage telemetry</p>
          </div>
          
          <div className="w-full md:w-96">
            <form onSubmit={handleSearch} className="relative w-full mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Query city time (e.g., Dubai, London)..."
                className="w-full bg-[#111111] border border-zinc-800 rounded-full py-3 pl-10 pr-4 text-white font-mono text-sm focus:outline-none focus:border-[var(--copper)] transition-colors"
              />
            </form>
            {recentSearches.length > 0 && (
              <div className="flex flex-wrap gap-2 items-center">
                <Clock size={14} className="text-zinc-500" />
                {recentSearches.map((search, idx) => (
                  <button 
                    key={idx}
                    onClick={() => loadRecentSearch(search.city, search.tz, search.currency)}
                    className="text-xs font-mono text-zinc-400 hover:text-[var(--copper)] transition-colors bg-[#111111] border border-zinc-800 px-2 py-1 rounded flex items-center gap-1"
                  >
                    <span>{search.city}</span>
                    <span className="text-zinc-600">({search.currency})</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {searchResult && searchResult.tz && (
          <div className="mb-8 p-6 bg-[#111111] border border-[var(--copper)] rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-[0_0_15px_rgba(184,115,51,0.1)]">
            <div>
              <div className="text-[var(--copper)] font-mono text-xs uppercase tracking-widest mb-1">Query Result</div>
              <div className="text-2xl font-heading font-bold text-white mb-2">{searchResult.city}</div>
              <div className="text-xs font-mono text-zinc-500 bg-zinc-900 px-2 py-1 rounded inline-block">
                Currency: {searchResult.currency}
              </div>
            </div>
            
            <div className="flex items-center gap-8">
              {/* Weather Widget */}
              {(() => {
                const weather = getWeatherForCity(searchResult.city);
                const WeatherIcon = weather.Icon;
                return (
                  <div className="flex items-center gap-4 border-r border-zinc-800/50 pr-8">
                    <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-3 rounded-xl border border-zinc-700/50 text-[var(--copper)] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                      <WeatherIcon size={28} strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="text-3xl font-heading font-light text-white tracking-tight">
                        {weather.temp}<span className="text-[var(--copper)] text-xl ml-1">°C</span>
                      </div>
                      <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mt-1">{weather.condition}</div>
                    </div>
                  </div>
                );
              })()}

              <AnimatedTime tz={searchResult.tz} time={time} />
            </div>
          </div>
        )}
        {searchResult && !searchResult.tz && (
          <div className="mb-8 p-4 bg-[#111111] border border-red-900/50 text-red-400 rounded-lg font-mono text-sm">
            City not found in standard timezone registry. Try a major city name.
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {DEFAULT_CITIES.map(city => {
            const weather = getWeatherForCity(city.name);
            const WeatherIcon = weather.Icon;
            return (
            <div key={city.name} className="bg-[#111111] border border-zinc-800 p-5 rounded-lg hover:border-[var(--copper)] transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="font-heading font-semibold text-lg text-white">{city.name}</div>
                  <div className="text-[var(--copper)] font-mono text-[10px] uppercase tracking-widest mt-1">
                    {city.currency}
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-zinc-900/50 px-2 py-1 rounded border border-zinc-800">
                  <WeatherIcon size={14} className="text-[var(--copper)]" />
                  <span className="text-zinc-300 font-mono text-xs">{weather.temp}°C</span>
                </div>
              </div>
              <div className="mb-4">
                <AnimatedTime tz={city.tz} time={time} />
              </div>
              <div className="flex justify-between items-center text-sm border-t border-zinc-800 pt-3">
                <span className="text-zinc-400 font-mono">1 USD =</span>
                <span className="font-mono text-white">{city.symbol}{city.rate}</span>
              </div>
            </div>
          )})}
        </div>

        {/* Currency Converter */}
        <div className="bg-[#111111] border border-zinc-800 rounded-lg p-6 md:p-8">
          <h3 className="text-lg font-heading font-semibold text-white mb-6 flex items-center gap-2">
            <ArrowRightLeft className="text-[var(--copper)]" size={20} />
            Global Exchange Calculator
          </h3>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1 w-full">
              <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">Amount</label>
              <input 
                type="number" 
                value={convertAmount}
                onChange={(e) => setConvertAmount(e.target.value)}
                className="w-full bg-[#0a0a0a] border border-zinc-800 rounded p-4 text-white font-mono text-lg focus:outline-none focus:border-[var(--copper)] transition-colors"
                placeholder="1000"
              />
            </div>
            <div className="flex-1 w-full">
              <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">From</label>
              <select 
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="w-full bg-[#0a0a0a] border border-zinc-800 rounded p-4 text-white font-mono text-lg focus:outline-none focus:border-[var(--copper)] transition-colors appearance-none"
              >
                {CURRENCIES.map(c => <option key={c.code} value={c.code}>{c.code}</option>)}
              </select>
            </div>
            <div className="hidden md:flex items-center justify-center pt-6 px-2">
              <ArrowRightLeft className="text-zinc-600" size={24} />
            </div>
            <div className="flex-1 w-full">
              <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">To</label>
              <select 
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="w-full bg-[#0a0a0a] border border-zinc-800 rounded p-4 text-white font-mono text-lg focus:outline-none focus:border-[var(--copper)] transition-colors appearance-none"
              >
                {CURRENCIES.map(c => <option key={c.code} value={c.code}>{c.code}</option>)}
              </select>
            </div>
            <div className="flex-1 w-full pt-2 md:pt-6">
              <div className="w-full bg-[var(--copper)]/10 border border-[var(--copper)] rounded p-4 text-[var(--copper)] font-mono text-xl font-bold text-center">
                {calculateConversion()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
