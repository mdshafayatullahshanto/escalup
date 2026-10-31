// /src/utils/analytics.js
// Analytics event tracking utility supporting Google Analytics 4 (gtag), Plausible, and development logging

export const trackEvent = (eventName, params = {}) => {
  const _gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const isDev = import.meta.env.DEV;

  if (isDev) {
    console.log(`[Analytics Event] ${eventName}:`, params);
  }

  // Google Analytics 4 (gtag.js)
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }

  // Plausible Analytics
  if (typeof window !== 'undefined' && typeof window.plausible === 'function') {
    window.plausible(eventName, { props: params });
  }
};

// Standard event helpers
export const trackQuoteSubmit = (serviceName, engagementModel) => {
  trackEvent('quote_form_submit', {
    service: serviceName,
    model: engagementModel,
    timestamp: new Date().toISOString()
  });
};

export const trackCallBooking = (sourceLocation) => {
  trackEvent('call_booking_click', {
    source: sourceLocation,
    timestamp: new Date().toISOString()
  });
};


export const trackCapabilityDownload = () => {
  trackEvent('capability_statement_download', {
    timestamp: new Date().toISOString()
  });
};
