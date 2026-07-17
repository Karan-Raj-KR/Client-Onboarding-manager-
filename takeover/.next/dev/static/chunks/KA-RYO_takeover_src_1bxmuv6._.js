(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/KA-RYO/takeover/src/lib/store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "acceptQuote",
    ()=>acceptQuote,
    "api",
    ()=>api,
    "extractDealWithAI",
    ()=>extractDealWithAI,
    "formatINR",
    ()=>formatINR,
    "formatINRPaise",
    ()=>formatINRPaise,
    "generateQuote",
    ()=>generateQuote,
    "getKagazState",
    ()=>getKagazState,
    "notify",
    ()=>notify,
    "paiseToRupee",
    ()=>paiseToRupee,
    "resetKagazStore",
    ()=>resetKagazStore,
    "rupeeToPaise",
    ()=>rupeeToPaise,
    "saveKagazState",
    ()=>saveKagazState,
    "simulatePayment",
    ()=>simulatePayment,
    "subscribe",
    ()=>subscribe,
    "updateDeal",
    ()=>updateDeal,
    "useKagazStore",
    ()=>useKagazStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function paiseToRupee(paise) {
    return paise / 100;
}
function rupeeToPaise(rupee) {
    return Math.round(rupee * 100);
}
function formatINR(rupeeAmount, includeDecimals = false) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: includeDecimals ? 2 : 0,
        maximumFractionDigits: 2
    }).format(rupeeAmount);
}
function formatINRPaise(paiseAmount, includeDecimals = false) {
    return formatINR(paiseToRupee(paiseAmount), includeDecimals);
}
// === SEED DATA ===
const INITIAL_BUSINESS = {
    id: 'biz_karyo',
    legal_name: 'KĀRYO TECHNOLOGIES PVT LTD',
    brand_name: 'KĀRYO',
    gstin: '29ABCDE1234F1Z5',
    address: '12, 3rd Cross Road, Koramangala 4th Block, Bengaluru, Karnataka 560034',
    bank_or_upi_handle: 'karyo@upi',
    logo_url: '/logo.png'
};
const INITIAL_RATE_CARD = [
    {
        id: 'rc_web',
        name: 'Restaurant Website + Online Ordering Setup',
        description: 'Custom React-based website, digital menu, shopping cart, WhatsApp ordering integration, and Google Business setup.',
        sac_code: '998313',
        unit_price_paise: 3500000,
        tax_rate_bps: 1800,
        active: true
    },
    {
        id: 'rc_brand',
        name: 'Brand Identity Starter',
        description: 'Logo suite, primary color palette, typography guidelines, visiting card design, and social media templates.',
        sac_code: '998311',
        unit_price_paise: 1800000,
        tax_rate_bps: 1800,
        active: true
    },
    {
        id: 'rc_social',
        name: 'Social Media Monthly Retainer',
        description: '12 customized graphics, caption copywriting in local language/tone, hashtag strategy, and monthly performance report.',
        sac_code: '998315',
        unit_price_paise: 2500000,
        tax_rate_bps: 1800,
        active: true
    },
    {
        id: 'rc_consult',
        name: 'Strategy Consultation',
        description: '2-hour deep-dive growth strategy session, competitor analysis snapshot, and local promotion action checklist.',
        sac_code: '998319',
        unit_price_paise: 500000,
        tax_rate_bps: 1800,
        active: true
    }
];
const INITIAL_DEALS = [
    {
        id: 'dl_paid',
        enquiry_id: null,
        client_name: 'Aaranya Sharma (Aaranya Boutique)',
        client_phone: '+91 98860 12345',
        project_title: 'Aaranya Boutique Branding',
        scope_summary: 'Complete brand guidelines, primary logo, and social media launch package.',
        budget_min_paise: 4000000,
        budget_max_paise: 6000000,
        timeline_days: 30,
        status: 'Paid',
        confidence_bps: 9500,
        missing_information: [],
        notes: 'Historical deal. Paid on time.',
        line_items: [
            {
                id: 'li_p1',
                rate_card_item_id: 'rc_brand',
                description: 'Brand Identity Starter Package',
                quantity: 1,
                unit_price_paise: 1800000,
                tax_rate_bps: 1800
            },
            {
                id: 'li_p2',
                rate_card_item_id: 'rc_social',
                description: 'Social Media Launch Retainer (Customized)',
                quantity: 1,
                unit_price_paise: 3200000,
                tax_rate_bps: 1800
            }
        ],
        created_at: '2026-06-15T10:00:00Z'
    },
    {
        id: 'dl_pending',
        enquiry_id: null,
        client_name: 'Rajesh Kumar (Gourmet Chai)',
        client_phone: '+91 99000 54321',
        project_title: 'Gourmet Chai Socials',
        scope_summary: 'Retainer for social media copywriting and strategy consultation.',
        budget_min_paise: 2000000,
        budget_max_paise: 3000000,
        timeline_days: 30,
        status: 'Payment Pending',
        confidence_bps: 9000,
        missing_information: [],
        notes: 'Historical deal. Awaiting invoice clearance.',
        line_items: [
            {
                id: 'li_pn1',
                rate_card_item_id: 'rc_social',
                description: 'Social Media Monthly Retainer',
                quantity: 1,
                unit_price_paise: 2500000,
                tax_rate_bps: 1800
            },
            {
                id: 'li_pn2',
                rate_card_item_id: 'rc_consult',
                description: 'Strategy Consultation',
                quantity: 1,
                unit_price_paise: 300000,
                tax_rate_bps: 1800
            }
        ],
        created_at: '2026-07-01T12:00:00Z'
    },
    {
        id: 'dl_quoted',
        enquiry_id: null,
        client_name: 'Dr. Ananya Rao (Veda Yoga)',
        client_phone: '+91 97410 98765',
        project_title: 'Veda Yoga Strategy',
        scope_summary: 'Strategy consultation and initial brand guidelines.',
        budget_min_paise: 3500000,
        budget_max_paise: 4500000,
        timeline_days: 20,
        status: 'Quoted',
        confidence_bps: 8500,
        missing_information: [
            'Exact studio locations'
        ],
        notes: 'Historical deal. Quote currently valid.',
        line_items: [
            {
                id: 'li_q1',
                rate_card_item_id: 'rc_brand',
                description: 'Brand Identity Starter Package (Custom)',
                quantity: 1,
                unit_price_paise: 1850000,
                tax_rate_bps: 1800
            },
            {
                id: 'li_q2',
                rate_card_item_id: 'rc_social',
                description: 'Social Media Marketing Launch',
                quantity: 1,
                unit_price_paise: 2350000,
                tax_rate_bps: 1800
            }
        ],
        created_at: '2026-07-10T15:30:00Z'
    },
    {
        id: 'dl_demo',
        enquiry_id: 'enq_demo',
        client_name: 'Aditi Sharma',
        client_phone: '+91 98450 67890',
        project_title: 'Restaurant Website with Online Ordering',
        scope_summary: 'Five-page website with menu card, cart, online order collection via WhatsApp, and basic SEO.',
        budget_min_paise: 3000000,
        budget_max_paise: 4000000,
        timeline_days: 14,
        status: 'New',
        confidence_bps: 9400,
        missing_information: [
            'GSTIN',
            'menu item pricing',
            'delivery partner integrations'
        ],
        notes: 'bhai restaurant ke liye website chahiye, online ordering bhi, budget 30-40k, kitne din?',
        line_items: [],
        created_at: '2026-07-17T15:00:00Z'
    }
];
const INITIAL_QUOTES = [
    {
        id: 'qt_paid',
        deal_id: 'dl_paid',
        number: 'Q-2026-0098',
        public_token: 'token_paid',
        status: 'Accepted',
        valid_until: '2026-06-22',
        subtotal_paise: 5000000,
        tax_paise: 900000,
        total_paise: 5900000,
        notes_to_client: 'Please make 100% payment on receipt.',
        accepted_at: '2026-06-16T11:00:00Z',
        created_at: '2026-06-15T11:00:00Z'
    },
    {
        id: 'qt_pending',
        deal_id: 'dl_pending',
        number: 'Q-2026-0099',
        public_token: 'token_pending',
        status: 'Accepted',
        valid_until: '2026-07-08',
        subtotal_paise: 2800000,
        tax_paise: 504000,
        total_paise: 3304000,
        notes_to_client: '50% advance, 50% on milestone complete.',
        accepted_at: '2026-07-02T10:00:00Z',
        created_at: '2026-07-01T13:00:00Z'
    },
    {
        id: 'qt_quoted',
        deal_id: 'dl_quoted',
        number: 'Q-2026-0100',
        public_token: 'token_yoga',
        status: 'Quoted',
        valid_until: '2026-07-24',
        subtotal_paise: 4200000,
        tax_paise: 756000,
        total_paise: 4956000,
        notes_to_client: 'Validity 14 days. Prices exclude extra domain hosting charges.',
        accepted_at: null,
        created_at: '2026-07-10T16:00:00Z'
    }
];
const INITIAL_INVOICES = [
    {
        id: 'inv_paid',
        quote_id: 'qt_paid',
        number: 'INV-2026-0098',
        status: 'Paid',
        issued_at: '2026-06-16T11:05:00Z',
        due_at: '2026-06-23T11:05:00Z',
        subtotal_paise: 5000000,
        tax_paise: 900000,
        total_paise: 5900000,
        pdf_path: '/invoices/inv_paid.pdf',
        created_at: '2026-06-16T11:05:00Z'
    },
    {
        id: 'inv_pending',
        quote_id: 'qt_pending',
        number: 'INV-2026-0099',
        status: 'Issued',
        issued_at: '2026-07-02T10:05:00Z',
        due_at: '2026-07-09T10:05:00Z',
        subtotal_paise: 2800000,
        tax_paise: 504000,
        total_paise: 3304000,
        pdf_path: '/invoices/inv_pending.pdf',
        created_at: '2026-07-02T10:05:00Z'
    }
];
const INITIAL_PAYMENTS = [
    {
        id: 'pay_paid',
        invoice_id: 'inv_paid',
        provider: 'mock',
        payment_url: 'https://upi.example/mock-pay/inv_paid',
        amount_paise: 5900000,
        status: 'paid',
        paid_at: '2026-06-16T15:00:00Z'
    },
    {
        id: 'pay_pending',
        invoice_id: 'inv_pending',
        provider: 'mock',
        payment_url: 'https://upi.example/mock-pay/inv_pending',
        amount_paise: 3304000,
        status: 'pending',
        paid_at: null
    }
];
const INITIAL_REMINDERS = [
    {
        id: 'rem_pending',
        invoice_id: 'inv_pending',
        scheduled_for: '2026-07-18T10:00:00Z',
        channel: 'whatsapp',
        status: 'armed',
        body: 'Hi Rajesh, a quick reminder that invoice INV-2026-0099 for ₹33,040 is pending. You can pay here: https://kagaz.in/pay/token_pending'
    }
];
const DEFAULT_STATE = {
    business: INITIAL_BUSINESS,
    rateCard: INITIAL_RATE_CARD,
    deals: INITIAL_DEALS,
    quotes: INITIAL_QUOTES,
    invoices: INITIAL_INVOICES,
    payments: INITIAL_PAYMENTS,
    reminders: INITIAL_REMINDERS
};
// === DATABASE ACTIONS ===
const DB_KEY = 'kagaz_db_v1';
function getKagazState() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const stored = window.localStorage.getItem(DB_KEY);
    if (!stored) {
        window.localStorage.setItem(DB_KEY, JSON.stringify(DEFAULT_STATE));
        return DEFAULT_STATE;
    }
    try {
        return JSON.parse(stored);
    } catch (e) {
        console.error('Failed to parse Kagaz DB from localStorage, resetting', e);
        window.localStorage.setItem(DB_KEY, JSON.stringify(DEFAULT_STATE));
        return DEFAULT_STATE;
    }
}
function saveKagazState(state) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.localStorage.setItem(DB_KEY, JSON.stringify(state));
    notify();
}
function resetKagazStore() {
    saveKagazState(DEFAULT_STATE);
}
// === OBSERVER PATTERN FOR REACT SYNCHRONIZATION ===
const LISTENERS = new Set();
function subscribe(listener) {
    LISTENERS.add(listener);
    return ()=>{
        LISTENERS.delete(listener);
    };
}
function notify() {
    LISTENERS.forEach((l)=>l());
}
function useKagazStore() {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useKagazStore.useState": ()=>getKagazState()
    }["useKagazStore.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useKagazStore.useEffect": ()=>{
            // Initial mount hydration - deferred to a microtask to avoid synchronous render updates collision
            queueMicrotask({
                "useKagazStore.useEffect": ()=>{
                    setState(getKagazState());
                }
            }["useKagazStore.useEffect"]);
            const handleUpdate = {
                "useKagazStore.useEffect.handleUpdate": ()=>{
                    setState(getKagazState());
                }
            }["useKagazStore.useEffect.handleUpdate"];
            const unsubscribe = subscribe(handleUpdate);
            // Sync across open browser tabs
            const handleStorage = {
                "useKagazStore.useEffect.handleStorage": (e)=>{
                    if (e.key === DB_KEY) {
                        handleUpdate();
                    }
                }
            }["useKagazStore.useEffect.handleStorage"];
            window.addEventListener('storage', handleStorage);
            return ({
                "useKagazStore.useEffect": ()=>{
                    unsubscribe();
                    window.removeEventListener('storage', handleStorage);
                }
            })["useKagazStore.useEffect"];
        }
    }["useKagazStore.useEffect"], []);
    return state;
}
_s(useKagazStore, "4kfcVmv3yDoOiDxRu/BMaTrisr8=");
function extractDealWithAI(dealId) {
    const state = getKagazState();
    const dealIndex = state.deals.findIndex((d)=>d.id === dealId);
    if (dealIndex === -1) return null;
    const deal = state.deals[dealIndex];
    if (deal.status !== 'New') return deal;
    const updatedDeal = {
        ...deal,
        status: 'Draft',
        // Pre-populate extraction content
        project_title: 'Restaurant Website with Online Ordering',
        client_name: 'Aditi Sharma (Aditi\'s Kitchen)',
        scope_summary: 'A responsive website for a local restaurant, complete with online menu listing, digital shopping cart checkout, and WhatsApp order submission routing.',
        budget_min_paise: 3000000,
        budget_max_paise: 4000000,
        timeline_days: 14,
        confidence_bps: 9400,
        line_items: [
            {
                id: 'li_demo_1',
                rate_card_item_id: 'rc_web',
                description: 'Restaurant Website + Online Ordering Setup',
                quantity: 1,
                unit_price_paise: 3500000,
                tax_rate_bps: 1800
            }
        ]
    };
    const newDeals = [
        ...state.deals
    ];
    newDeals[dealIndex] = updatedDeal;
    saveKagazState({
        ...state,
        deals: newDeals
    });
    return updatedDeal;
}
function updateDeal(dealId, updates) {
    const state = getKagazState();
    const dealIndex = state.deals.findIndex((d)=>d.id === dealId);
    if (dealIndex === -1) return null;
    const updatedDeal = {
        ...state.deals[dealIndex],
        ...updates
    };
    const newDeals = [
        ...state.deals
    ];
    newDeals[dealIndex] = updatedDeal;
    saveKagazState({
        ...state,
        deals: newDeals
    });
    return updatedDeal;
}
function generateQuote(dealId, validUntilDate, notesToClient) {
    const state = getKagazState();
    const deal = state.deals.find((d)=>d.id === dealId);
    if (!deal) return null;
    // Calculate pricing from line items
    let subtotal = 0;
    let tax = 0;
    deal.line_items.forEach((item)=>{
        const itemSubtotal = item.unit_price_paise * item.quantity;
        const itemTax = Math.round(itemSubtotal * item.tax_rate_bps / 10000);
        subtotal += itemSubtotal;
        tax += itemTax;
    });
    const total = subtotal + tax;
    // Generate unique Quote number
    const year = new Date().getFullYear();
    const quoteCount = state.quotes.length + 1;
    const quoteNumber = `Q-${year}-${String(quoteCount).padStart(4, '0')}`;
    const publicToken = `token_${Math.random().toString(36).substring(2, 15)}`;
    const newQuote = {
        id: `qt_${Math.random().toString(36).substring(2, 9)}`,
        deal_id: dealId,
        number: quoteNumber,
        public_token: publicToken,
        status: 'Quoted',
        valid_until: validUntilDate,
        subtotal_paise: subtotal,
        tax_paise: tax,
        total_paise: total,
        notes_to_client: notesToClient,
        accepted_at: null,
        created_at: new Date().toISOString()
    };
    // Update deal status to Quoted
    const updatedDeals = state.deals.map((d)=>d.id === dealId ? {
            ...d,
            status: 'Quoted'
        } : d);
    saveKagazState({
        ...state,
        quotes: [
            ...state.quotes,
            newQuote
        ],
        deals: updatedDeals
    });
    return newQuote;
}
function acceptQuote(publicToken, acceptedByName) {
    const state = getKagazState();
    const quoteIndex = state.quotes.findIndex((q)=>q.public_token === publicToken);
    if (quoteIndex === -1) return null;
    const quote = state.quotes[quoteIndex];
    // If already accepted, return existing artifacts to maintain idempotency
    if (quote.status === 'Accepted' || quote.accepted_at) {
        const invoice = state.invoices.find((i)=>i.quote_id === quote.id);
        const payment = state.payments.find((p)=>p.invoice_id === invoice?.id);
        const reminder = state.reminders.find((r)=>r.invoice_id === invoice?.id);
        if (invoice && payment && reminder) {
            return {
                quote,
                invoice,
                payment,
                reminder
            };
        }
    }
    // Transaction start
    const updatedQuote = {
        ...quote,
        status: 'Accepted',
        accepted_at: new Date().toISOString()
    };
    const newQuotes = [
        ...state.quotes
    ];
    newQuotes[quoteIndex] = updatedQuote;
    // Update deal status to Payment Pending (Won)
    const updatedDeals = state.deals.map((d)=>d.id === quote.deal_id ? {
            ...d,
            status: 'Payment Pending'
        } : d);
    // Generate invoice number
    const year = new Date().getFullYear();
    const invoiceCount = state.invoices.length + 1;
    const invoiceNumber = `INV-${year}-${String(invoiceCount).padStart(4, '0')}`;
    const invoiceId = `inv_${Math.random().toString(36).substring(2, 9)}`;
    const newInvoice = {
        id: invoiceId,
        quote_id: quote.id,
        number: invoiceNumber,
        status: 'Issued',
        issued_at: new Date().toISOString(),
        due_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        subtotal_paise: quote.subtotal_paise,
        tax_paise: quote.tax_paise,
        total_paise: quote.total_paise,
        pdf_path: null,
        created_at: new Date().toISOString()
    };
    // Generate payment link record (mock)
    const paymentId = `pay_${Math.random().toString(36).substring(2, 9)}`;
    const amountRupees = paiseToRupee(quote.total_paise).toFixed(2);
    const upiUrl = `upi://pay?pa=${encodeURIComponent(state.business.bank_or_upi_handle)}&pn=${encodeURIComponent(state.business.brand_name)}&am=${amountRupees}&cu=INR&tn=${encodeURIComponent('Invoice ' + invoiceNumber)}`;
    const newPayment = {
        id: paymentId,
        invoice_id: invoiceId,
        provider: 'mock',
        payment_url: upiUrl,
        amount_paise: quote.total_paise,
        status: 'pending',
        paid_at: null
    };
    // Arm reminders
    const deal = state.deals.find((d)=>d.id === quote.deal_id);
    const reminderId = `rem_${Math.random().toString(36).substring(2, 9)}`;
    const newReminder = {
        id: reminderId,
        invoice_id: invoiceId,
        scheduled_for: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
        channel: 'whatsapp',
        status: 'armed',
        body: `Hi ${deal?.client_name || 'Client'}, this is a reminder that invoice ${invoiceNumber} for ${formatINR(paiseToRupee(quote.total_paise))} is due in 5 days. You can view it here: https://kagaz.in/q/${publicToken}`
    };
    saveKagazState({
        ...state,
        quotes: newQuotes,
        deals: updatedDeals,
        invoices: [
            ...state.invoices,
            newInvoice
        ],
        payments: [
            ...state.payments,
            newPayment
        ],
        reminders: [
            ...state.reminders,
            newReminder
        ]
    });
    return {
        quote: updatedQuote,
        invoice: newInvoice,
        payment: newPayment,
        reminder: newReminder
    };
}
function simulatePayment(invoiceId) {
    const state = getKagazState();
    const invoiceIndex = state.invoices.findIndex((i)=>i.id === invoiceId);
    if (invoiceIndex === -1) return null;
    const invoice = state.invoices[invoiceIndex];
    if (invoice.status === 'Paid') return invoice;
    const updatedInvoice = {
        ...invoice,
        status: 'Paid'
    };
    const newInvoices = [
        ...state.invoices
    ];
    newInvoices[invoiceIndex] = updatedInvoice;
    // Update payment record
    const updatedPayments = state.payments.map((p)=>p.invoice_id === invoiceId ? {
            ...p,
            status: 'paid',
            paid_at: new Date().toISOString()
        } : p);
    // Update deal status to Paid
    const quote = state.quotes.find((q)=>q.id === invoice.quote_id);
    const updatedDeals = state.deals.map((d)=>quote && d.id === quote.deal_id ? {
            ...d,
            status: 'Paid'
        } : d);
    // Cancel pending reminders for this invoice
    const updatedReminders = state.reminders.map((r)=>r.invoice_id === invoiceId ? {
            ...r,
            status: 'cancelled'
        } : r);
    saveKagazState({
        ...state,
        invoices: newInvoices,
        payments: updatedPayments,
        deals: updatedDeals,
        reminders: updatedReminders
    });
    return updatedInvoice;
}
const api = {
    extractEnquiry: async (rawText)=>{
        // Simulate API delay
        await new Promise((resolve)=>setTimeout(resolve, 1500));
        const state = getKagazState();
        const enqId = `enq_${Math.random().toString(36).substring(2, 9)}`;
        const newEnquiry = {
            id: enqId,
            source: 'whatsapp_simulated',
            raw_text: rawText,
            transcript: rawText,
            received_at: new Date().toISOString()
        };
        // Find the demo deal, copy it as a new one
        const demoDeal = state.deals.find((d)=>d.id === 'dl_demo');
        const newDealId = `dl_${Math.random().toString(36).substring(2, 9)}`;
        const newDeal = {
            ...demoDeal || INITIAL_DEALS[3],
            id: newDealId,
            enquiry_id: enqId,
            status: 'New',
            created_at: new Date().toISOString()
        };
        saveKagazState({
            ...state,
            deals: [
                newDeal,
                ...state.deals
            ]
        });
        return {
            enquiry: newEnquiry,
            deal: newDeal
        };
    },
    getDeals: ()=>{
        return getKagazState().deals;
    },
    getDeal: (id)=>{
        return getKagazState().deals.find((d)=>d.id === id);
    },
    getDashboardSummary: ()=>{
        const state = getKagazState();
        // Counts
        const enquiries = state.deals.filter((d)=>[
                'New',
                'Extracted',
                'Draft'
            ].includes(d.status)).length;
        const quoted = state.deals.filter((d)=>d.status === 'Quoted').length;
        const won = state.deals.filter((d)=>[
                'Accepted',
                'Payment Pending',
                'Paid'
            ].includes(d.status)).length;
        // Rupee calculations (pre-GST service value of the deals)
        let quotedPaise = 0;
        let wonPaise = 0;
        let collectedPaise = 0;
        state.deals.forEach((deal)=>{
            // Calculate subtotal of this deal
            let subtotal = 0;
            deal.line_items.forEach((li)=>{
                subtotal += li.unit_price_paise * li.quantity;
            });
            // Special handling for seed data which might not have items calculated yet
            if (subtotal === 0) {
                if (deal.id === 'dl_paid') subtotal = 5000000;
                else if (deal.id === 'dl_pending') subtotal = 2800000;
                else if (deal.id === 'dl_quoted') subtotal = 4200000;
            }
            if (deal.status === 'Quoted') {
                quotedPaise += subtotal;
            } else if ([
                'Accepted',
                'Payment Pending',
                'Paid'
            ].includes(deal.status)) {
                wonPaise += subtotal;
                if (deal.status === 'Paid') {
                    collectedPaise += subtotal;
                }
            }
        });
        return {
            counts: {
                enquiries,
                quoted,
                won
            },
            amounts_paise: {
                quoted: quotedPaise,
                won: wonPaise,
                collected: collectedPaise
            },
            currency: 'INR'
        };
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/KA-RYO/takeover/src/components/OwnerShell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OwnerShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/lucide-react/dist/esm/icons/inbox.js [app-client] (ecmascript) <export default as Inbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/src/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f40$clerk$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/@clerk/react/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/@clerk/nextjs/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f40$clerk$2f$react$2f$dist$2f$hooks$2d$BiY5Zgpp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__I__as__UserButton$3e$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/@clerk/react/dist/hooks-BiY5Zgpp.mjs [app-client] (ecmascript) <locals> <export I as UserButton>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function OwnerShell({ children }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKagazStore"])();
    const summary = __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getDashboardSummary();
    const navItems = [
        {
            name: 'Dashboard',
            href: '/',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
        },
        {
            name: 'Inbox',
            href: '/inbox',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__["Inbox"]
        },
        {
            name: 'Rate Card',
            href: '/settings/rate-card',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
        }
    ];
    const handleReset = ()=>{
        if (confirm('Are you sure you want to reset the demo data to its initial state?')) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetKagazStore"])();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 flex flex-col min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-4 z-40 px-4 mb-6 flex justify-center no-print w-full pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "w-full max-w-5xl glass rounded-full px-6 py-3 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.06)] pointer-events-auto animate-in fade-in slide-in-from-top-4 duration-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center space-x-2 hover:opacity-80 transition-opacity",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-500",
                                        children: "Kagaz"
                                    }, void 0, false, {
                                        fileName: "[project]/KA-RYO/takeover/src/components/OwnerShell.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-neutral-100 text-neutral-900 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-neutral-200 shadow-sm",
                                        children: state.business.brand_name
                                    }, void 0, false, {
                                        fileName: "[project]/KA-RYO/takeover/src/components/OwnerShell.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/KA-RYO/takeover/src/components/OwnerShell.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/KA-RYO/takeover/src/components/OwnerShell.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center space-x-8 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-right",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold",
                                            children: "Won (Pre-GST)"
                                        }, void 0, false, {
                                            fileName: "[project]/KA-RYO/takeover/src/components/OwnerShell.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-bold text-foreground",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatINRPaise"])(summary.amounts_paise.won)
                                        }, void 0, false, {
                                            fileName: "[project]/KA-RYO/takeover/src/components/OwnerShell.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/KA-RYO/takeover/src/components/OwnerShell.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-right",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold",
                                            children: "Collected"
                                        }, void 0, false, {
                                            fileName: "[project]/KA-RYO/takeover/src/components/OwnerShell.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-bold text-emerald-600",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatINRPaise"])(summary.amounts_paise.collected)
                                        }, void 0, false, {
                                            fileName: "[project]/KA-RYO/takeover/src/components/OwnerShell.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/KA-RYO/takeover/src/components/OwnerShell.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/KA-RYO/takeover/src/components/OwnerShell.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleReset,
                                    title: "Reset Demo Data",
                                    className: "p-2 text-muted-foreground hover:text-foreground hover:bg-neutral-100 rounded-full transition-all hover:rotate-180 flex items-center gap-1.5 text-xs font-medium",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/KA-RYO/takeover/src/components/OwnerShell.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/components/OwnerShell.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Show"], {
                                    when: "signed-out",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-2 text-xs font-bold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f40$clerk$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SignInButton"], {
                                                mode: "modal",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "px-3 py-1.5 hover:bg-neutral-100 text-neutral-600 rounded-full transition-colors",
                                                    children: "Sign In"
                                                }, void 0, false, {
                                                    fileName: "[project]/KA-RYO/takeover/src/components/OwnerShell.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/KA-RYO/takeover/src/components/OwnerShell.tsx",
                                                lineNumber: 65,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f40$clerk$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SignUpButton"], {
                                                mode: "modal",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "px-3 py-1.5 bg-neutral-900 text-white hover:bg-neutral-800 rounded-full transition-colors shadow-sm",
                                                    children: "Sign Up"
                                                }, void 0, false, {
                                                    fileName: "[project]/KA-RYO/takeover/src/components/OwnerShell.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/KA-RYO/takeover/src/components/OwnerShell.tsx",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/KA-RYO/takeover/src/components/OwnerShell.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/components/OwnerShell.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Show"], {
                                    when: "signed-in",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f40$clerk$2f$react$2f$dist$2f$hooks$2d$BiY5Zgpp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__I__as__UserButton$3e$__["UserButton"], {
                                        appearance: {
                                            elements: {
                                                userButtonAvatarBox: 'w-8 h-8 shadow-sm'
                                            }
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/KA-RYO/takeover/src/components/OwnerShell.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/components/OwnerShell.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/KA-RYO/takeover/src/components/OwnerShell.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/KA-RYO/takeover/src/components/OwnerShell.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/KA-RYO/takeover/src/components/OwnerShell.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 pb-24 md:pb-6 flex flex-col",
                children: children
            }, void 0, false, {
                fileName: "[project]/KA-RYO/takeover/src/components/OwnerShell.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "fixed bottom-4 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-2 py-2 md:hidden no-print shadow-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-2",
                    children: navItems.map((item)=>{
                        const Icon = item.icon;
                        const isActive = pathname === item.href || item.href !== '/' && pathname.startsWith(item.href);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            className: `flex flex-col items-center justify-center w-16 h-12 rounded-2xl transition-all ${isActive ? 'bg-neutral-900 text-white shadow-md' : 'text-muted-foreground hover:bg-neutral-100 hover:text-foreground'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "w-5 h-5 mb-0.5"
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/components/OwnerShell.tsx",
                                    lineNumber: 101,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[9px] font-semibold",
                                    children: item.name
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/components/OwnerShell.tsx",
                                    lineNumber: 102,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, item.name, true, {
                            fileName: "[project]/KA-RYO/takeover/src/components/OwnerShell.tsx",
                            lineNumber: 92,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/KA-RYO/takeover/src/components/OwnerShell.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/KA-RYO/takeover/src/components/OwnerShell.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/KA-RYO/takeover/src/components/OwnerShell.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(OwnerShell, "9G7twssR6J+iHUz+D/brfc9vOSg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKagazStore"]
    ];
});
_c = OwnerShell;
var _c;
__turbopack_context__.k.register(_c, "OwnerShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuotePreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/src/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$src$2f$components$2f$OwnerShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/src/components/OwnerShell.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function QuotePreview() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const id = params.id;
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKagazStore"])();
    const quote = state.quotes.find((q)=>q.id === id);
    const deal = state.deals.find((d)=>d.id === quote?.deal_id);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [publicUrl, setPublicUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSending, setIsSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuotePreview.useEffect": ()=>{
            if (quote && ("TURBOPACK compile-time value", "object") !== 'undefined') {
                const origin = window.location.origin;
                setPublicUrl(`${origin}/q/${quote.public_token}`);
            }
        }
    }["QuotePreview.useEffect"], [
        quote
    ]);
    if (!quote || !deal) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$src$2f$components$2f$OwnerShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-10 text-center glass rounded-3xl animate-in fade-in max-w-md mx-auto mt-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-black text-rose-600 tracking-tight",
                        children: "Quote Not Found"
                    }, void 0, false, {
                        fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium text-muted-foreground mt-2",
                        children: "The requested quote does not exist."
                    }, void 0, false, {
                        fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push('/'),
                        className: "mt-6 inline-flex items-center px-6 py-2.5 bg-neutral-900 hover:bg-neutral-800 transition-colors text-white text-sm font-bold rounded-full shadow-[0_4px_14px_0_rgb(0,0,0,0.15)]",
                        children: "Go Back"
                    }, void 0, false, {
                        fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this);
    }
    // Copy quote link to clipboard
    const handleCopyLink = ()=>{
        navigator.clipboard.writeText(publicUrl);
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    // Open window print dialog
    const handlePrint = ()=>{
        window.print();
    };
    // Send Email via API
    const handleSendEmail = async ()=>{
        const email = window.prompt("Enter client's email address to send this quotation:");
        if (!email) return;
        setIsSending(true);
        try {
            const res = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    to: email,
                    subject: `Quotation #${quote.number} from ${state.business.brand_name}`,
                    quoteNumber: quote.number,
                    quoteUrl: publicUrl,
                    clientName: deal.client_name,
                    brandName: state.business.brand_name
                })
            });
            if (res.ok) {
                alert('Email sent successfully!');
            } else {
                alert('Failed to send email. Ensure you are using a verified Resend address (like your own email) on the free tier.');
            }
        } catch (e) {
            alert('Error sending email.');
        } finally{
            setIsSending(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$src$2f$components$2f$OwnerShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6 animate-in slide-in-from-bottom-4 duration-700 fade-in pb-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/50 pb-4 no-print",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>router.push('/'),
                                    className: "p-2 border border-border bg-white rounded-full hover:bg-neutral-50 text-muted-foreground transition-all hover:-translate-x-1 shadow-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-2xl font-black tracking-tighter text-foreground",
                                            children: "Quotation Issued"
                                        }, void 0, false, {
                                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-medium text-muted-foreground",
                                            children: [
                                                "Quote number: ",
                                                quote.number,
                                                " · Status: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-foreground",
                                                    children: quote.status
                                                }, void 0, false, {
                                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 118
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCopyLink,
                                    className: "inline-flex items-center space-x-1.5 px-4 py-2.5 border border-border bg-white hover:bg-neutral-50 text-xs font-bold rounded-full text-foreground transition-all shadow-sm active:scale-95",
                                    children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                className: "w-4 h-4 text-emerald-600"
                                            }, void 0, false, {
                                                fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                lineNumber: 115,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-emerald-700",
                                                children: "Copied Link!"
                                            }, void 0, false, {
                                                fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                lineNumber: 116,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                lineNumber: 120,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Copy Client Link"
                                            }, void 0, false, {
                                                fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                lineNumber: 121,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handlePrint,
                                    className: "inline-flex items-center space-x-1.5 px-4 py-2.5 border border-border bg-white hover:bg-neutral-50 text-xs font-bold rounded-full text-foreground transition-all shadow-sm active:scale-95",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Download PDF / Print"
                                        }, void 0, false, {
                                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSendEmail,
                                    disabled: isSending,
                                    className: "inline-flex items-center space-x-1.5 px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold rounded-full transition-all shadow-[0_4px_14px_0_rgb(0,0,0,0.2)] hover:-translate-y-0.5 active:scale-95 disabled:opacity-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: isSending ? 'Sending...' : 'Email Client'
                                        }, void 0, false, {
                                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `/q/${quote.public_token}`,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "inline-flex items-center space-x-1.5 px-5 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-200 text-xs font-bold rounded-full transition-all shadow-sm active:scale-95",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Test Client View"
                                        }, void 0, false, {
                                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                            className: "w-4 h-4 ml-0.5"
                                        }, void 0, false, {
                                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-blue-50/80 border border-blue-200/50 p-4 sm:p-5 rounded-2xl no-print space-y-2.5 shadow-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "font-black text-xs text-blue-800 uppercase tracking-wider flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-base mr-2",
                                    children: "👉"
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this),
                                " Demo Walkthrough Instruction"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-medium text-blue-900/80 leading-relaxed max-w-3xl",
                            children: [
                                "Click ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "text-blue-900",
                                    children: '"Test Client View"'
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                    lineNumber: 161,
                                    columnNumber: 19
                                }, this),
                                " above to open the public client acceptance page in a new browser tab. Once you accept the quote in that tab, come back here or check the Dashboard—it will instantly sync and update in real-time!"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-[2rem] shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-border/40 p-8 md:p-12 max-w-4xl mx-auto print-container print-card relative overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 right-0 w-96 h-96 bg-neutral-900/5 rounded-bl-full -z-10 blur-3xl pointer-events-none"
                        }, void 0, false, {
                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row justify-between gap-6 border-b border-border/60 pb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl font-black tracking-tighter uppercase bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-500",
                                            children: state.business.brand_name
                                        }, void 0, false, {
                                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                            lineNumber: 175,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] font-medium text-muted-foreground max-w-sm leading-relaxed",
                                            children: state.business.address
                                        }, void 0, false, {
                                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                            lineNumber: 176,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] font-bold text-foreground",
                                            children: [
                                                "GSTIN: ",
                                                state.business.gstin
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                            lineNumber: 177,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:text-right space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-black text-foreground tracking-tighter uppercase",
                                            children: "QUOTATION"
                                        }, void 0, false, {
                                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[11px] font-medium text-muted-foreground space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "Quote Number: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-foreground",
                                                            children: quote.number
                                                        }, void 0, false, {
                                                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                            lineNumber: 183,
                                                            columnNumber: 34
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "Date: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-foreground",
                                                            children: new Date(quote.created_at).toLocaleDateString('en-IN', {
                                                                day: 'numeric',
                                                                month: 'short',
                                                                year: 'numeric'
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 26
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "Valid Until: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-rose-600",
                                                            children: new Date(quote.valid_until).toLocaleDateString('en-IN', {
                                                                day: 'numeric',
                                                                month: 'short',
                                                                year: 'numeric'
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                            lineNumber: 185,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                            lineNumber: 182,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-b border-border/60",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground",
                                            children: "Client Profile"
                                        }, void 0, false, {
                                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-black text-sm text-foreground",
                                            children: deal.client_name
                                        }, void 0, false, {
                                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                            lineNumber: 194,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-medium text-muted-foreground",
                                            children: deal.client_phone
                                        }, void 0, false, {
                                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                            lineNumber: 195,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground",
                                            children: "Project Overview"
                                        }, void 0, false, {
                                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                            lineNumber: 198,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-black text-sm text-foreground",
                                            children: deal.project_title
                                        }, void 0, false, {
                                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                            lineNumber: 199,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-medium text-muted-foreground leading-relaxed",
                                            children: [
                                                "Timeline: ",
                                                deal.timeline_days,
                                                " Days"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                            lineNumber: 200,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-8 space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground",
                                    children: "Scope of Work"
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                    lineNumber: 206,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-medium text-foreground leading-relaxed bg-neutral-50 p-4 rounded-2xl border border-border/50",
                                    children: deal.scope_summary
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto pb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full text-left border-collapse text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-b-2 border-border text-muted-foreground font-bold tracking-wide uppercase text-[9px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-3 px-2",
                                                    children: "Service Description"
                                                }, void 0, false, {
                                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-3 px-2 text-center",
                                                    children: "SAC Code"
                                                }, void 0, false, {
                                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-3 px-2 text-center",
                                                    children: "Qty"
                                                }, void 0, false, {
                                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-3 px-2 text-right",
                                                    children: "Unit Price (₹)"
                                                }, void 0, false, {
                                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-3 px-2 text-right",
                                                    children: "GST Rate"
                                                }, void 0, false, {
                                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-3 px-2 text-right",
                                                    children: "Amount (₹)"
                                                }, void 0, false, {
                                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                            lineNumber: 216,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        className: "divide-y divide-border/50 font-medium",
                                        children: deal.line_items.map((item)=>{
                                            const lineTotal = item.unit_price_paise * item.quantity;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "text-foreground hover:bg-neutral-50/50 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-4 px-2 font-bold",
                                                        children: item.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                        lineNumber: 230,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-4 px-2 text-center text-muted-foreground",
                                                        children: state.rateCard.find((r)=>r.id === item.rate_card_item_id)?.sac_code || '998319'
                                                    }, void 0, false, {
                                                        fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-4 px-2 text-center",
                                                        children: item.quantity
                                                    }, void 0, false, {
                                                        fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                        lineNumber: 234,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-4 px-2 text-right",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatINRPaise"])(item.unit_price_paise)
                                                    }, void 0, false, {
                                                        fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                        lineNumber: 235,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-4 px-2 text-right text-blue-700 font-bold",
                                                        children: [
                                                            (item.tax_rate_bps / 100).toFixed(1),
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-4 px-2 text-right font-black",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatINRPaise"])(lineTotal)
                                                    }, void 0, false, {
                                                        fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, item.id, true, {
                                                fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                lineNumber: 229,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                lineNumber: 214,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row justify-between items-start gap-8 border-t-2 border-border pt-8 mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 md:max-w-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground",
                                            children: "Payment Terms & Notes"
                                        }, void 0, false, {
                                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                            lineNumber: 249,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] font-medium text-muted-foreground leading-relaxed whitespace-pre-line",
                                            children: quote.notes_to_client
                                        }, void 0, false, {
                                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                            lineNumber: 250,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                    lineNumber: 248,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full md:w-80 space-y-3 text-xs font-medium bg-neutral-50/80 p-5 rounded-2xl border border-border/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Subtotal ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[9px] uppercase",
                                                            children: "(Pre-GST)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                            lineNumber: 256,
                                                            columnNumber: 32
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-foreground",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatINRPaise"])(quote.subtotal_paise)
                                                }, void 0, false, {
                                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                            lineNumber: 255,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Integrated GST ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[9px] uppercase",
                                                            children: "(18%)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                            lineNumber: 260,
                                                            columnNumber: 38
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-foreground",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatINRPaise"])(quote.tax_paise)
                                                }, void 0, false, {
                                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                            lineNumber: 259,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-t border-border pt-3 mt-1 flex justify-between items-center text-sm font-black text-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "uppercase tracking-widest text-[11px]",
                                                    children: "Grand Total"
                                                }, void 0, false, {
                                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xl text-neutral-900",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatINRPaise"])(quote.total_paise, true)
                                                }, void 0, false, {
                                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                            lineNumber: 263,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                    lineNumber: 254,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                            lineNumber: 246,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-end border-t-2 border-border pt-8 mt-12 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4 w-48",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-b border-border/80 pb-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Owner Signature...",
                                                className: "w-full bg-transparent outline-none text-foreground font-signature text-2xl placeholder:text-muted-foreground/50 placeholder:font-sans placeholder:text-sm"
                                            }, void 0, false, {
                                                fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                lineNumber: 274,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                            lineNumber: 273,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] font-bold text-muted-foreground uppercase tracking-widest",
                                                    children: "Authorized By"
                                                }, void 0, false, {
                                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-sm text-foreground",
                                                    children: state.business.brand_name
                                                }, void 0, false, {
                                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                            lineNumber: 276,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                    lineNumber: 272,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4 w-48",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-b border-border/80 pb-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Client Signature...",
                                                className: "w-full bg-transparent outline-none text-foreground font-signature text-2xl placeholder:text-muted-foreground/50 placeholder:font-sans placeholder:text-sm"
                                            }, void 0, false, {
                                                fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                lineNumber: 283,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                            lineNumber: 282,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] font-bold text-muted-foreground uppercase tracking-widest",
                                                    children: "Accepted By"
                                                }, void 0, false, {
                                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Client Name",
                                                    defaultValue: deal.client_name,
                                                    className: "w-full font-bold text-sm text-foreground bg-transparent outline-none placeholder:text-muted-foreground/50"
                                                }, void 0, false, {
                                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                            lineNumber: 285,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                    lineNumber: 281,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                            lineNumber: 271,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-dashed border-border/80 pt-8 mt-12 text-center text-muted-foreground text-[10px] space-y-1.5 font-medium",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "This is a computer-generated quotation prepared by ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "KĀRYO"
                                        }, void 0, false, {
                                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                            lineNumber: 294,
                                            columnNumber: 67
                                        }, this),
                                        " via ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Kagaz"
                                        }, void 0, false, {
                                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                            lineNumber: 294,
                                            columnNumber: 94
                                        }, this),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                    lineNumber: 294,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "For any queries, please reach out to hello@karyo.in."
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                                    lineNumber: 295,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                            lineNumber: 293,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
                    lineNumber: 167,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
            lineNumber: 91,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/KA-RYO/takeover/src/app/quotes/[id]/page.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
_s(QuotePreview, "4yarMD8zJ+qd9qu+PA7eEgLk33o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKagazStore"]
    ];
});
_c = QuotePreview;
var _c;
__turbopack_context__.k.register(_c, "QuotePreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=KA-RYO_takeover_src_1bxmuv6._.js.map