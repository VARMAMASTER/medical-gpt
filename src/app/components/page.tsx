'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import PreviewLayout from './preview-layout/page';

const ComponentsShowcase = dynamic(
  () => import('./showcase/page'),
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
