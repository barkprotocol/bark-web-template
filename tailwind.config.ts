import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      colors: {
        // NEUTRAL
        'neutral-on-background-weak': 'var(--neutral-on-background-weak)',
        'neutral-on-background-medium': 'var(--neutral-on-background-medium)',
        'neutral-on-background-strong': 'var(--neutral-on-background-strong)',
        'neutral-on-solid-weak': 'var(--neutral-on-solid-weak)',
        'neutral-on-solid-medium': 'var(--neutral-on-solid-medium)',
        'neutral-on-solid-strong': 'var(--neutral-on-solid-strong)',

        // BRAND
        'brand-on-background-weak': 'var(--brand-on-background-weak)',
        'brand-on-background-medium': 'var(--brand-on-background-medium)',
        'brand-on-background-strong': 'var(--brand-on-background-strong)',
        'brand-on-solid-weak': 'var(--brand-on-solid-weak)',
        'brand-on-solid-medium': 'var(--brand-on-solid-medium)',
        'brand-on-solid-strong': 'var(--brand-on-solid-strong)',

        // ACCENT
        'accent-on-background-weak': 'var(--accent-on-background-weak)',
        'accent-on-background-medium': 'var(--accent-on-background-medium)',
        'accent-on-background-strong': 'var(--accent-on-background-strong)',
        'accent-on-solid-weak': 'var(--accent-on-solid-weak)',
        'accent-on-solid-medium': 'var(--accent-on-solid-medium)',
        'accent-on-solid-strong': 'var(--accent-on-solid-strong)',

        // INFO
        'info-on-background-weak': 'var(--info-on-background-weak)',
        'info-on-background-medium': 'var(--info-on-background-medium)',
        'info-on-background-strong': 'var(--info-on-background-strong)',
        'info-on-solid-weak': 'var(--info-on-solid-weak)',
        'info-on-solid-medium': 'var(--info-on-solid-medium)',
        'info-on-solid-strong': 'var(--info-on-solid-strong)',

        // DANGER
        'danger-on-background-weak': 'var(--danger-on-background-weak)',
        'danger-on-background-medium': 'var(--danger-on-background-medium)',
        'danger-on-background-strong': 'var(--danger-on-background-strong)',
        'danger-on-solid-weak': 'var(--danger-on-solid-weak)',
        'danger-on-solid-medium': 'var(--danger-on-solid-medium)',
        'danger-on-solid-strong': 'var(--danger-on-solid-strong)',

        // WARNING
        'warning-on-background-weak': 'var(--warning-on-background-weak)',
        'warning-on-background-medium': 'var(--warning-on-background-medium)',
        'warning-on-background-strong': 'var(--warning-on-background-strong)',
        'warning-on-solid-weak': 'var(--warning-on-solid-weak)',
        'warning-on-solid-medium': 'var(--warning-on-solid-medium)',
        'warning-on-solid-strong': 'var(--warning-on-solid-strong)',

        // SUCCESS
        'success-on-background-weak': 'var(--success-on-background-weak)',
        'success-on-background-medium': 'var(--success-on-background-medium)',
        'success-on-background-strong': 'var(--success-on-background-strong)',
        'success-on-solid-weak': 'var(--success-on-solid-weak)',
        'success-on-solid-medium': 'var(--success-on-solid-medium)',
        'success-on-solid-strong': 'var(--success-on-solid-strong)',
      },
    },
  },
};

export default config;
