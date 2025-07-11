export const gradients = {
  primary: "linear-gradient(135deg, #6C63FF 0%, #8D85FF 100%)",
  neon: "linear-gradient(135deg, #6C63FF 0%, #FF6CAB 100%)",
  glow: "radial-gradient(circle at 50% 50%, rgba(108, 99, 255, 0.2) 0%, rgba(108, 99, 255, 0) 70%)",
  card: "linear-gradient(135deg, rgba(17, 21, 40, 0.95) 0%, rgba(11, 15, 25, 0.95) 100%)",
  glass: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
  mesh: "radial-gradient(at 50% 0%, rgba(108, 99, 255, 0.1) 0px, transparent 75%)",
} as const;

export const animations = {
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
  spring: {
    type: "spring",
    stiffness: 400,
    damping: 30,
  },
} as const;
