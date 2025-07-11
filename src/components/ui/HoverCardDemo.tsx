import * as React from 'react';
import * as HoverCard from '@radix-ui/react-hover-card';

const HoverCardDemo = () => {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <a
          className="inline-block rounded-full"
          href="https://twitter.com/radix_ui"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="flex items-center gap-2 rounded-full bg-card px-4 py-2 border border-border hover:border-primary transition-colors">
            <img
              className="h-8 w-8 rounded-full"
              src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
              alt="Radix UI"
            />
            <span className="text-sm font-medium text-text">Radix</span>
          </div>
        </a>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          className="w-80 rounded-lg border border-border bg-card p-5 shadow-md"
          sideOffset={5}
        >
          <div className="flex gap-4">
            <img
              className="h-12 w-12 rounded-full"
              src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
              alt="Radix UI"
            />
            <div>
              <h4 className="text-sm font-semibold text-text">@radix_ui</h4>
              <p className="text-sm text-muted">
                Components, icons, colors, and templates for building high-quality,
                accessible UI. Free and open-source.
              </p>
              <div className="mt-3 flex gap-4 text-sm text-muted">
                <div>
                  <span className="text-text font-medium">0</span> Following
                </div>
                <div>
                  <span className="text-text font-medium">2,900</span> Followers
                </div>
              </div>
            </div>
          </div>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};

export default HoverCardDemo;
