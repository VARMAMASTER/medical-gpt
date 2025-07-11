import { Suspense } from 'react';
import PreviewLayout from './PreviewLayout';
import ComponentsShowcase from './ComponentsShowcase';

export default function ComponentsPage() {
  return (
    <PreviewLayout>
      <Suspense fallback={<div>Loading components...</div>}>
        <ComponentsShowcase />
      </Suspense>
    </PreviewLayout>
  );
}
