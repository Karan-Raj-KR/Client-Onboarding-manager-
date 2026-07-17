module.exports = [
"[project]/KA-RYO/takeover/src/lib/store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
    if ("TURBOPACK compile-time truthy", 1) return DEFAULT_STATE;
    //TURBOPACK unreachable
    ;
    const stored = undefined;
}
function saveKagazState(state) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
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
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>getKagazState());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Initial mount hydration - deferred to a microtask to avoid synchronous render updates collision
        queueMicrotask(()=>{
            setState(getKagazState());
        });
        const handleUpdate = ()=>{
            setState(getKagazState());
        };
        const unsubscribe = subscribe(handleUpdate);
        // Sync across open browser tabs
        const handleStorage = (e)=>{
            if (e.key === DB_KEY) {
                handleUpdate();
            }
        };
        window.addEventListener('storage', handleStorage);
        return ()=>{
            unsubscribe();
            window.removeEventListener('storage', handleStorage);
        };
    }, []);
    return state;
}
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
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/KA-RYO/takeover/src/components/OwnerShell.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OwnerShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-ssr] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/lucide-react/dist/esm/icons/inbox.js [app-ssr] (ecmascript) <export default as Inbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/src/lib/store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f40$clerk$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/@clerk/react/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/@clerk/nextjs/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f40$clerk$2f$react$2f$dist$2f$hooks$2d$BiY5Zgpp$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__I__as__UserButton$3e$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/@clerk/react/dist/hooks-BiY5Zgpp.mjs [app-ssr] (ecmascript) <locals> <export I as UserButton>");
'use client';
;
;
;
;
;
;
function OwnerShell({ children }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useKagazStore"])();
    const summary = __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].getDashboardSummary();
    const navItems = [
        {
            name: 'Dashboard',
            href: '/',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
        },
        {
            name: 'Inbox',
            href: '/inbox',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__["Inbox"]
        },
        {
            name: 'Rate Card',
            href: '/settings/rate-card',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
        }
    ];
    const handleReset = ()=>{
        if (confirm('Are you sure you want to reset the demo data to its initial state?')) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetKagazStore"])();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 flex flex-col min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-4 z-40 px-4 mb-6 flex justify-center no-print w-full pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "w-full max-w-5xl glass rounded-full px-6 py-3 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.06)] pointer-events-auto animate-in fade-in slide-in-from-top-4 duration-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center space-x-2 hover:opacity-80 transition-opacity",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-500",
                                        children: "Kagaz"
                                    }, void 0, false, {
                                        fileName: "[project]/KA-RYO/takeover/src/components/OwnerShell.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center space-x-8 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-right",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold",
                                            children: "Won (Pre-GST)"
                                        }, void 0, false, {
                                            fileName: "[project]/KA-RYO/takeover/src/components/OwnerShell.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-bold text-foreground",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatINRPaise"])(summary.amounts_paise.won)
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-right",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold",
                                            children: "Collected"
                                        }, void 0, false, {
                                            fileName: "[project]/KA-RYO/takeover/src/components/OwnerShell.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-bold text-emerald-600",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatINRPaise"])(summary.amounts_paise.collected)
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleReset,
                                    title: "Reset Demo Data",
                                    className: "p-2 text-muted-foreground hover:text-foreground hover:bg-neutral-100 rounded-full transition-all hover:rotate-180 flex items-center gap-1.5 text-xs font-medium",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Show"], {
                                    when: "signed-out",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-2 text-xs font-bold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f40$clerk$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SignInButton"], {
                                                mode: "modal",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f40$clerk$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SignUpButton"], {
                                                mode: "modal",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Show"], {
                                    when: "signed-in",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f40$clerk$2f$react$2f$dist$2f$hooks$2d$BiY5Zgpp$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__I__as__UserButton$3e$__["UserButton"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 pb-24 md:pb-6 flex flex-col",
                children: children
            }, void 0, false, {
                fileName: "[project]/KA-RYO/takeover/src/components/OwnerShell.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "fixed bottom-4 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-2 py-2 md:hidden no-print shadow-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-2",
                    children: navItems.map((item)=>{
                        const Icon = item.icon;
                        const isActive = pathname === item.href || item.href !== '/' && pathname.startsWith(item.href);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            className: `flex flex-col items-center justify-center w-16 h-12 rounded-2xl transition-all ${isActive ? 'bg-neutral-900 text-white shadow-md' : 'text-muted-foreground hover:bg-neutral-100 hover:text-foreground'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "w-5 h-5 mb-0.5"
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/components/OwnerShell.tsx",
                                    lineNumber: 101,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/KA-RYO/takeover/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/lucide-react/dist/esm/icons/inbox.js [app-ssr] (ecmascript) <export default as Inbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/src/lib/store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$src$2f$components$2f$OwnerShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/KA-RYO/takeover/src/components/OwnerShell.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function Dashboard() {
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useKagazStore"])();
    const summary = __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].getDashboardSummary();
    // Helper to render status chips
    const getStatusChip = (status)=>{
        switch(status){
            case 'New':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                            className: "w-3 h-3 mr-1"
                        }, void 0, false, {
                            fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                            lineNumber: 19,
                            columnNumber: 13
                        }, this),
                        " New"
                    ]
                }, void 0, true, {
                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                    lineNumber: 18,
                    columnNumber: 11
                }, this);
            case 'Extracted':
            case 'Draft':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                            className: "w-3 h-3 mr-1"
                        }, void 0, false, {
                            fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                            lineNumber: 26,
                            columnNumber: 13
                        }, this),
                        " Draft"
                    ]
                }, void 0, true, {
                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                    lineNumber: 25,
                    columnNumber: 11
                }, this);
            case 'Quoted':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-50 text-purple-800 border border-purple-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                            className: "w-3 h-3 mr-1"
                        }, void 0, false, {
                            fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this),
                        " Quoted"
                    ]
                }, void 0, true, {
                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                    lineNumber: 31,
                    columnNumber: 11
                }, this);
            case 'Accepted':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                            className: "w-3 h-3 mr-1"
                        }, void 0, false, {
                            fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this),
                        " Accepted"
                    ]
                }, void 0, true, {
                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                    lineNumber: 37,
                    columnNumber: 11
                }, this);
            case 'Payment Pending':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-800 border border-rose-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                            className: "w-3 h-3 mr-1"
                        }, void 0, false, {
                            fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this),
                        " Payment Pending"
                    ]
                }, void 0, true, {
                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                    lineNumber: 43,
                    columnNumber: 11
                }, this);
            case 'Paid':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                            className: "w-3 h-3 mr-1 text-emerald-600"
                        }, void 0, false, {
                            fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this),
                        " Paid"
                    ]
                }, void 0, true, {
                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                }, this);
            default:
                return null;
        }
    };
    // Helper to get pre-GST deal amount
    const getDealPreGSTAmount = (deal)=>{
        let subtotal = 0;
        deal.line_items.forEach((li)=>{
            subtotal += li.unit_price_paise * li.quantity;
        });
        if (subtotal === 0) {
            if (deal.id === 'dl_paid') return 5000000;
            if (deal.id === 'dl_pending') return 2800000;
            if (deal.id === 'dl_quoted') return 4200000;
        }
        return subtotal;
    };
    // Check if we have active unprocessed enquiries
    const newEnquiriesCount = state.deals.filter((d)=>d.status === 'New').length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$src$2f$components$2f$OwnerShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row md:items-center justify-between gap-4 animate-in fade-in duration-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-black tracking-tighter text-foreground",
                                    children: "Kagaz Back-Office"
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium text-muted-foreground mt-1",
                                    children: "AI-powered pipelines for top-tier freelancers."
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/inbox",
                            className: "inline-flex items-center justify-center px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-semibold rounded-full shadow-[0_4px_14px_0_rgb(0,0,0,0.2)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 transition-all space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__["Inbox"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Open WhatsApp Inbox"
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                newEnquiriesCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ml-2 bg-white text-neutral-900 text-[10px] px-2 py-0.5 rounded-full font-bold shadow-sm",
                                    children: [
                                        newEnquiriesCount,
                                        " New"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                newEnquiriesCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "glass rounded-2xl p-5 flex items-start space-x-4 animate-in slide-in-from-top-4 duration-700 relative overflow-hidden group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        }, void 0, false, {
                            fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2.5 bg-neutral-900 text-white rounded-xl shadow-lg relative z-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__["Inbox"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                lineNumber: 103,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                            lineNumber: 102,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 space-y-1.5 relative z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-bold text-sm text-foreground",
                                    children: "New Hinglish Enquiry Received on WhatsApp!"
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground font-medium",
                                    children: "Aditi Sharma has requested a restaurant website quote. Run the 90-second demo by clicking the button below."
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/inbox",
                                        className: "inline-flex items-center text-xs font-black text-neutral-900 hover:text-blue-600 group/link transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Start 90-second demo"
                                            }, void 0, false, {
                                                fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                                lineNumber: 115,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "w-3.5 h-3.5 ml-1 transition-transform group-hover/link:translate-x-1"
                                            }, void 0, false, {
                                                fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                                lineNumber: 116,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                    lineNumber: 100,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 lg:grid-cols-4 gap-4 animate-in slide-in-from-bottom-8 duration-700 fill-mode-both",
                    style: {
                        animationDelay: '100ms'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "glass hover-lift rounded-2xl p-5 space-y-2 relative overflow-hidden group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -right-8 -top-8 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors duration-500"
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-bold text-muted-foreground uppercase tracking-wider relative z-10",
                                    children: "Enquiries"
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-3xl font-black tracking-tighter text-foreground relative z-10",
                                    children: summary.counts.enquiries
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[10px] font-medium text-muted-foreground relative z-10",
                                    children: "Incoming chat pipeline"
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "glass hover-lift rounded-2xl p-5 space-y-2 relative overflow-hidden group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -right-8 -top-8 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors duration-500"
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-bold text-muted-foreground uppercase tracking-wider relative z-10",
                                    children: "Quoted Value"
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-3xl font-black tracking-tighter text-foreground relative z-10",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatINRPaise"])(summary.amounts_paise.quoted)
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[10px] font-medium text-muted-foreground relative z-10",
                                    children: "Pre-GST service value"
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "glass hover-lift rounded-2xl p-5 space-y-2 relative overflow-hidden group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -right-8 -top-8 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-colors duration-500"
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-bold text-muted-foreground uppercase tracking-wider relative z-10",
                                    children: "Won Value"
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-3xl font-black tracking-tighter text-foreground relative z-10",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatINRPaise"])(summary.amounts_paise.won)
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[10px] font-medium text-muted-foreground relative z-10",
                                    children: "Pre-GST accepted + pending"
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "glass hover-lift rounded-2xl p-5 space-y-2 relative overflow-hidden group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -right-8 -top-8 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-colors duration-500"
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-bold text-emerald-600 uppercase tracking-wider relative z-10",
                                    children: "Collected Value"
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-3xl font-black tracking-tighter text-emerald-600 relative z-10",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatINRPaise"])(summary.amounts_paise.collected)
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[10px] font-medium text-emerald-600/70 relative z-10",
                                    children: "Pre-GST payments received"
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "glass rounded-2xl overflow-hidden shadow-sm animate-in slide-in-from-bottom-8 duration-700 fill-mode-both",
                    style: {
                        animationDelay: '200ms'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-6 py-4 border-b border-border/50 flex items-center justify-between bg-white/50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-sm text-foreground",
                                    children: "All Client Deals"
                                }, void 0, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-medium text-muted-foreground bg-neutral-100 px-2 py-0.5 rounded-full shadow-inner",
                                    children: [
                                        "Showing ",
                                        state.deals.length,
                                        " deals"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "divide-y divide-border/50 bg-white/30 backdrop-blur-md",
                            children: state.deals.map((deal)=>{
                                const quote = state.quotes.find((q)=>q.deal_id === deal.id);
                                const invoice = state.invoices.find((i)=>i.quote_id === quote?.id);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-5 sm:p-6 hover:bg-white/80 transition-colors group",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-3 flex-wrap gap-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-bold text-base text-foreground group-hover:text-blue-600 transition-colors",
                                                                children: deal.project_title
                                                            }, void 0, false, {
                                                                fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                                                lineNumber: 178,
                                                                columnNumber: 25
                                                            }, this),
                                                            getStatusChip(deal.status)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-medium text-muted-foreground",
                                                        children: [
                                                            "Client: ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-foreground",
                                                                children: deal.client_name
                                                            }, void 0, false, {
                                                                fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                                                lineNumber: 182,
                                                                columnNumber: 33
                                                            }, this),
                                                            " · ",
                                                            deal.client_phone
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-muted-foreground line-clamp-1",
                                                        children: deal.scope_summary
                                                    }, void 0, false, {
                                                        fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                                lineNumber: 176,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between sm:justify-end sm:space-x-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sm:text-right",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
                                                                children: "Pre-GST Value"
                                                            }, void 0, false, {
                                                                fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                                                lineNumber: 190,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-black text-base text-foreground",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatINRPaise"])(getDealPreGSTAmount(deal))
                                                            }, void 0, false, {
                                                                fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                                                lineNumber: 191,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex space-x-2",
                                                        children: [
                                                            deal.status === 'New' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/inbox",
                                                                className: "inline-flex items-center px-4 py-2 border border-border shadow-sm text-xs font-bold rounded-full bg-white text-foreground hover:bg-neutral-50 hover:shadow-md transition-all active:scale-95",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Process in Inbox"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                                                        lineNumber: 202,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                        className: "w-3.5 h-3.5 ml-1.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                                                        lineNumber: 203,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                                                lineNumber: 198,
                                                                columnNumber: 27
                                                            }, this),
                                                            (deal.status === 'Draft' || deal.status === 'Extracted') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/deals/${deal.id}`,
                                                                className: "inline-flex items-center px-4 py-2 border border-neutral-200 shadow-[0_2px_10px_rgba(0,0,0,0.08)] text-xs font-bold rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-all active:scale-95",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Edit Deal Card"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                                                        lineNumber: 211,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                        className: "w-3.5 h-3.5 ml-1.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                                                        lineNumber: 212,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                                                lineNumber: 207,
                                                                columnNumber: 27
                                                            }, this),
                                                            deal.status === 'Quoted' && quote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center space-x-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: `/quotes/${quote.id}`,
                                                                        className: "inline-flex items-center px-4 py-2 border border-border shadow-sm text-xs font-bold rounded-full bg-white text-foreground hover:bg-neutral-50 transition-all active:scale-95",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "View Quote"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                                                            lineNumber: 221,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                                                        lineNumber: 217,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: `/q/${quote.public_token}`,
                                                                        target: "_blank",
                                                                        className: "inline-flex items-center px-4 py-2 border border-blue-200 shadow-[0_2px_10px_rgba(59,130,246,0.15)] bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold rounded-full transition-all active:scale-95",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Client Link"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                                                            lineNumber: 228,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                                                        lineNumber: 223,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                                                lineNumber: 216,
                                                                columnNumber: 27
                                                            }, this),
                                                            deal.status === 'Accepted' && quote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/quotes/${quote.id}`,
                                                                className: "inline-flex items-center px-4 py-2 border border-border shadow-sm text-xs font-bold rounded-full bg-white text-foreground hover:bg-neutral-50 transition-all active:scale-95",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "View Quote"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                                                    lineNumber: 237,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                                                lineNumber: 233,
                                                                columnNumber: 27
                                                            }, this),
                                                            (deal.status === 'Payment Pending' || deal.status === 'Paid') && invoice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/invoices/${invoice.id}`,
                                                                className: "inline-flex items-center px-4 py-2 border border-emerald-200 shadow-[0_2px_10px_rgba(16,185,129,0.15)] bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full transition-all active:scale-95",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "View Invoice"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                                                        lineNumber: 245,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$KA$2d$RYO$2f$takeover$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                        className: "w-3.5 h-3.5 ml-1.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                                                        lineNumber: 246,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                                                lineNumber: 241,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                                lineNumber: 188,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                        lineNumber: 174,
                                        columnNumber: 19
                                    }, this)
                                }, deal.id, false, {
                                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                                    lineNumber: 173,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
            lineNumber: 77,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/KA-RYO/takeover/src/app/page.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1wykuwr._.js.map