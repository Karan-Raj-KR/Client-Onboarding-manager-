"use client";

import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
  Copy, 
  Check, 
  MessageSquare, 
  Instagram, 
  MapPin, 
  Mic, 
  Play, 
  Square, 
  TrendingUp, 
  ArrowRight, 
  Store, 
  Compass, 
  Calendar, 
  Share2, 
  Smartphone, 
  Activity, 
  Users, 
  CheckCircle2, 
  XCircle,
  HelpCircle
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"actions" | "shop" | "loop">("actions");
  
  // Action cards state
  const [actions, setActions] = useState([
    {
      id: "action-1",
      platform: "instagram",
      title: "Instagram Post",
      prompt: "Showcase fresh morning filter coffee brewing process",
      lang: "Kannada / English",
      tone: "Warm, Authentic, Local Pride",
      caption: "Morning vibe is here! Freshly ground, traditional filter coffee is brewing... ಬನ್ನಿ, ಸವಿಯಿರಿ! ☕️ Sourced directly from Western Ghats. Click link in bio to order!\n\n#GubbiCoffee #LocalPride #FilterCoffee #TumkurEats",
      imageSpec: "A close-up shot of hot coffee being poured from a height into a traditional brass davara, steam rising, warm morning lighting, rustic wooden table backdrop.",
      copied: false,
      status: "pending" as "pending" | "done" | "skipped",
    },
    {
      id: "action-2",
      platform: "whatsapp",
      title: "WhatsApp Broadcast",
      prompt: "Promote Chikmagalur organic cardamom and pepper",
      lang: "Kannada & English",
      tone: "Direct, Helpful, Informative",
      caption: "Hello from Gubbi Organics! 🌿 This week we have fresh cardamom & pepper from Chikmagalur. Direct from farms to your kitchen. Reply here to block yours! Fast home delivery in Gubbi town.",
      copied: false,
      status: "pending" as "pending" | "done" | "skipped",
    },
    {
      id: "action-3",
      platform: "gbp",
      title: "Google Business Post",
      prompt: "Aashadha weekend discount offer",
      lang: "English / Kannada",
      tone: "Excited, Urgent",
      caption: "Aashadha Special! Get 10% off on all organic spice powders this weekend. Traditional taste, zero preservatives. Visit us near Bus Stand, Gubbi. Direction: maps.google.com/?q=Gubbi+Organics",
      copied: false,
      status: "pending" as "pending" | "done" | "skipped",
    }
  ]);

  // Voice recording state
  const [isRecording, setIsRecording] = useState(false);
  const [recordTime, setRecordTime] = useState(0);
  const [voiceUploaded, setVoiceUploaded] = useState(true);
  const [waveHeights, setWaveHeights] = useState<number[]>([]);

  // Simulation timer for recorder
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRecording) {
      timer = setInterval(() => {
        setRecordTime(t => t + 1);
        setWaveHeights(Array.from({ length: 18 }, () => Math.floor(Math.random() * 24) + 4));
      }, 200);
    } else {
      setRecordTime(0);
      setWaveHeights(Array.from({ length: 18 }, () => 4));
    }
    return () => clearInterval(timer);
  }, [isRecording]);

  const copyToClipboard = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setActions(actions.map(act => act.id === id ? { ...act, copied: true } : act));
    setTimeout(() => {
      setActions(actions.map(act => act.id === id ? { ...act, copied: false } : act));
    }, 2000);
  };

  const handleActionStatus = (id: string, status: "done" | "skipped") => {
    setActions(actions.map(act => act.id === id ? { ...act, status: act.status === status ? "pending" : status } : act));
  };

  // Feedback analysis state (Week 1 -> Week 2 Adaptation)
  const completedCount = actions.filter(a => a.status === "done").length;
  const skippedCount = actions.filter(a => a.status === "skipped").length;

  return (
    <div className="flex flex-col h-full bg-neutral-950 font-sans relative">
      {/* Top Banner */}
      <div className="px-4 pt-8 pb-3 bg-gradient-to-b from-indigo-950/40 via-neutral-900/10 to-transparent border-b border-neutral-900 flex justify-between items-center z-20">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <span className="text-white font-extrabold text-sm tracking-tighter">K</span>
          </div>
          <div>
            <h1 className="text-lg font-black tracking-tight bg-gradient-to-r from-white via-neutral-100 to-neutral-300 bg-clip-text text-transparent">Karyo</h1>
            <p className="text-[10px] text-indigo-400 font-medium tracking-wide">GROWTH ENGINE</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 shadow-inner">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] text-neutral-400 font-semibold tracking-wider uppercase">Gubbi Cafe</span>
        </div>
      </div>

      {/* Main Scrollable Workspace */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-4 pb-20">
        
        {/* TAB 1: DAILY ACTIONS */}
        {activeTab === "actions" && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-3 duration-300">
            {/* Header info card */}
            <div className="p-3.5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-md">
              <div className="flex gap-2.5 items-start">
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 mt-0.5">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h2 className="text-xs font-semibold text-neutral-200">Today&apos;s Growth Actions</h2>
                  <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
                    Based on your competitive space in Gubbi, here are 3 optimized action cards. Spend 5 mins to post them.
                  </p>
                </div>
              </div>
            </div>

            {/* List of action cards */}
            <div className="space-y-4">
              {actions.map((act) => (
                <div 
                  key={act.id} 
                  className={`rounded-2xl border transition-all duration-300 ${
                    act.status === "done" 
                      ? "bg-emerald-950/10 border-emerald-500/30" 
                      : act.status === "skipped"
                      ? "bg-neutral-900/30 border-neutral-800 opacity-60"
                      : "bg-neutral-900 border-neutral-800 hover:border-neutral-700/80"
                  } p-4 relative overflow-hidden`}
                >
                  {/* Card glow */}
                  {act.status === "done" && (
                    <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 blur-[20px] rounded-full pointer-events-none" />
                  )}

                  {/* Card Head */}
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <div className={`p-1.5 rounded-lg ${
                        act.platform === "instagram" 
                          ? "bg-pink-500/10 text-pink-400" 
                          : act.platform === "whatsapp" 
                          ? "bg-emerald-500/10 text-emerald-400" 
                          : "bg-blue-500/10 text-blue-400"
                      }`}>
                        {act.platform === "instagram" && <Instagram size={14} />}
                        {act.platform === "whatsapp" && <MessageSquare size={14} />}
                        {act.platform === "gbp" && <Store size={14} />}
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-neutral-200">{act.title}</h3>
                        <p className="text-[9px] text-neutral-500 uppercase tracking-wider font-semibold">{act.tone}</p>
                      </div>
                    </div>
                    
                    {/* Done / Skipped Indicator Badge */}
                    {act.status !== "pending" && (
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                        act.status === "done" ? "bg-emerald-500/20 text-emerald-400" : "bg-neutral-800 text-neutral-400"
                      }`}>
                        {act.status === "done" ? "Posted" : "Skipped"}
                      </span>
                    )}
                  </div>

                  {/* Main Draft Box */}
                  <div className="bg-neutral-950 border border-neutral-800/80 rounded-xl p-3 mb-3 relative group">
                    <p className="text-[11px] text-neutral-300 leading-relaxed font-mono whitespace-pre-line">{act.caption}</p>
                    <button 
                      onClick={() => copyToClipboard(act.id, act.caption)}
                      className="absolute right-2 bottom-2 p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-all hover:bg-neutral-800 shadow"
                    >
                      {act.copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                    </button>
                    {act.copied && (
                      <span className="absolute right-10 bottom-2.5 text-[9px] font-bold text-emerald-400 bg-neutral-950 px-1">Copied!</span>
                    )}
                  </div>

                  {/* Image Specifications (Instagram specific) */}
                  {act.platform === "instagram" && act.imageSpec && (
                    <div className="mb-3.5 p-2.5 rounded-xl bg-neutral-950/40 border border-neutral-800/40">
                      <p className="text-[9px] font-semibold text-indigo-400 tracking-wide uppercase">📸 Visual Instruction</p>
                      <p className="text-[10px] text-neutral-400 mt-1 leading-relaxed">{act.imageSpec}</p>
                    </div>
                  )}

                  {/* Action Bar */}
                  <div className="flex gap-2">
                    {act.platform === "whatsapp" ? (
                      <a 
                        href={`https://wa.me/?text=${encodeURIComponent(act.caption)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-neutral-950 text-[10px] font-bold flex items-center justify-center gap-1.5 transition-all shadow-md shadow-emerald-950/30"
                      >
                        <MessageSquare size={12} />
                        Send Broadcast
                      </a>
                    ) : (
                      <button 
                        onClick={() => copyToClipboard(act.id, act.caption)}
                        className="flex-1 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-[10px] font-bold flex items-center justify-center gap-1.5 transition-all border border-neutral-700"
                      >
                        <Share2 size={12} />
                        Copy & Share
                      </button>
                    )}
                    
                    <button 
                      onClick={() => handleActionStatus(act.id, "done")}
                      className={`px-3 py-1.5 rounded-lg border text-[10px] font-bold flex items-center justify-center transition-all ${
                        act.status === "done" 
                          ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-400" 
                          : "bg-neutral-900 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200"
                      }`}
                    >
                      <CheckCircle2 size={12} className={act.status === "done" ? "mr-1" : ""} />
                      {act.status === "done" ? "Posted" : "Mark Posted"}
                    </button>

                    <button 
                      onClick={() => handleActionStatus(act.id, "skipped")}
                      className={`px-2.5 py-1.5 rounded-lg border text-[10px] font-bold flex items-center justify-center transition-all ${
                        act.status === "skipped" 
                          ? "bg-neutral-800 border-neutral-700 text-neutral-300" 
                          : "bg-neutral-900 border-neutral-800 text-neutral-500 hover:border-neutral-700 hover:text-neutral-300"
                      }`}
                    >
                      <XCircle size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick stats footer */}
            <div className="p-3 text-center rounded-xl bg-neutral-900/30 border border-neutral-800/40">
              <p className="text-[10px] text-neutral-500">
                You have posted <span className="text-neutral-300 font-bold">{completedCount}</span> / 3 cards today. 
                {completedCount === 3 ? " Perfect week incoming! 🎉" : " Keep it up!"}
              </p>
            </div>
          </div>
        )}

        {/* TAB 2: MY SHOP PROFILE & VOICE NOTE */}
        {activeTab === "shop" && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-3 duration-300">
            {/* Business Profile Title */}
            <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Store size={16} className="text-emerald-400" />
                  <h3 className="text-xs font-bold text-neutral-200">Gubbi Organic Coffee & Spices</h3>
                </div>
                <span className="text-[9px] bg-neutral-800 text-neutral-400 px-2 py-0.5 rounded border border-neutral-700">Retail</span>
              </div>
              
              <div className="space-y-2 text-[11px] text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <MapPin size={12} className="text-neutral-500" />
                  <span>Bus Stand Road, Gubbi, Tumkur, Karnataka</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar size={12} className="text-neutral-500" />
                  <span>Onboarded July 15, 2026</span>
                </div>
              </div>
            </div>

            {/* Tone Profile Voice Capture */}
            <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-4">
              <div>
                <h3 className="text-xs font-bold text-neutral-200 flex items-center gap-1.5">
                  <Mic size={14} className="text-indigo-400" />
                  Shop Tone Capture Voice Note
                </h3>
                <p className="text-[10px] text-neutral-500 mt-0.5">Record a 30s description of your shop to build your custom tone profile.</p>
              </div>

              {/* Recorder UI */}
              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => {
                      setIsRecording(!isRecording);
                      if (!isRecording) setVoiceUploaded(false);
                    }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      isRecording 
                        ? "bg-red-500 text-white animate-pulse" 
                        : "bg-indigo-600 text-white hover:bg-indigo-500 shadow-md shadow-indigo-600/20"
                    }`}
                  >
                    {isRecording ? <Square size={14} /> : <Mic size={16} />}
                  </button>
                  <div>
                    <span className="text-[10px] font-bold text-neutral-300">
                      {isRecording ? `Recording... 0:${recordTime.toString().padStart(2, '0')}` : "Voice profile ready"}
                    </span>
                    <p className="text-[9px] text-neutral-500 mt-0.5">
                      {isRecording ? "Speak naturally about your specialties" : "Recorded on onboarding"}
                    </p>
                  </div>
                </div>

                {/* Animated waves */}
                <div className="flex gap-0.5 items-center h-8">
                  {waveHeights.map((h, i) => (
                    <span 
                      key={i} 
                      className={`w-0.5 rounded-full transition-all duration-150 ${isRecording ? "bg-red-400" : "bg-indigo-400"}`} 
                      style={{ height: `${h}px` }} 
                    />
                  ))}
                </div>
              </div>

              {/* Transcription & Tone Profile Output */}
              {voiceUploaded && (
                <div className="space-y-3 pt-1 border-t border-neutral-800/80">
                  <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-900">
                    <span className="text-[9px] font-semibold text-neutral-500 uppercase tracking-wider">Voice Transcription</span>
                    <p className="text-[10px] text-neutral-400 mt-1 italic leading-relaxed">
                      &quot;We source all our coffee beans directly from nearby estate in Chikmagalur. It is freshly roasted every morning. Local people love our traditional filter coffee and spices.&quot;
                    </p>
                  </div>

                  <div className="p-3 bg-indigo-950/10 rounded-xl border border-indigo-500/20">
                    <span className="text-[9px] font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1">
                      <Sparkles size={10} /> Active Tone Profile
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {["Traditional / Authentic", "Warm Welcoming", "Manglish & Kannada", "No hard-selling"].map((tag, idx) => (
                        <span key={idx} className="text-[9.5px] bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 px-2 py-0.5 rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Competitor Insights Box */}
            <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3">
              <div>
                <h3 className="text-xs font-bold text-neutral-200 flex items-center gap-1.5">
                  <Compass size={14} className="text-emerald-400" />
                  Nearby Competitor Insights
                </h3>
                <p className="text-[10px] text-neutral-500 mt-0.5">Locality scan: Gubbi town, 2km radius</p>
              </div>

              <div className="space-y-2">
                <div className="p-2.5 bg-neutral-950 rounded-xl border border-neutral-900 flex justify-between items-center text-[10px]">
                  <span className="text-neutral-400">Gubbi Fresh Spices</span>
                  <span className="text-indigo-400 font-bold">1.2 km away</span>
                </div>
                <div className="p-2.5 bg-neutral-950 rounded-xl border border-neutral-900 flex justify-between items-center text-[10px]">
                  <span className="text-neutral-400">Coffee Day Express</span>
                  <span className="text-indigo-400 font-bold">0.8 km away</span>
                </div>
                <div className="text-[10.5px] text-neutral-400 bg-neutral-950/40 p-2.5 rounded-xl border border-neutral-900/60 leading-relaxed">
                  💡 <span className="font-bold text-neutral-300">Strategy:</span> Highlight organic sourcing and traditional filter brewing style to bypass corporate pricing.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: THE ADAPTATION LOOP */}
        {activeTab === "loop" && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-3 duration-300">
            {/* Header info */}
            <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2">
              <div className="flex gap-2 items-center">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <TrendingUp size={14} />
                </div>
                <h3 className="text-xs font-bold text-neutral-200">Weekly Adaptation Loop</h3>
              </div>
              <p className="text-[10px] text-neutral-500 leading-relaxed">
                Karyo monitors which daily cards you post or skip. Every Monday, it generates an updated strategy.
              </p>
            </div>

            {/* Campaign Comparison (Week 1 -> Week 2 Diff View) */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden">
              <div className="p-3.5 bg-neutral-950 border-b border-neutral-800/80 flex items-center justify-between">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Evolution Blueprint</span>
                <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold">Week 2 Active</span>
              </div>

              <div className="p-4 space-y-4">
                {/* Week 1 Card */}
                <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-800/50 relative">
                  <span className="text-[9px] text-neutral-500 font-bold uppercase tracking-wider">Week 1 (Base Plan)</span>
                  <div className="flex gap-4 mt-2">
                    <div className="flex-1 space-y-1 text-[10px]">
                      <div className="flex justify-between text-neutral-400">
                        <span>3 Instagram posts</span>
                        <span>0 posted</span>
                      </div>
                      <div className="flex justify-between text-neutral-400">
                        <span>2 WhatsApp Broadcasts</span>
                        <span className="text-emerald-400 font-bold">2 posted</span>
                      </div>
                      <div className="flex justify-between text-neutral-400">
                        <span>2 Google Business posts</span>
                        <span className="text-emerald-400 font-bold">1 posted</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2.5 pt-2.5 border-t border-neutral-900/60 text-[9px] text-neutral-500">
                    Outcomes: WhatsApp generated 14 inquiries/orders. Instagram posts got 0 responses.
                  </div>
                </div>

                {/* Transition Arrow */}
                <div className="flex justify-center text-indigo-400 animate-bounce">
                  <ArrowRight size={16} className="rotate-90" />
                </div>

                {/* Week 2 Card */}
                <div className="p-3 bg-indigo-950/15 rounded-xl border border-indigo-500/20 relative">
                  <div className="absolute top-3 right-3 flex items-center gap-1 text-[8.5px] font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full">
                    <Sparkles size={8} /> Adapted
                  </div>
                  <span className="text-[9.5px] text-indigo-300 font-bold uppercase tracking-wider">Week 2 (Adjusted Strategy)</span>
                  <div className="flex gap-4 mt-2">
                    <div className="flex-1 space-y-1 text-[10px]">
                      <div className="flex justify-between text-neutral-300">
                        <span>1 Instagram posts</span>
                        <span className="text-indigo-400 font-semibold">-66% (Reduced)</span>
                      </div>
                      <div className="flex justify-between text-neutral-300">
                        <span>4 WhatsApp Broadcasts</span>
                        <span className="text-emerald-400 font-bold">+100% (Boosted)</span>
                      </div>
                      <div className="flex justify-between text-neutral-300">
                        <span>3 Google Business posts</span>
                        <span className="text-emerald-400 font-bold">+50% (Boosted)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-indigo-950/80">
                    <span className="text-[9px] font-bold text-indigo-400 block uppercase tracking-wide">🧠 Why it adapted</span>
                    <p className="text-[10px] text-neutral-400 mt-1 leading-relaxed">
                      &quot;Gubbi customers respond exceptionally well to direct WhatsApp broadcasts with pricing, while Instagram has low local density. We have shifted the effort budget to WhatsApp broadcasts and GBP local offers.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Feedback input simulator */}
            <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3">
              <div>
                <h4 className="text-xs font-bold text-neutral-200 flex items-center gap-1">
                  <Activity size={13} className="text-indigo-400" />
                  Outcome Simulator
                </h4>
                <p className="text-[9.5px] text-neutral-500 mt-0.5">Simulate how the merchant logs results to the AI.</p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div className="p-2 bg-neutral-950 rounded-lg border border-neutral-850 flex justify-between items-center">
                  <span className="text-neutral-400">Total Posted</span>
                  <span className="font-bold text-neutral-200">{completedCount}</span>
                </div>
                <div className="p-2 bg-neutral-950 rounded-lg border border-neutral-850 flex justify-between items-center">
                  <span className="text-neutral-400">Total Skipped</span>
                  <span className="font-bold text-neutral-200">{skippedCount}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Premium Glassmorphic Bottom Navigation Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-neutral-900/90 border-t border-neutral-800/80 backdrop-blur-md px-6 flex justify-between items-center z-30">
        <button 
          onClick={() => setActiveTab("actions")}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === "actions" ? "text-indigo-400 scale-105" : "text-neutral-500 hover:text-neutral-300"}`}
        >
          <Sparkles size={16} />
          <span className="text-[9px] font-semibold tracking-wider">Today</span>
        </button>

        <button 
          onClick={() => setActiveTab("shop")}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === "shop" ? "text-indigo-400 scale-105" : "text-neutral-500 hover:text-neutral-300"}`}
        >
          <Store size={16} />
          <span className="text-[9px] font-semibold tracking-wider">My Shop</span>
        </button>

        <button 
          onClick={() => setActiveTab("loop")}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === "loop" ? "text-indigo-400 scale-105" : "text-neutral-500 hover:text-neutral-300"}`}
        >
          <TrendingUp size={16} />
          <span className="text-[9px] font-semibold tracking-wider">Adaptation</span>
        </button>
      </div>
    </div>
  );
}
