/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
        SERVER_URL: process.env.SERVICES_URL,
        AUTH_URL: process.env.AUTH_URL,
        JWT_SECRET: process.env.JWT_SECRET,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        AUTH_HOST: process.env.AUTH_HOST,
        BUSINESS_HOST: process.env.BUSINESS_HOST,
        APP_URL: process.env.APP_URL,
        HT_MARKETING_DOMAIN: process.env.HT_MARKETING_DOMAIN,
        HT_APP_DOMAIN: process.env.HT_APP_DOMAIN,
        WS_MARKETING_DOMAIN: process.env.WS_MARKETING_DOMAIN,
        WS_APP_DOMAIN: process.env.WS_APP_DOMAIN,
        HT_COOKIE_DOMAIN: process.env.HT_COOKIE_DOMAIN,
        WS_COOKIE_DOMAIN: process.env.WS_COOKIE_DOMAIN,
        HT_AUTH_PAGE_URL: process.env.HT_AUTH_PAGE_URL,
        WS_AUTH_PAGE_URL: process.env.WS_AUTH_PAGE_URL,
        SEARCH_ENGINE_SIMULATOR_API: process.env.SEARCH_ENGINE_SIMULATOR_API,
        SEARCH_ENGINE_KEYWORDS_EXTRACTOR_API: process.env.SEARCH_ENGINE_KEYWORDS_EXTRACTOR_API,
        SAMPLE_EMAIL_URL: process.env.SAMPLE_EMAIL_URL,
        RUN_CAMPAIGN_URL: process.env.RUN_CAMPAIGN_URL,
        PREVIEW_CAMPAIGN_URL: process.env.PREVIEW_CAMPAIGN_URL,
        WHATSAPP_GET_TEMPLATES_URL: process.env.WHATSAPP_GET_TEMPLATES_URL,
        CANCEL_EMAIL_CAMPAIGN_URL: process.env.CANCEL_EMAIL_CAMPAIGN_URL,
        WHATSAPP_SEND_SAMPLE_URL:process.env.WHATSAPP_SEND_SAMPLE_URL,
        WHATSAPP_OPT_IN_NUMBERS_URL: process.env.WHATSAPP_OPT_IN_NUMBERS_URL
    }
};

export default nextConfig;
