// Lightweight wrapper around Google Analytics (gtag.js)
// Safe to call before gtag loads — events are queued via dataLayer.

export function trackEvent(name, params = {}) {
  try {
    if (typeof window === 'undefined') return
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, params)
    } else if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: name, ...params })
    }
  } catch (_) {
    // Never throw from analytics
  }
}

export function trackPageView(path) {
  trackEvent('page_view', { page_path: path })
}

// Conversion funnel helpers
export const funnel = {
  signupStarted: () => trackEvent('signup_started'),
  signupStep: (step, name) => trackEvent('signup_step', { step, step_name: name }),
  signupCompleted: (segment, plan) => trackEvent('signup_completed', { segment, plan }),
  pricingViewed: () => trackEvent('pricing_viewed'),
  segmentViewed: (slug) => trackEvent('segment_viewed', { segment: slug }),
  ctaClicked: (label, location) => trackEvent('cta_clicked', { cta_label: label, cta_location: location }),
  diagnosticDownloaded: (segment) => trackEvent('diagnostic_downloaded', { segment }),
  contactSubmitted: () => trackEvent('contact_submitted'),
  newsletterSubscribed: () => trackEvent('newsletter_subscribed'),
}
