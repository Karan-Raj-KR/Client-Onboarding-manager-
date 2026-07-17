'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ShieldCheck, Calendar, Clock, CheckCircle2, Loader2, FileCheck } from 'lucide-react';
import { useKagazStore, acceptQuote, formatINRPaise } from '@/lib/store';

export default function ClientAcceptPage() {
  const params = useParams();
  const router = useRouter();
  const token = params.token as string;

  const state = useKagazStore();
  
  // Find quote by token
  const quote = state.quotes.find((q) => q.public_token === token);
  const deal = state.deals.find((d) => d.id === quote?.deal_id);

  // Animation cascade state
  const [isAccepting, setIsAccepting] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    'Quotation accepted',
    'Generating GST-ready invoice...',
    'Creating payment link...',
    'Arming reminders...',
  ];

  // If quote is already accepted, check if there's an invoice and direct to it
  useEffect(() => {
    if (quote && quote.status === 'Accepted') {
      const invoice = state.invoices.find((i) => i.quote_id === quote.id);
      if (invoice) {
        // Redirect directly without animation if already accepted
        router.push(`/invoices/${invoice.id}`);
      }
    }
  }, [quote, state.invoices, router]);

  if (!quote || !deal) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center p-4">
        <div className="bg-white border border-[#E6DFD5] p-6 rounded-xl max-w-sm w-full text-center space-y-3">
          <h2 className="text-lg font-bold text-rose-800">Proposal Expired or Invalid</h2>
          <p className="text-xs text-[#6F6D6A]">This link is incorrect or the quote is no longer active.</p>
        </div>
      </div>
    );
  }

  // Run acceptance cascade
  const handleAccept = () => {
    setIsAccepting(true);
    setCurrentStep(0);

    // Trigger step-by-step checkmark animation
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(interval);
          
          // Trigger the atomic accept transaction
          const result = acceptQuote(token, deal.client_name);
          
          // Redirect to invoice page
          setTimeout(() => {
            if (result) {
              router.push(`/invoices/${result.invoice.id}`);
            }
          }, 800);
          
          return prev;
        }
        return prev + 1;
      });
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] py-6 px-4 flex flex-col justify-center items-center">
      {/* Mobile viewport simulator container */}
      <div className="w-full max-w-[420px] bg-white border border-[#E6DFD5] rounded-2xl shadow-md overflow-hidden flex flex-col">
        
        {/* Header banner */}
        <div className="bg-[#C85A17] p-5 text-white space-y-1 text-center">
          <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 px-2 py-0.5 rounded">Proposal</span>
          <h1 className="text-xl font-bold tracking-tight">{state.business.brand_name}</h1>
          <p className="text-[10px] text-white/80">{state.business.legal_name}</p>
        </div>

        {/* Client details card */}
        <div className="p-4 border-b border-[#E6DFD5] bg-[#FAF8F5]/30 space-y-3">
          <div className="flex justify-between items-start">
            <div className="space-y-0.5">
              <span className="text-[9px] font-bold text-[#6F6D6A] uppercase tracking-wider">Prepared For</span>
              <h4 className="font-bold text-sm text-[#1C1B19]">{deal.client_name}</h4>
              <p className="text-[10px] text-[#6F6D6A]">{deal.client_phone}</p>
            </div>
            <div className="text-right space-y-0.5">
              <span className="text-[9px] font-bold text-[#6F6D6A] uppercase tracking-wider">Quote ID</span>
              <p className="font-bold text-xs text-[#1C1B19]">{quote.number}</p>
              <p className="text-[9px] text-rose-700 font-semibold">Valid till: {new Date(quote.valid_until).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</p>
            </div>
          </div>

          <div className="bg-white border border-[#E6DFD5] rounded-xl p-3 flex justify-around text-center text-xs">
            <div className="space-y-0.5">
              <span className="text-[9px] font-bold text-[#6F6D6A] uppercase">Timeline</span>
              <p className="font-semibold text-[#1C1B19] flex items-center justify-center">
                <Clock className="w-3.5 h-3.5 mr-1 text-[#C85A17]" /> {deal.timeline_days} Days
              </p>
            </div>
            <div className="border-r border-[#E6DFD5]" />
            <div className="space-y-0.5">
              <span className="text-[9px] font-bold text-[#6F6D6A] uppercase">GST Ready</span>
              <p className="font-semibold text-emerald-700 flex items-center justify-center">
                <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-600" /> Yes
              </p>
            </div>
          </div>
        </div>

        {/* Project details */}
        <div className="p-5 flex-1 space-y-4">
          <div className="space-y-1">
            <h3 className="font-bold text-sm text-[#1C1B19]">{deal.project_title}</h3>
            <p className="text-xs text-[#6F6D6A] leading-relaxed">{deal.scope_summary}</p>
          </div>

          {/* Line items list */}
          <div className="space-y-2 border-t border-[#E6DFD5] pt-3">
            <h5 className="text-[9px] font-bold text-[#6F6D6A] uppercase tracking-wider">Estimated Costs</h5>
            <div className="space-y-2">
              {deal.line_items.map((item) => (
                <div key={item.id} className="flex justify-between items-start text-xs">
                  <div className="space-y-0.5 max-w-[70%]">
                    <p className="font-bold text-[#1C1B19]">{item.description}</p>
                    <p className="text-[10px] text-[#6F6D6A]">Qty: {item.quantity} &middot; GST {item.tax_rate_bps / 100}%</p>
                  </div>
                  <span className="font-bold text-[#1C1B19]">
                    {formatINRPaise(item.unit_price_paise * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Summary */}
          <div className="border-t border-[#E6DFD5] pt-3 space-y-1.5 text-xs">
            <div className="flex justify-between items-center text-[#6F6D6A]">
              <span>Subtotal (Base Value)</span>
              <span className="font-semibold">{formatINRPaise(quote.subtotal_paise)}</span>
            </div>
            <div className="flex justify-between items-center text-[#6F6D6A]">
              <span>GST (18%)</span>
              <span className="font-semibold">{formatINRPaise(quote.tax_paise)}</span>
            </div>
            <div className="border-t border-[#E6DFD5]/50 pt-2 flex justify-between items-center text-sm font-bold text-[#1C1B19]">
              <span>Total Quotation Cost</span>
              <span className="text-base text-[#C85A17]">{formatINRPaise(quote.total_paise, true)}</span>
            </div>
          </div>
        </div>

        {/* Accept Button Footer */}
        <div className="p-4 border-t border-[#E6DFD5] bg-[#FAF8F5]/30">
          <button
            onClick={handleAccept}
            className="w-full py-3 px-4 bg-[#C85A17] hover:bg-[#A94A10] text-white font-bold rounded-xl transition-colors shadow-sm flex items-center justify-center space-x-2"
          >
            <FileCheck className="w-4.5 h-4.5" />
            <span>Accept Proposal & Generate Invoice</span>
          </button>
        </div>

      </div>

      {/* Acceptance Progress Overlay Modal */}
      {isAccepting && (
        <div className="fixed inset-0 z-50 bg-[#1C1B19]/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-[#E6DFD5] rounded-xl max-w-sm w-full p-6 space-y-4 shadow-xl">
            <div className="flex items-center space-x-2">
              <Loader2 className="w-5 h-5 text-[#C85A17] animate-spin" />
              <h3 className="font-bold text-sm text-[#1C1B19]">Accepting Quotation...</h3>
            </div>
            
            {/* Steps checklist */}
            <div className="space-y-3 pt-2">
              {steps.map((step, idx) => {
                const isDone = idx < currentStep;
                const isActive = idx === currentStep;

                return (
                  <div
                    key={idx}
                    className={`flex items-center space-x-3 transition-opacity duration-300 ${
                      isDone || isActive ? 'opacity-100' : 'opacity-30'
                    }`}
                  >
                    {isDone ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    ) : isActive ? (
                      <Loader2 className="w-5 h-5 text-[#C85A17] animate-spin shrink-0" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border border-[#E6DFD5] shrink-0" />
                    )}
                    
                    <span className={`text-xs font-medium ${
                      isDone ? 'text-emerald-800 line-through' :
                      isActive ? 'text-[#1C1B19] font-bold' : 'text-[#6F6D6A]'
                    }`}>
                      {idx === 0 && isDone ? 'Quotation accepted' : step}
                    </span>
                  </div>
                );
              })}
            </div>

            {currentStep === steps.length - 1 && (
              <p className="text-[10px] text-emerald-700 font-semibold text-center bg-emerald-50 border border-emerald-100 py-1.5 px-3 rounded-lg animate-pulse">
                Invoice generated! Launching payment dashboard...
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
