import * as React from 'react';
import * as ContextMenu from '@radix-ui/react-context-menu';

const ContextMenuDemo = () => {
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger className="block select-none rounded-lg border border-border bg-card p-6 text-text">
        <div className="text-sm">
          Right click here
          <div className="mt-1 text-muted">To open the context menu</div>
        </div>
      </ContextMenu.Trigger>

      <ContextMenu.Portal>
        <ContextMenu.Content
          className="min-w-[220px] rounded-lg bg-card p-1 shadow-md border border-border"
          alignOffset={5}
        >
          <ContextMenu.Item className="text-sm relative flex cursor-default select-none items-center rounded px-2 py-1.5 text-text outline-none hover:bg-primary hover:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
            Back <div className="ml-auto text-muted">⌘[</div>
          </ContextMenu.Item>
          <ContextMenu.Item className="text-sm relative flex cursor-default select-none items-center rounded px-2 py-1.5 text-text outline-none hover:bg-primary hover:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
            Forward <div className="ml-auto text-muted">⌘]</div>
          </ContextMenu.Item>
          <ContextMenu.Item className="text-sm relative flex cursor-default select-none items-center rounded px-2 py-1.5 text-text outline-none hover:bg-primary hover:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
            Reload <div className="ml-auto text-muted">⌘R</div>
          </ContextMenu.Item>
          <ContextMenu.Sub>
            <ContextMenu.SubTrigger className="text-sm relative flex cursor-default select-none items-center rounded px-2 py-1.5 text-text outline-none hover:bg-primary hover:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
              More Tools
              <div className="ml-auto text-muted">→</div>
            </ContextMenu.SubTrigger>
            <ContextMenu.Portal>
              <ContextMenu.SubContent
                className="min-w-[220px] rounded-lg bg-card p-1 shadow-md border border-border"
                sideOffset={2}
                alignOffset={-5}
              >
                <ContextMenu.Item className="text-sm relative flex cursor-default select-none items-center rounded px-2 py-1.5 text-text outline-none hover:bg-primary hover:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                  Save Page As...
                  <div className="ml-auto text-muted">⌘S</div>
                </ContextMenu.Item>
                <ContextMenu.Item className="text-sm relative flex cursor-default select-none items-center rounded px-2 py-1.5 text-text outline-none hover:bg-primary hover:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                  Create Shortcut...
                </ContextMenu.Item>
                <ContextMenu.Item className="text-sm relative flex cursor-default select-none items-center rounded px-2 py-1.5 text-text outline-none hover:bg-primary hover:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                  Name Window...
                </ContextMenu.Item>
                <ContextMenu.Separator className="my-1 h-px bg-border" />
                <ContextMenu.Item className="text-sm relative flex cursor-default select-none items-center rounded px-2 py-1.5 text-text outline-none hover:bg-primary hover:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                  Developer Tools
                </ContextMenu.Item>
              </ContextMenu.SubContent>
            </ContextMenu.Portal>
          </ContextMenu.Sub>

          <ContextMenu.Separator className="my-1 h-px bg-border" />

          <ContextMenu.CheckboxItem
            className="text-sm relative flex cursor-default select-none items-center rounded px-2 py-1.5 text-text outline-none hover:bg-primary hover:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
            checked={true}
          >
            Show Bookmarks <div className="ml-auto text-muted">⌘B</div>
          </ContextMenu.CheckboxItem>
          <ContextMenu.CheckboxItem
            className="text-sm relative flex cursor-default select-none items-center rounded px-2 py-1.5 text-text outline-none hover:bg-primary hover:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
            checked={false}
          >
            Show Full URLs
          </ContextMenu.CheckboxItem>
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
};

export default ContextMenuDemo;
