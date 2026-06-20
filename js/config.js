/**
 * Ramzan Digital Agency OS
 * Global Configuration File
 * Update values here to reflect across the entire platform
 */

const CONFIG = {
    brand: {
        name: "Ramzan Digital",
        founder: "Muhammad Ramzan",
        tagline: "Engineering Business Architectures.",
        description: "High-performance websites and lead generation funnels engineered for modern businesses.",
        yearEstablished: 2024
    },
    contact: {
        email: "mramzan147800@gmail.com",
        whatsapp: "03491943858", // Intl format for links
        availability: "Available for new projects"
    },
    socials: {
        linkedin: "https://www.linkedin.com/in/muhammad-ramzan-bb63233aa/",
        github: "https://github.com/mramzan579"
    },
    features: {
        enableLeadScoring: true,
        enableWhatsAppFloatingCTA: true
    }
};

// Export for module usage, or attach to window for simple browser inclusion
if (typeof module !== 'undefined') {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
}
