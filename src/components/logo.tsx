import Link from 'next/link';

import { cn } from '@/lib/utils';

import { DynamicImage } from './dynamic-image';
import React from 'react';

export default function Logo({
  width = 100,
  height = width,
  className,
}: {
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <DynamicImage
      lightSrc="https://ucarecdn.com/bbc74eca-8e0d-4147-8a66-6589a55ae8d0/bark.webp"
      darkSrc="https://ucarecdn.com/bbc74eca-8e0d-4147-8a66-6589a55ae8d0/bark.webp"
      alt="Logo"
      width={width}
      height={height}
      className={cn('select-none', className)}
    />
  );
}

interface BrandProps {
  className?: string;
}

export function Brand({ className }: BrandProps) {
  return (
    <Link href="/" className={className}>
      <div className="flex items-center gap-2">
        <Logo width={32} />
        <span className="text-x select-none font-bold">BARK AI</span>
      </div>
    </Link>
  );
}
