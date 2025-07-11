import * as React from 'react';
import * as MenubarPrimitive from '@radix-ui/react-menubar';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const MenubarRoot = MenubarPrimitive.Root;
const MenubarTrigger = MenubarPrimitive.Trigger;
const MenubarSub = MenubarPrimitive.Sub;
const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded px-2 py-1.5 text-sm outline-none focus:bg-primary focus:text-white data-[state=open]:bg-primary data-[state=open]:text-white",
      className
    )}
    {...props}
  >
    {children}
  </MenubarPrimitive.SubTrigger>
));

MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-lg border border-border bg-card p-1 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
));

MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[12rem] overflow-hidden rounded-lg border border-border bg-card p-1 shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </MenubarPrimitive.Portal>
));

MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded px-2 py-1.5 text-sm outline-none focus:bg-primary focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  />
));

MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarMenu = MenubarPrimitive.Menu;

const MenubarGroup = MenubarPrimitive.Group;

const MenubarPortal = MenubarPrimitive.Portal;

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn("h-px bg-border", className)}
    {...props}
  />
));

MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted",
        className
      )}
      {...props}
    />
  );
};

MenubarShortcut.displayName = "MenubarShortcut";

const MenubarMenuTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded px-3 py-1.5 text-sm font-medium outline-none focus:bg-primary focus:text-white data-[state=open]:bg-primary data-[state=open]:text-white",
      className
    )}
    {...props}
  />
));

MenubarMenuTrigger.displayName = MenubarPrimitive.Trigger.displayName;

export {
  MenubarRoot,
  MenubarTrigger,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarMenuTrigger,
  MenubarGroup,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarSeparator,
  MenubarShortcut,
};
