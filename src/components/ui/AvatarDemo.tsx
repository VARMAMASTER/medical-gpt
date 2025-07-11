import * as React from 'react';
import * as Avatar from '@radix-ui/react-avatar';

const AvatarDemo = () => {
  return (
    <div className="flex gap-4">
      <Avatar.Root className="inline-flex h-12 w-12 select-none items-center justify-center overflow-hidden rounded-full bg-card">
        <Avatar.Image
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          alt="Colm Tuite"
        />
        <Avatar.Fallback
          className="flex h-full w-full items-center justify-center bg-primary text-text text-sm font-medium"
          delayMs={600}
        >
          CT
        </Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root className="inline-flex h-12 w-12 select-none items-center justify-center overflow-hidden rounded-full bg-card">
        <Avatar.Image
          className="h-full w-full object-cover"
          src="broken-image.jpg"
          alt="Pedro Duarte"
        />
        <Avatar.Fallback
          className="flex h-full w-full items-center justify-center bg-primary text-text text-sm font-medium"
          delayMs={600}
        >
          PD
        </Avatar.Fallback>
      </Avatar.Root>
    </div>
  );
};

export default AvatarDemo;
