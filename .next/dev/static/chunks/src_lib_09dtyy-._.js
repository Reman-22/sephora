(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "APP_EARLY_ACCESS",
    ()=>APP_EARLY_ACCESS,
    "BEAUTY_OFFERS",
    ()=>BEAUTY_OFFERS,
    "CATEGORIES",
    ()=>CATEGORIES,
    "CHOSEN_FOR_YOU",
    ()=>CHOSEN_FOR_YOU,
    "NEW_ARRIVALS",
    ()=>NEW_ARRIVALS,
    "PAYMENT_FEATURES",
    ()=>PAYMENT_FEATURES,
    "PROMO_BANNERS",
    ()=>PROMO_BANNERS,
    "QUICK_LINKS",
    ()=>QUICK_LINKS,
    "REWARDS",
    ()=>REWARDS,
    "SELLING_FAST",
    ()=>SELLING_FAST
]);
const CHOSEN_FOR_YOU = [
    {
        id: "p1",
        brand: "Bobbi Brown",
        name: "Vitamin Enriched Face Base Primer",
        description: "A moisturizing primer that preps skin for makeup while delivering skin-benefiting vitamins.",
        priceMin: 78,
        colors: [
            "#F5CBA7",
            "#DC7633",
            "#873600"
        ],
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
        rating: 4.6,
        reviewCount: 2840,
        badge: "bestseller",
        badgeText: "BESTSELLER",
        category: "makeup"
    },
    {
        id: "p2",
        brand: "Jo Malone London",
        name: "English Pear & Freesia Cologne",
        description: "The freshness of just-ripe pears, wrapped in white freesia, mellowed by amber, musk and woods.",
        priceMin: 78,
        priceMax: 185,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
        rating: 4.8,
        reviewCount: 4520,
        badge: "bestseller",
        badgeText: "BESTSELLER",
        category: "fragrance"
    },
    {
        id: "p3",
        brand: "rhode",
        name: "Peptide Glazing Fluid",
        description: "A hydrating serum that leaves skin looking plump, glossy and smooth with a healthy glow.",
        priceMin: 29,
        image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop",
        rating: 4.7,
        reviewCount: 1840,
        badge: "new",
        badgeText: "NEW",
        isNew: true,
        category: "skincare"
    },
    {
        id: "p4",
        brand: "FENTY BEAUTY by Rihanna",
        name: "Pro Filt'r Soft Matte Longwear Foundation",
        description: "A weightless, medium-to-full foundation with a natural soft-matte finish.",
        priceMin: 39,
        colors: [
            "#FDF2E9",
            "#F7DC6F",
            "#E59866",
            "#D35400",
            "#7E5109"
        ],
        image: "https://images.unsplash.com/photo-1522335789203-aaa2f6e27e27?w=400&h=400&fit=crop",
        rating: 4.3,
        reviewCount: 8200,
        badge: "bestseller",
        badgeText: "BESTSELLER",
        category: "makeup"
    },
    {
        id: "p5",
        brand: "Drunk Elephant",
        name: "Protector + Perfecting Shield",
        description: "A mineral sunscreen that protects against UVA/UVB, infrared and blue light.",
        priceMin: 42,
        image: "https://images.unsplash.com/photo-1620916566398-39f114357be8?w=400&h=400&fit=crop",
        rating: 4.5,
        reviewCount: 1320,
        badge: "clean",
        badgeText: "CLEAN AT SEPHORA",
        isClean: true,
        category: "skincare"
    },
    {
        id: "p6",
        brand: "Olaplex",
        name: "No. 4P Blonde™ Enhancer",
        description: "A violet pigmented shampoo that neutralizes brassiness in blonde, bleached or highlighted hair.",
        priceMin: 32,
        image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2ee?w=400&h=400&fit=crop",
        rating: 4.4,
        reviewCount: 920,
        badge: "new",
        badgeText: "NEW",
        isNew: true,
        category: "hair"
    }
];
const APP_EARLY_ACCESS = [
    {
        id: "a1",
        brand: "Too Faced",
        name: "Born This Way Loose Setting Powder",
        description: "A weightless, translucent setting powder for a flawless, poreless finish.",
        priceMin: 39,
        colors: [
            "#FCF3CF",
            "#EBDEF0"
        ],
        image: "https://images.unsplash.com/photo-1599733589046-8a35a4d99e1c?w=400&h=400&fit=crop",
        rating: 4.5,
        reviewCount: 680,
        badge: "app-exclusive",
        badgeText: "APP EXCLUSIVE",
        isAppExclusive: true,
        category: "makeup"
    },
    {
        id: "a2",
        brand: "Rare Beauty",
        name: "Soft Pinch Liquid Blush",
        description: "A weightless, long-wearing liquid blush that blends effortlessly.",
        priceMin: 25,
        colors: [
            "#E8B4B8",
            "#D4A5A5",
            "#C97B7B"
        ],
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop",
        rating: 4.7,
        reviewCount: 3400,
        badge: "app-exclusive",
        badgeText: "APP EXCLUSIVE",
        isAppExclusive: true,
        category: "makeup"
    },
    {
        id: "a3",
        brand: "Kiehl's",
        name: "Ultra Facial Cream SPF 30",
        description: "A daily moisturizer with SPF 30 that provides 24-hour hydration.",
        priceMin: 44,
        image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop",
        rating: 4.6,
        reviewCount: 1120,
        badge: "app-exclusive",
        badgeText: "APP EXCLUSIVE",
        isAppExclusive: true,
        category: "skincare"
    },
    {
        id: "a4",
        brand: "MAC Cosmetics",
        name: "Ruby Woo Lipstick",
        description: "An iconic retro-matte lipstick in a universally flattering blue-red.",
        priceMin: 23,
        colors: [
            "#C8102E",
            "#900C3F",
            "#A93226"
        ],
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop",
        rating: 4.8,
        reviewCount: 15200,
        badge: "app-exclusive",
        badgeText: "APP EXCLUSIVE",
        isAppExclusive: true,
        category: "makeup"
    },
    {
        id: "a5",
        brand: "Laneige",
        name: "Lip Sleeping Mask Berry",
        description: "An overnight lip mask with Vitamin C and antioxidants.",
        priceMin: 24,
        image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=400&h=400&fit=crop",
        rating: 4.6,
        reviewCount: 8900,
        badge: "app-exclusive",
        badgeText: "APP EXCLUSIVE",
        isAppExclusive: true,
        category: "skincare"
    },
    {
        id: "a6",
        brand: "Ouai",
        name: "Fine Hair Shampoo",
        description: "A volumizing shampoo that strengthens and hydrates fine hair.",
        priceMin: 32,
        image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=400&fit=crop",
        rating: 4.4,
        reviewCount: 2100,
        badge: "app-exclusive",
        badgeText: "APP EXCLUSIVE",
        isAppExclusive: true,
        category: "hair"
    }
];
const NEW_ARRIVALS = [
    {
        id: "n1",
        brand: "Charlotte Tilbury",
        name: "Pillow Talk Lip Kit",
        description: "A bestselling lip kit with universally flattering nude-pink shade.",
        priceMin: 65,
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop",
        rating: 4.8,
        reviewCount: 420,
        badge: "new",
        badgeText: "NEW",
        isNew: true,
        category: "makeup"
    },
    {
        id: "n2",
        brand: "Tatcha",
        name: "The Dewy Skin Cream",
        description: "A rich cream for plump, dewy, glowing skin.",
        priceMin: 72,
        image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop",
        rating: 4.7,
        reviewCount: 1820,
        badge: "new",
        badgeText: "NEW",
        isNew: true,
        category: "skincare"
    },
    {
        id: "n3",
        brand: "Le Labo",
        name: "Santal 33 Eau de Parfum",
        description: "A cult-favorite woody aromatic fragrance.",
        priceMin: 210,
        priceMax: 360,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
        rating: 4.6,
        reviewCount: 5400,
        badge: "limited",
        badgeText: "LIMITED EDITION",
        isLimited: true,
        category: "fragrance"
    },
    {
        id: "n4",
        brand: "Augustinus Bader",
        name: "The Rich Cream",
        description: "A powerful face cream with TFC8® technology.",
        priceMin: 290,
        image: "https://images.unsplash.com/photo-1620916566398-39f114357be8?w=400&h=400&fit=crop",
        rating: 4.8,
        reviewCount: 640,
        badge: "clean",
        badgeText: "CLEAN AT SEPHORA",
        isClean: true,
        category: "skincare"
    },
    {
        id: "n5",
        brand: "Briogeo",
        name: "Scalp Revival Charcoal Shampoo",
        description: "A detoxifying charcoal + coconut micro-exfoliating shampoo.",
        priceMin: 44,
        image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=400&fit=crop",
        rating: 4.5,
        reviewCount: 1820,
        badge: "clean",
        badgeText: "CLEAN AT SEPHORA",
        isClean: true,
        category: "hair"
    }
];
const SELLING_FAST = [
    {
        id: "s1",
        brand: "Glow Recipe",
        name: "Watermelon Dew Moisturizer",
        description: "A plumping, oil-free moisturizer with hyaluronic acid.",
        priceMin: 34,
        image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop",
        rating: 4.6,
        reviewCount: 3200,
        badge: "bestseller",
        badgeText: "BESTSELLER",
        category: "skincare"
    },
    {
        id: "s2",
        brand: "Dior",
        name: "Rouge Dior Lipstick",
        description: "A couture lipstick with skincare benefits.",
        priceMin: 42,
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop",
        rating: 4.7,
        reviewCount: 5200,
        badge: "limited",
        badgeText: "LIMITED EDITION",
        isLimited: true,
        category: "makeup"
    },
    {
        id: "s3",
        brand: "Chanel",
        name: "Chance Eau Tendre",
        description: "A fresh floral fragrance for women.",
        priceMin: 145,
        priceMax: 205,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
        rating: 4.8,
        reviewCount: 7400,
        category: "fragrance"
    },
    {
        id: "s4",
        brand: "Living Proof",
        name: "No Frizz Shampoo",
        description: "A smoothing shampoo that blocks humidity.",
        priceMin: 31,
        image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=400&fit=crop",
        rating: 4.5,
        reviewCount: 1420,
        category: "hair"
    },
    {
        id: "s5",
        brand: "NARS",
        name: "Radiant Creamy Concealer",
        description: "A buildable, full coverage concealer.",
        priceMin: 32,
        image: "https://images.unsplash.com/photo-1522335789203-aaa2f6e27e27?w=400&h=400&fit=crop",
        rating: 4.6,
        reviewCount: 9200,
        badge: "bestseller",
        badgeText: "BESTSELLER",
        category: "makeup"
    }
];
const PROMO_BANNERS = [
    {
        id: "b1",
        eyebrow: "APP FEST",
        title: "App Exclusives You'll Love",
        subtitle: "Get early access to new launches and limited-time deals only in the Sephora app.",
        cta: "Shop App Deals",
        tone: "purple"
    },
    {
        id: "b2",
        eyebrow: "ONLY AT SEPHORA",
        title: "New from rhode",
        subtitle: "The new skin tint formulated with peptides + hyaluronic acid for a bare-skin finish.",
        cta: "Shop rhode",
        tone: "blue"
    },
    {
        id: "b3",
        eyebrow: "THE ULTIMATE",
        title: "Holiday Gift Guide",
        subtitle: "Curated sets and bestsellers for everyone on your list.",
        cta: "Explore Gifts",
        tone: "green"
    }
];
const BEAUTY_OFFERS = [
    {
        id: "o1",
        tag: "1 DAY LEFT",
        tagColor: "red",
        title: "20% Off All Fragrances",
        description: "Save on 400+ fragrances from top brands.",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=300&fit=crop",
        bgGradient: "from-rose-100 via-pink-50 to-white"
    },
    {
        id: "o2",
        tag: "LAST DAY",
        tagColor: "orange",
        title: "$20 Off $75 Purchase",
        description: "Use code SAVE20 at checkout. Beauty Insiders only.",
        image: "https://images.unsplash.com/photo-1522335789203-aaa2f6e27e27?w=400&h=300&fit=crop",
        bgGradient: "from-amber-50 via-orange-50 to-white"
    },
    {
        id: "o3",
        tag: "NEW",
        tagColor: "purple",
        title: "Gift With Purchase",
        description: "Get a deluxe sample set with any $35 purchase.",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop",
        bgGradient: "from-violet-50 via-purple-50 to-white"
    },
    {
        id: "o4",
        tag: "EXCLUSIVE",
        tagColor: "black",
        title: "Free Shipping on $25+",
        description: "Plus free 2-day delivery for Beauty Insiders Rouge.",
        image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=400&h=300&fit=crop",
        bgGradient: "from-slate-100 via-gray-50 to-white"
    }
];
const REWARDS = [
    {
        id: "r1",
        title: "Mini Deluxe Sample Set",
        brand: "Sephora Collection",
        points: 100,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
        type: "sample"
    },
    {
        id: "r2",
        title: "Full-Size Moisturizer",
        brand: "Drunk Elephant",
        points: 750,
        image: "https://images.unsplash.com/photo-1620916566398-39f114357be8?w=400&h=400&fit=crop",
        type: "full"
    },
    {
        id: "r3",
        title: "Custom Blush Compact",
        brand: "Sephora Collection",
        points: 250,
        image: "https://images.unsplash.com/photo-1522335789203-aaa2f6e27e27?w=400&h=400&fit=crop",
        type: "full"
    },
    {
        id: "r4",
        title: "Fragrance Discovery Set",
        brand: "Jo Malone London",
        points: 500,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
        type: "sample"
    }
];
const QUICK_LINKS = [
    {
        id: "q1",
        label: "Value Sets",
        icon: "🎁",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=240&fit=crop",
        href: "/category/gifts"
    },
    {
        id: "q2",
        label: "Fragrance",
        icon: "🌸",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=240&fit=crop",
        href: "/category/fragrance"
    },
    {
        id: "q3",
        label: "Lip",
        icon: "💄",
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=240&fit=crop",
        href: "/category/makeup"
    },
    {
        id: "q4",
        label: "Korean Skincare",
        icon: "✨",
        image: "https://images.unsplash.com/photo-1620916566398-39f114357be8?w=400&h=240&fit=crop",
        href: "/category/skincare"
    },
    {
        id: "q5",
        label: "Trending on Social",
        icon: "📱",
        image: "https://images.unsplash.com/photo-1522335789203-aaa2f6e27e27?w=400&h=240&fit=crop",
        href: "/category/new"
    },
    {
        id: "q6",
        label: "Clean Beauty",
        icon: "🌿",
        image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=240&fit=crop",
        href: "/category/brands"
    },
    {
        id: "q7",
        label: "Minis",
        icon: "🧴",
        image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=400&h=240&fit=crop",
        href: "/category/mini"
    }
];
const PAYMENT_FEATURES = [
    {
        id: "pf1",
        title: "Beauty Insider Rewards",
        description: "Earn points on every purchase and redeem them for exclusive rewards.",
        icon: "💎",
        cta: "Join for Free"
    },
    {
        id: "pf2",
        title: "Pay in 4 with Klarna",
        description: "Split your purchase into 4 interest-free payments with Klarna, Afterpay, or PayPal.",
        icon: "💳",
        cta: "Learn More"
    },
    {
        id: "pf3",
        title: "Same-Day Delivery",
        description: "Get your beauty essentials delivered in as little as 2 hours with DoorDash.",
        icon: "🚚",
        cta: "Order Now"
    }
];
const CATEGORIES = [
    "New",
    "Olive Young K-Beauty Edit",
    "Makeup",
    "Skincare",
    "Fragrance",
    "Hair",
    "Bath & Body",
    "Mini Size",
    "Brands",
    "Gifts & Value Sets",
    "Sales"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/store.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StoreProvider",
    ()=>StoreProvider,
    "findProduct",
    ()=>findProduct,
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
// =========================================================================
// All known products for lookup
// =========================================================================
const ALL_PRODUCTS = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHOSEN_FOR_YOU"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_EARLY_ACCESS"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NEW_ARRIVALS"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SELLING_FAST"]
];
function findProduct(id) {
    return ALL_PRODUCTS.find((p)=>p.id === id);
}
const StoreContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function StoreProvider({ children }) {
    _s();
    // Cart state
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isCartOpen, setCartOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Favorites state
    const [favorites, setFavorites] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isFavoritesOpen, setFavoritesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Auth state
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSignInOpen, setSignInOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSignUpOpen, setSignUpOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAccountMenuOpen, setAccountMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load persisted state
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StoreProvider.useEffect": ()=>{
            try {
                const savedCart = localStorage.getItem("sephora-cart");
                const savedFavs = localStorage.getItem("sephora-favorites");
                const savedUser = localStorage.getItem("sephora-user");
                if (savedCart) setCart(JSON.parse(savedCart));
                if (savedFavs) setFavorites(JSON.parse(savedFavs));
                if (savedUser) setUser(JSON.parse(savedUser));
            } catch  {
            // ignore
            }
        }
    }["StoreProvider.useEffect"], []);
    // Persist cart
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StoreProvider.useEffect": ()=>{
            localStorage.setItem("sephora-cart", JSON.stringify(cart));
        }
    }["StoreProvider.useEffect"], [
        cart
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StoreProvider.useEffect": ()=>{
            localStorage.setItem("sephora-favorites", JSON.stringify(favorites));
        }
    }["StoreProvider.useEffect"], [
        favorites
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StoreProvider.useEffect": ()=>{
            if (user) {
                localStorage.setItem("sephora-user", JSON.stringify(user));
            } else {
                localStorage.removeItem("sephora-user");
            }
        }
    }["StoreProvider.useEffect"], [
        user
    ]);
    // Cart actions
    const addToCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StoreProvider.useCallback[addToCart]": (productId, quantity = 1)=>{
            setCart({
                "StoreProvider.useCallback[addToCart]": (prev)=>{
                    const existing = prev.find({
                        "StoreProvider.useCallback[addToCart].existing": (item)=>item.productId === productId
                    }["StoreProvider.useCallback[addToCart].existing"]);
                    if (existing) {
                        return prev.map({
                            "StoreProvider.useCallback[addToCart]": (item)=>item.productId === productId ? {
                                    ...item,
                                    quantity: item.quantity + quantity
                                } : item
                        }["StoreProvider.useCallback[addToCart]"]);
                    }
                    return [
                        ...prev,
                        {
                            productId,
                            quantity
                        }
                    ];
                }
            }["StoreProvider.useCallback[addToCart]"]);
        }
    }["StoreProvider.useCallback[addToCart]"], []);
    const removeFromCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StoreProvider.useCallback[removeFromCart]": (productId)=>{
            setCart({
                "StoreProvider.useCallback[removeFromCart]": (prev)=>prev.filter({
                        "StoreProvider.useCallback[removeFromCart]": (item)=>item.productId !== productId
                    }["StoreProvider.useCallback[removeFromCart]"])
            }["StoreProvider.useCallback[removeFromCart]"]);
        }
    }["StoreProvider.useCallback[removeFromCart]"], []);
    const updateQuantity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StoreProvider.useCallback[updateQuantity]": (productId, quantity)=>{
            if (quantity <= 0) {
                setCart({
                    "StoreProvider.useCallback[updateQuantity]": (prev)=>prev.filter({
                            "StoreProvider.useCallback[updateQuantity]": (item)=>item.productId !== productId
                        }["StoreProvider.useCallback[updateQuantity]"])
                }["StoreProvider.useCallback[updateQuantity]"]);
                return;
            }
            setCart({
                "StoreProvider.useCallback[updateQuantity]": (prev)=>prev.map({
                        "StoreProvider.useCallback[updateQuantity]": (item)=>item.productId === productId ? {
                                ...item,
                                quantity
                            } : item
                    }["StoreProvider.useCallback[updateQuantity]"])
            }["StoreProvider.useCallback[updateQuantity]"]);
        }
    }["StoreProvider.useCallback[updateQuantity]"], []);
    const clearCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StoreProvider.useCallback[clearCart]": ()=>setCart([])
    }["StoreProvider.useCallback[clearCart]"], []);
    const cartTotal = cart.reduce((sum, item)=>{
        const product = findProduct(item.productId);
        if (!product) return sum;
        return sum + product.priceMin * item.quantity;
    }, 0);
    const cartCount = cart.reduce((sum, item)=>sum + item.quantity, 0);
    // Favorites actions
    const toggleFavorite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StoreProvider.useCallback[toggleFavorite]": (productId)=>{
            setFavorites({
                "StoreProvider.useCallback[toggleFavorite]": (prev)=>prev.includes(productId) ? prev.filter({
                        "StoreProvider.useCallback[toggleFavorite]": (id)=>id !== productId
                    }["StoreProvider.useCallback[toggleFavorite]"]) : [
                        ...prev,
                        productId
                    ]
            }["StoreProvider.useCallback[toggleFavorite]"]);
        }
    }["StoreProvider.useCallback[toggleFavorite]"], []);
    const isFavorite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StoreProvider.useCallback[isFavorite]": (productId)=>favorites.includes(productId)
    }["StoreProvider.useCallback[isFavorite]"], [
        favorites
    ]);
    // Auth actions
    const signIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StoreProvider.useCallback[signIn]": (email, _password)=>{
            const name = email.split("@")[0] || "Beautiful";
            const firstName = name.charAt(0).toUpperCase() + name.slice(1);
            setUser({
                firstName,
                lastName: "",
                email,
                points: 1250,
                tier: "Beauty Insider",
                memberSince: "2023"
            });
            setSignInOpen(false);
            setSignUpOpen(false);
        }
    }["StoreProvider.useCallback[signIn]"], []);
    const signUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StoreProvider.useCallback[signUp]": (data)=>{
            setUser({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                points: 0,
                tier: "Beauty Insider",
                memberSince: new Date().getFullYear().toString()
            });
            setSignUpOpen(false);
            setSignInOpen(false);
        }
    }["StoreProvider.useCallback[signUp]"], []);
    const signOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StoreProvider.useCallback[signOut]": ()=>{
            setUser(null);
            setAccountMenuOpen(false);
        }
    }["StoreProvider.useCallback[signOut]"], []);
    const value = {
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
        isCartOpen,
        setCartOpen,
        favorites,
        toggleFavorite,
        isFavorite,
        isFavoritesOpen,
        setFavoritesOpen,
        user,
        isSignedIn: user !== null,
        isSignInOpen,
        isSignUpOpen,
        signIn,
        signUp,
        signOut,
        setSignInOpen,
        setSignUpOpen,
        isAccountMenuOpen,
        setAccountMenuOpen
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StoreContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/lib/store.tsx",
        lineNumber: 268,
        columnNumber: 10
    }, this);
}
_s(StoreProvider, "YUcXeToS7dVb7ZqQUuRBApfmvsc=");
_c = StoreProvider;
function useStore() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(StoreContext);
    if (!ctx) {
        throw new Error("useStore must be used within a StoreProvider");
    }
    return ctx;
}
_s1(useStore, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "StoreProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_lib_09dtyy-._.js.map