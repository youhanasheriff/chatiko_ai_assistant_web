const setAuthBackgroundStyle = () => {
  'use client';
  if (typeof window !== 'undefined') {
    window.document.documentElement.style.setProperty(
      '--foreground-hex',
      '#ffffff',
    );
    window.document.documentElement.style.setProperty(
      '--background-start-hex',
      '#0c1314',
    );
    window.document.documentElement.style.setProperty(
      '--background-end-hex',
      '#1d2020',
    );
    window.document.body.style.setProperty(
      'background',
      'linear-gradient(0deg, var(--background-start-hex) 0%, var(--background-end-hex) 100%)',
    );
  }
};

export default {
  styles: {
    setAuthBackgroundStyle,
  },
};
