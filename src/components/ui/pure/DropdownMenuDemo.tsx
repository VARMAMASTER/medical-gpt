import * as React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const DropdownMenuDemo = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="px-4 py-2 rounded bg-primary text-white font-semibold shadow hover:scale-105 transition">
          Options
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] rounded-lg bg-card p-1 shadow-md border border-border"
          alignOffset={5}
        >
          <DropdownMenu.Item className="text-sm relative flex cursor-default select-none items-center rounded px-2 py-1.5 text-text outline-none hover:bg-primary hover:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
            New Tab <div className="ml-auto text-muted">⌘T</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="text-sm relative flex cursor-default select-none items-center rounded px-2 py-1.5 text-text outline-none hover:bg-primary hover:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
            New Window <div className="ml-auto text-muted">⌘N</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="text-sm relative flex cursor-default select-none items-center rounded px-2 py-1.5 text-text outline-none hover:bg-primary hover:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
            disabled
          >
            New Private Window <div className="ml-auto text-muted">⇧⌘N</div>
          </DropdownMenu.Item>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="text-sm relative flex cursor-default select-none items-center rounded px-2 py-1.5 text-text outline-none hover:bg-primary hover:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
              More Tools
              <div className="ml-auto text-muted">→</div>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent
                className="min-w-[220px] rounded-lg bg-card p-1 shadow-md border border-border"
                alignOffset={-5}
              >
                <DropdownMenu.Item className="text-sm relative flex cursor-default select-none items-center rounded px-2 py-1.5 text-text outline-none hover:bg-primary hover:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                  Save Page As... <div className="ml-auto text-muted">⌘S</div>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="text-sm relative flex cursor-default select-none items-center rounded px-2 py-1.5 text-text outline-none hover:bg-primary hover:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                  Create Shortcut...
                </DropdownMenu.Item>
                <DropdownMenu.Item className="text-sm relative flex cursor-default select-none items-center rounded px-2 py-1.5 text-text outline-none hover:bg-primary hover:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                  Name Window...
                </DropdownMenu.Item>
                <DropdownMenu.Separator className="my-1 h-px bg-border" />
                <DropdownMenu.Item className="text-sm relative flex cursor-default select-none items-center rounded px-2 py-1.5 text-text outline-none hover:bg-primary hover:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                  Developer Tools
                </DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator className="my-1 h-px bg-border" />

          <DropdownMenu.CheckboxItem
            className="text-sm relative flex cursor-default select-none items-center rounded px-2 py-1.5 text-text outline-none hover:bg-primary hover:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
            checked={true}
          >
            Show Bookmarks <div className="ml-auto text-muted">⌘B</div>
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem
            className="text-sm relative flex cursor-default select-none items-center rounded px-2 py-1.5 text-text outline-none hover:bg-primary hover:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
            checked={false}
          >
            Show Full URLs
          </DropdownMenu.CheckboxItem>

          <DropdownMenu.Separator className="my-1 h-px bg-border" />

          <DropdownMenu.Label className="text-xs px-2 py-1.5 text-muted">
            Panels
          </DropdownMenu.Label>
          <DropdownMenu.RadioGroup value="pedro">
            <DropdownMenu.RadioItem
              className="text-sm relative flex cursor-default select-none items-center rounded px-2 py-1.5 text-text outline-none hover:bg-primary hover:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
              value="pedro"
            >
              Pedro Duarte
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem
              className="text-sm relative flex cursor-default select-none items-center rounded px-2 py-1.5 text-text outline-none hover:bg-primary hover:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
              value="colm"
            >
              Colm Tuite
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownMenuDemo;
