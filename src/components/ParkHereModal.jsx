import React, { useState } from 'react';
import { 
  X, 
  Car, 
  MapPin, 
  DollarSign, 
  ShieldCheck, 
  Clock, 
  QrCode, 
  CheckCircle2, 
  Navigation, 
  Star, 
  Sliders, 
  TrendingUp,
  Smartphone,
  Sparkles,
  ExternalLink,
  Globe
} from 'lucide-react';
import { soundManager } from '../utils/sound';

export default function ParkHereModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('driver'); // 'driver' | 'host'
  const [selectedSpotId, setSelectedSpotId] = useState('SP-101');
  const [isBooked, setIsBooked] = useState(false);
  const [searchFilter, setSearchFilter] = useState('all');

  // Host Calculator State
  const [spotsCount, setSpotsCount] = useState(1);
  const [hoursPerDay, setHoursPerDay] = useState(8);
  const [zoneType, setZoneType] = useState('urban'); // 'suburban' | 'urban' | 'downtown'

  if (!isOpen) return null;

  const zoneRates = {
    suburban: { rate: 3.25, label: 'Residential Suburb' },
    urban: { rate: 4.75, label: 'Commercial Corridor' },
    downtown: { rate: 6.50, label: 'Prime Downtown Core' }
  };

  const calculatedMonthly = Math.round(spotsCount * (hoursPerDay * 0.7) * zoneRates[zoneType].rate * 26);
  const calculatedAnnual = calculatedMonthly * 12;
  const emissionsSaved = Math.round(spotsCount * 42);

  const mockSpots = [
    {
      id: 'SP-101',
      title: 'Mission St Private Driveway',
      address: '450 Mission St (Downtown Core)',
      price: '$4.50/hr',
      distance: '0.2 mi away',
      type: 'Private Driveway with EV Charger',
      available: true,
      rating: 4.9,
      reviews: 38,
      security: 'CCTV Monitored • Automated Gate'
    },
    {
      id: 'SP-102',
      title: 'Financial District Covered Bay',
      address: '128 Market Plaza (Financial District)',
      price: '$6.00/hr',
      distance: '0.4 mi away',
      type: 'Covered Private Residential Stall',
      available: true,
      rating: 5.0,
      reviews: 62,
      security: 'Keycard / Bluetooth Digital Pass'
    },
    {
      id: 'SP-103',
      title: 'SoMa Courtyard Dedicated Bay',
      address: '892 Howard Ave (SoMa Hub)',
      price: '$3.75/hr',
      distance: '0.6 mi away',
      type: 'Secured Outdoor Courtyard',
      available: true,
      rating: 4.8,
      reviews: 21,
      security: 'License Plate Scanner Entry'
    }
  ];

  const selectedSpot = mockSpots.find(s => s.id === selectedSpotId) || mockSpots[0];

  const handleBook = () => {
    soundManager.playClick();
    setIsBooked(true);
  };

  const handleReset = () => {
    soundManager.playClick();
    setIsBooked(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-space-950/80 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Dialog Box */}
      <div className="relative w-full max-w-4xl rounded-3xl bg-space-900 border border-cyan-500/40 shadow-2xl shadow-cyan-950/80 overflow-hidden my-8 z-10 animate-fadeIn">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-space-950/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-400 flex items-center justify-center shadow-inner">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-white text-base tracking-wide">ParkHere</span>
                <span className="text-[10px] font-mono uppercase bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800">
                  Product 01 of H Square
                </span>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  ● Live on Vercel
                </span>
              </div>
              <span className="text-xs text-slate-400">"Your Spot. Right Here." • Developed by H SQUARE</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://parkhere-seven.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playClick()}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/40 text-cyan-300 text-xs font-mono transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>parkhere-seven.vercel.app</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={() => {
                soundManager.playClick();
                onClose();
              }}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* View Switcher Tabs: Driver Experience vs Host Monetization */}
        <div className="px-6 py-3 bg-space-950/40 border-b border-white/[0.06] flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                soundManager.playClick();
                setActiveTab('driver');
                setIsBooked(false);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === 'driver'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              🚗 Driver Search View
            </button>
            <button
              onClick={() => {
                soundManager.playClick();
                setActiveTab('host');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === 'host'
                  ? 'bg-blue-600/30 text-blue-300 border border-blue-400/50'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              🏠 Host Earnings View
            </button>
          </div>

          <div className="text-[11px] font-mono text-cyan-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            <span>AI Predictive Matching Engine v2.4</span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {activeTab === 'driver' ? (
            <div>
              {!isBooked ? (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  
                  {/* Spots List */}
                  <div className="md:col-span-7 space-y-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                        Available Private Spots Nearby (3)
                      </span>
                      <span className="text-xs text-emerald-400 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Live Occupancy Feed
                      </span>
                    </div>

                    {mockSpots.map((spot) => {
                      const isSelected = selectedSpotId === spot.id;
                      return (
                        <div
                          key={spot.id}
                          onClick={() => {
                            soundManager.playClick();
                            setSelectedSpotId(spot.id);
                          }}
                          className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-space-850 border-cyan-400/60 shadow-lg shadow-cyan-950/50'
                              : 'bg-space-950/60 border-white/10 hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="text-sm font-semibold text-white">{spot.title}</h4>
                                <span className="text-[10px] font-mono text-slate-400 px-1.5 py-0.5 rounded bg-space-900 border border-white/5">
                                  {spot.distance}
                                </span>
                              </div>
                              <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                                <MapPin className="w-3 h-3 text-cyan-400" />
                                {spot.address}
                              </p>
                            </div>
                            <div className="text-right">
                              <span className="text-sm font-display font-bold text-cyan-400">{spot.price}</span>
                              <div className="flex items-center gap-1 text-[11px] text-amber-400 justify-end mt-0.5">
                                <Star className="w-3 h-3 fill-amber-400" />
                                <span>{spot.rating}</span>
                              </div>
                            </div>
                          </div>

                          <div className="mt-3 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400">
                            <span>{spot.type}</span>
                            <span className="text-cyan-300 font-mono text-[10px]">Instant Booking</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Selected Spot Detail & Action */}
                  <div className="md:col-span-5 bg-space-950/90 rounded-2xl border border-white/10 p-5 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
                        RESERVATION DETAILS
                      </div>

                      <h3 className="text-lg font-display font-bold text-white mb-1">
                        {selectedSpot.title}
                      </h3>
                      <p className="text-xs text-slate-400 mb-4">{selectedSpot.address}</p>

                      <div className="space-y-2.5 mb-6 text-xs text-slate-300">
                        <div className="flex items-center justify-between py-1.5 border-b border-white/[0.06]">
                          <span className="text-slate-400">Rate:</span>
                          <span className="font-mono text-white font-semibold">{selectedSpot.price}</span>
                        </div>
                        <div className="flex items-center justify-between py-1.5 border-b border-white/[0.06]">
                          <span className="text-slate-400">Estimated Walk:</span>
                          <span className="font-mono text-emerald-400">2 min</span>
                        </div>
                        <div className="flex items-center justify-between py-1.5 border-b border-white/[0.06]">
                          <span className="text-slate-400">Security:</span>
                          <span className="font-mono text-slate-200">{selectedSpot.security}</span>
                        </div>
                        <div className="flex items-center justify-between py-1.5">
                          <span className="text-slate-400">Cancellation:</span>
                          <span className="text-slate-200">Free within 5m</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <button
                        onClick={handleBook}
                        className="w-full py-3 rounded-xl font-semibold text-xs tracking-wider uppercase text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2"
                      >
                        <Car className="w-4 h-4" />
                        <span>Reserve Spot for 1 Hour</span>
                      </button>
                      <p className="text-[10px] text-slate-500 text-center mt-2">
                        Simulated transaction • Powered by ParkHere Core Engine
                      </p>
                    </div>
                  </div>

                </div>
              ) : (
                /* Success / Digital Pass View */
                <div className="p-8 rounded-2xl bg-space-950 border border-emerald-500/40 text-center max-w-lg mx-auto">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-400/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                    PARKING SPOT CONFIRMED & RESERVED
                  </span>

                  <h3 className="text-2xl font-display font-bold text-white mt-2 mb-2">
                    {selectedSpot.title}
                  </h3>
                  <p className="text-xs text-slate-400 mb-6">{selectedSpot.address}</p>

                  {/* Digital Pass Card */}
                  <div className="p-5 rounded-2xl bg-space-900 border border-white/10 mb-6 flex flex-col items-center">
                    <QrCode className="w-32 h-32 text-cyan-400 mb-3 p-2 bg-space-950 rounded-xl border border-cyan-500/30" />
                    <span className="text-xs font-mono text-slate-300">PASS ID: #PH-9842-SECURE</span>
                    <span className="text-[11px] text-slate-500 mt-1">Scan at gate or ALPR will auto-lift barricade</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleReset}
                      className="flex-1 py-2.5 rounded-xl border border-white/10 hover:border-white/20 text-xs font-medium text-slate-300"
                    >
                      Book Another Spot
                    </button>
                    <button
                      onClick={onClose}
                      className="flex-1 py-2.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 text-xs font-medium"
                    >
                      Done Exploring
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Host View & Interactive ROI Yield Calculator */
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-space-950 border border-white/10">
                  <span className="text-xs text-slate-400 font-mono">Calculated Monthly Yield</span>
                  <div className="text-2xl font-display font-bold text-cyan-400 mt-1">
                    ${calculatedMonthly.toLocaleString()} / mo
                  </div>
                  <span className="text-[11px] text-emerald-400 mt-1 block">▲ Est. ${calculatedAnnual.toLocaleString()}/year</span>
                </div>
                <div className="p-4 rounded-xl bg-space-950 border border-white/10">
                  <span className="text-xs text-slate-400 font-mono">Host Protection</span>
                  <div className="text-2xl font-display font-bold text-white mt-1">$1,000,000</div>
                  <span className="text-[11px] text-slate-400 mt-1 block">Full property liability insurance</span>
                </div>
                <div className="p-4 rounded-xl bg-space-950 border border-white/10">
                  <span className="text-xs text-slate-400 font-mono">Environmental Impact</span>
                  <div className="text-2xl font-display font-bold text-emerald-400 mt-1">
                    {emissionsSaved} kg CO₂
                  </div>
                  <span className="text-[11px] text-slate-400 mt-1 block">Cruising emissions averted / mo</span>
                </div>
              </div>

              {/* Interactive Host Calculator Controls */}
              <div className="p-6 rounded-2xl bg-space-950/80 border border-cyan-500/30 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider">
                    Interactive Host Monetization Estimator
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">Real-time Dynamic Yield</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Spots slider */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-400">Available Spots:</span>
                      <span className="text-white font-bold">{spotsCount} spot{spotsCount > 1 ? 's' : ''}</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={spotsCount}
                      onChange={(e) => setSpotsCount(Number(e.target.value))}
                      className="w-full accent-cyan-400 cursor-pointer"
                    />
                  </div>

                  {/* Hours slider */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-400">Hours Open / Day:</span>
                      <span className="text-white font-bold">{hoursPerDay} hrs</span>
                    </div>
                    <input
                      type="range"
                      min="4"
                      max="24"
                      step="2"
                      value={hoursPerDay}
                      onChange={(e) => setHoursPerDay(Number(e.target.value))}
                      className="w-full accent-cyan-400 cursor-pointer"
                    />
                  </div>

                  {/* Zone selection */}
                  <div className="space-y-1.5">
                    <div className="text-xs font-mono text-slate-400">Density Zone:</div>
                    <div className="grid grid-cols-3 gap-1">
                      {['suburban', 'urban', 'downtown'].map((z) => (
                        <button
                          key={z}
                          type="button"
                          onClick={() => setZoneType(z)}
                          className={`py-1 px-1.5 rounded text-[10px] font-mono capitalize transition-all ${
                            zoneType === z
                              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400'
                              : 'bg-space-900 border border-white/10 text-slate-400'
                          }`}
                        >
                          {z}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Host Pitch & Call to Action */}
              <div className="p-6 rounded-2xl bg-space-950 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-base font-display font-bold text-white mb-1">
                    Ready to monetize your unused space?
                  </h4>
                  <p className="text-xs text-slate-300 max-w-md">
                    ParkHere's computer vision and automated scheduler handle reservations, access gating, and dynamic pricing with zero manual effort.
                  </p>
                </div>
                <a
                  href="#contact"
                  onClick={() => {
                    soundManager.playClick();
                    onClose();
                  }}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-semibold uppercase tracking-wider shadow-lg shadow-cyan-500/25 shrink-0"
                >
                  List Your Space Now
                </a>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

