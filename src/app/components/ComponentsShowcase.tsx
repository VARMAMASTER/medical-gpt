'use client';

import { motion } from "framer-motion";
import { animations } from "@/lib/animations";
import AccordionDemo from '@/components/ui/AccordionDemo';
import AlertDialogDemo from '@/components/ui/AlertDialogDemo';
import AspectRatioDemo from '@/components/ui/AspectRatioDemo';
import AvatarDemo from '@/components/ui/AvatarDemo';
import CheckboxDemo from '@/components/ui/CheckboxDemo';
import CollapsibleDemo from '@/components/ui/CollapsibleDemo';
import ContextMenuDemo from '@/components/ui/ContextMenuDemo';
import DialogDemo from '@/components/ui/DialogDemo';
import DropdownMenuDemo from '@/components/ui/DropdownMenuDemo';
import LabelDemo from '@/components/ui/LabelDemo';
import MenubarDemo from '@/components/ui/MenubarDemo';
import NavigationMenuDemo from '@/components/ui/NavigationMenuDemo';
import HoverCardDemo from '@/components/ui/HoverCardDemo';

export default function ComponentsShowcase() {
  const components = [
    { name: 'Accordion', component: <AccordionDemo /> },
    { name: 'Alert Dialog', component: <AlertDialogDemo /> },
    { name: 'Aspect Ratio', component: <AspectRatioDemo /> },
    { name: 'Avatar', component: <AvatarDemo /> },
    { name: 'Checkbox', component: <CheckboxDemo /> },
    { name: 'Collapsible', component: <CollapsibleDemo /> },
    { name: 'Context Menu', component: <ContextMenuDemo /> },
    { name: 'Dialog', component: <DialogDemo /> },
    { name: 'Dropdown Menu', component: <DropdownMenuDemo /> },
    { name: 'Hover Card', component: <HoverCardDemo /> },
    { name: 'Label', component: <LabelDemo /> },
    { name: 'Menubar', component: <MenubarDemo /> },
    { name: 'Navigation Menu', component: <NavigationMenuDemo /> },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={animations.slideUp}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Interactive Components
            </h1>
            <p className="text-gray-400">
              Modern UI components with smooth animations and gradient effects
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {components.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-800"
              >
                <h2 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                  {item.name}
                </h2>
                {item.component}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
