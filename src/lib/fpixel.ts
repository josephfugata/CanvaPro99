// lib/fpixel.ts

// Extend the Window interface to include fbq
declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

export const pageview = () => {
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'PageView');
  }
};

// https://developers.facebook.com/docs/facebook-pixel/reference
export const event = (name: string, options = {}) => {
  if (typeof window.fbq === 'function') {
    window.fbq('track', name, options);
  }
};
