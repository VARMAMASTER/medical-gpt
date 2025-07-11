import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { animations } from '@/lib/animations';

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={animations.fadeIn}
      transition={animations.spring}
    >
      <LabelPrimitive.Root
        ref={ref}
        className={cn(
          'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
          'bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500',
          className
        )}
        {...props}
      />
    </motion.div>
  );
});
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
