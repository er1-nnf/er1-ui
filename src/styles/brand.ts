export const colors = {
  brand: {
    green: '#13C48A',
    teal: '#0A9FBB',
    blue: '#2341D6',
    navy: '#0D1B3E',
    navyMid: '#1A2D57',
    slate: '#6B7A99',
    mist: '#EBF0FF',
    ice: '#F4F7FF',
  },
  semantic: {
    error: '#E63946',
    warning: '#F4A535',
    success: '#13C48A',
  },
} as const;

export const gradients = {
  brand: 'linear-gradient(135deg, #13C48A 0%, #0A9FBB 45%, #2341D6 100%)',
  brandHorizontal: 'linear-gradient(90deg, #13C48A 0%, #0A9FBB 50%, #2341D6 100%)',
  brandVertical: 'linear-gradient(180deg, #13C48A 0%, #0A9FBB 50%, #2341D6 100%)',
} as const;

export const typography = {
  fontFamily: {
    sans: 'var(--font-dm-sans), system-ui, sans-serif',
    mono: 'var(--font-dm-mono), ui-monospace, monospace',
  },
  fontSize: {
    display: '3rem',    // 48px
    h1: '2rem',         // 32px
    h2: '1.5rem',       // 24px
    h3: '1.125rem',     // 18px
    body: '0.9375rem',  // 15px
    small: '0.8125rem', // 13px
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
  },
} as const;

export const spacing = {
  section: {
    sm: '3rem',    // 48px
    md: '5rem',    // 80px
    lg: '7.5rem',  // 120px
  },
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
} as const;
