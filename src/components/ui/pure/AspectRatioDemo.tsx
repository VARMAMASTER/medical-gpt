import * as React from 'react';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';

const AspectRatioDemo = () => {
  return (
    <div className="w-[300px] rounded-md overflow-hidden bg-card">
      <AspectRatio.Root ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
          alt="Landscape photograph"
          className="w-full h-full object-cover"
        />
      </AspectRatio.Root>
      <div className="p-4">
        <h4 className="text-text font-medium mb-1">Landscape Photo</h4>
        <p className="text-muted text-sm">A beautiful mountain landscape</p>
      </div>
    </div>
  );
};

export default AspectRatioDemo;
