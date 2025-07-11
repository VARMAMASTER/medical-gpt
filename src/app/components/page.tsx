'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import PreviewLayout from '@/app/components/PreviewLayout';

const ComponentsShowcase = dynamic(
  () => import('@/app/components/ComponentsShowcase'),
  {
    loading: () => <div>Loading components...</div>
  }
);

export default function ComponentsPage() {
  return (
    <PreviewLayout>
      <ComponentsShowcase />
    </PreviewLayout>
  );
}
