import * as React from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';

const CollapsibleDemo = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible.Root
      className="w-[300px]"
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <div className="flex items-center justify-between space-x-4 px-4 py-2 bg-card rounded-t-lg border border-border">
        <h4 className="text-sm font-semibold text-text">
          @peduarte starred 3 repositories
        </h4>
        <Collapsible.Trigger asChild>
          <button className="rounded-full h-6 w-6 flex items-center justify-center hover:bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transform transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              } text-muted`}
            >
              <path
                d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content>
        <div className="px-4 py-2 bg-card rounded-b-lg border-x border-b border-border space-y-2">
          <div className="text-sm text-muted">
            <span className="font-medium text-text">radix-ui/primitives</span>
            <p>An open-source UI component library.</p>
          </div>
          <div className="text-sm text-muted">
            <span className="font-medium text-text">radix-ui/themes</span>
            <p>Beautiful, thought-out themes for Radix.</p>
          </div>
          <div className="text-sm text-muted">
            <span className="font-medium text-text">radix-ui/website</span>
            <p>The official Radix UI website.</p>
          </div>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};

export default CollapsibleDemo;
