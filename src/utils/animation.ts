import { Variants } from 'framer-motion';

// Fade up animation
export const fadeUpVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: (custom: number = 0) => ({ 
    opacity: 1, 
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

// Stagger children animation container
export const staggerContainerVariants: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Scale animation for elements
export const scaleVariants: Variants = {
  hidden: { 
    scale: 0.8, 
    opacity: 0 
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" 
    }
  }
};

// Slide in from sides animation
export const slideInLeftVariants: Variants = {
  hidden: { 
    x: -50, 
    opacity: 0 
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const slideInRightVariants: Variants = {
  hidden: { 
    x: 50, 
    opacity: 0 
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};