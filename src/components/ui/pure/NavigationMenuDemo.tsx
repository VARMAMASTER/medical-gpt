import * as React from 'react';
import {
  NavigationMenuRoot,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@/components/ui/pure/NavigationMenu';
import { motion } from 'framer-motion';

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <motion.li whileHover={{ scale: 1.02 }}>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10"
          {...props}
        >
          <div className="text-sm font-medium text-text">{title}</div>
          <p className="text-sm leading-snug text-muted">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </motion.li>
  );
});

ListItem.displayName = "ListItem";

const NavigationMenuDemo = () => {
  return (
    <NavigationMenuRoot>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/20 to-primary/10 p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <motion.div
                      className="mb-2 mt-4 text-lg font-medium text-text"
                      whileHover={{ scale: 1.05 }}
                    >
                      AI Writing Assistant
                    </motion.div>
                    <p className="text-sm leading-tight text-muted">
                      Beautifully designed AI writing tool that helps you create amazing content.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Learn the basics and get started with our AI writing tool.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                Step-by-step guide to setting up your environment.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/docs/features/editor" title="Smart Editor">
                Advanced text editor with AI-powered suggestions.
              </ListItem>
              <ListItem href="/docs/features/grammar" title="Grammar Check">
                Real-time grammar and style corrections.
              </ListItem>
              <ListItem href="/docs/features/plagiarism" title="Plagiarism">
                Check your content against billions of web pages.
              </ListItem>
              <ListItem href="/docs/features/templates" title="Templates">
                Pre-built templates for various content types.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenuRoot>
  );
};

export default NavigationMenuDemo;
