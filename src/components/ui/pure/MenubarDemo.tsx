import * as React from 'react';
import {
  MenubarRoot,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarSeparator,
  MenubarShortcut,
} from '@/components/ui/pure/Menubar';
import { motion } from 'framer-motion';

const MenubarDemo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <MenubarRoot className="flex h-10 items-center space-x-1 rounded-lg border border-border bg-card p-1">
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer">File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New Tab</MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSub>
              <MenubarSubTrigger>Share</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Email Link</MenubarItem>
                <MenubarItem>Messages</MenubarItem>
                <MenubarItem>Notes</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>Print...</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer">Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Undo</MenubarItem>
            <MenubarItem>Redo</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Cut</MenubarItem>
            <MenubarItem>Copy</MenubarItem>
            <MenubarItem>Paste</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer">View</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Always Show Bookmarks Bar</MenubarItem>
            <MenubarItem>Always Show Full URLs</MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Appearance</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Dark Theme</MenubarItem>
                <MenubarItem>Light Theme</MenubarItem>
                <MenubarItem>System Theme</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
      </MenubarRoot>
    </motion.div>
  );
};

export default MenubarDemo;
