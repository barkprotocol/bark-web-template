import { Metadata } from 'next';

import { HomeContent } from './home-content';
import React from 'react';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Unlock the power of Solana with AI-driven insights and tools for seamless blockchain interactions.',
};

export default function HomePage() {
  return <HomeContent />;
}
