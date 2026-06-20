/**
 * Ramzan Digital Agency OS
 * Central Project Database
 * 
 * Add new projects here, and they will automatically populate on the 
 * Homepage, Case Studies page, and Industry specific pages.
 */

const PROJECTS_DATA = [
    {
        id: "quran-academy",
        title: "Premium Quran Academy",
        industry: "Education",
        industrySlug: "education",
        outcomes: ["Global Reach", "Trial Conversion Funnel", "SEO Schema Ready"],
        description: "A comprehensive online educational platform connecting students globally with certified tutors, featuring a robust free-trial lead funnel.",
        thumbnail: "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=600&q=80",
        liveDemoUrl: "https://quranacademydemo.netlify.app/",
        caseStudyUrl: "quran-academy.html",
        techStack: ["HTML5", "CSS3", "Vanilla JS", "JSON-LD"]
    },
    {
        id: "aura-dining",
        title: "Aura Premium Dining",
        industry: "Restaurant",
        industrySlug: "restaurant",
        outcomes: ["WhatsApp Ordering", "Loyalty Program Setup", "High-End UI/UX"],
        description: "A luxury restaurant digital experience offering seamless table reservations and a WhatsApp-based fast ordering system.",
        thumbnail: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80",
        liveDemoUrl: "https://resturantondemo.netlify.app/",
        caseStudyUrl: "restaurant.html",
        techStack: ["HTML5", "CSS Variables", "Schema.org"]
    },
    {
        id: "premium-electrical",
        title: "Premium Electrical Services",
        industry: "Home Services",
        industrySlug: "home-services",
        outcomes: ["18-Min Response Funnel", "Local SEO Dominance", "24/7 Emergency CTA"],
        description: "A conversion-optimized lead generation machine for a 24/7 emergency electrician service, focused on high local search visibility.",
        thumbnail: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80",
        liveDemoUrl: "https://electricianondemo.netlify.app/",
        caseStudyUrl: "electrician.html",
        techStack: ["HTML5", "CSS3", "intl-tel-input"]
    },
    {
        id: "premium-solar",
        title: "Premium Solar Solutions",
        industry: "Solar Energy",
        industrySlug: "solar",
        outcomes: ["Savings Calculator", "B2B & B2C Flow", "Free Consultation Engine"],
        description: "An intelligent energy solutions platform designed to capture both residential homeowners and commercial real estate leads.",
        thumbnail: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80",
        liveDemoUrl: "https://solarpanelfunnel.netlify.app/",
        caseStudyUrl: "solar.html",
        techStack: ["HTML5", "CSS3", "JS Logic"]
    },
    {
        id: "dental-clinic",
        title: "Premium Dental Clinic",
        industry: "Healthcare",
        industrySlug: "healthcare",
        outcomes: ["Patient Portal", "AI Support Chat", "HIPAA Compliant UI"],
        description: "A high-trust medical platform built to automate patient onboarding and appointment scheduling for a premium dental clinic.",
        thumbnail: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80",
        liveDemoUrl: "https://dentalclinicondemo.netlify.app/",
        caseStudyUrl: "dental.html",
        techStack: ["HTML5", "CSS3", "Chatbot API"]
    },
    {
        id: "prime-realty",
        title: "PrimeVest Realty",
        industry: "Real Estate",
        industrySlug: "real-estate",
        outcomes: ["Property Match Engine", "Investor CRM Integration", "High-Ticket Funnel"],
        description: "A sophisticated lead generation engine for high-ticket property investments, complete with dynamic property filtering.",
        thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80",
        liveDemoUrl: "https://primevestrealty-demo.netlify.app/",
        caseStudyUrl: "real-estate.html",
        techStack: ["HTML5", "CSS3", "Vanilla JS"]
    }
];

if (typeof module !== 'undefined') {
    module.exports = PROJECTS_DATA;
} else {
    window.PROJECTS_DATA = PROJECTS_DATA;
}
