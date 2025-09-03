// Reusable transition constants for consistent animations across the app

// Spring transitions
export const springTransitions = {
	// Standard spring
	standard: {
		type: 'spring',
		stiffness: 400,
		damping: 85,
		mass: 1,
	},

	// Carousel spring (slightly different values)
	carousel: {
		type: 'spring',
		stiffness: 320,
		damping: 80,
		mass: 1,
	},

	// Bouncy spring
	bouncy: {
		type: 'spring',
		stiffness: 500,
		damping: 60,
		mass: 1,
	},

	// Smooth spring
	smooth: {
		type: 'spring',
		stiffness: 300,
		damping: 90,
		mass: 1,
	},
};

// Easing transitions
export const easingTransitions = {
	// Standard easing
	standard: {
		duration: 1.2,
		ease: [0.745, 0.045, 0.255, 1], // cubicBezier(0.745, 0.045, 0.255, 1)
	},

	// Fast easing
	fast: {
		duration: 0.8,
		ease: [0.745, 0.045, 0.255, 1],
	},

	// Slow easing
	slow: {
		duration: 1.8,
		ease: [0.745, 0.045, 0.255, 1],
	},

	// Quick easing
	quick: {
		duration: 0.5,
		ease: [0.745, 0.045, 0.255, 1],
	},
};

// Common animation variants
export const animationVariants = {
	// Slide up from below
	slideUp: {
		initial: { y: '105%', opacity: 0 },
		animate: { y: 0, opacity: 1 },
	},

	// Fade in
	fadeIn: {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
	},

	// Scale in
	scaleIn: {
		initial: { scale: 0.8, opacity: 0 },
		animate: { scale: 1, opacity: 1 },
	},

	// Slide in from left
	slideLeft: {
		initial: { x: '-100%', opacity: 0 },
		animate: { x: 0, opacity: 1 },
	},

	// Slide in from right
	slideRight: {
		initial: { x: '100%', opacity: 0 },
		animate: { x: 0, opacity: 1 },
	},
};

// Stagger delays for sequential animations
export const staggerDelays = {
	// Small increments
	small: (index) => 0.05 * index,

	// Medium increments
	medium: (index) => 0.1 * index,

	// Large increments
	large: (index) => 0.15 * index,

	// Custom delay with offset
	custom: (index, offset = 0) => offset + 0.1 * index,
};
