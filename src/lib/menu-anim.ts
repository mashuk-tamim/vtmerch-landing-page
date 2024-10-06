export const menuSlide = {
	initial: { x: "calc(100% + 100px)" },
	enter: { x: "0", transition: { duration: 0.8, ease: [0.5, 0, 0.25, 1] } },
	exit: {
		x: "calc(100% + 100px)",
		transition: { duration: 0.8, ease: [0.5, 0, 0.25, 1] },
	},
};

export const slide = {
	initial: { x: 80 },
	enter: (index: number) => ({
		x: 0,
		transition: {
			duration: 0.8,
			ease: [0.76, 0, 0.24, 1],
			delay: 0.05 * index,
		},
	}),
	exit: (index: number) => ({
		x: 80,
		transition: {
			duration: 0.8,
			ease: [0.76, 0, 0.24, 1],
			delay: 0.05 * index,
		},
	}),
};

export const scale = {
	open: { scale: 1, transition: { duration: 0.3 } },
	closed: { scale: 0, transition: { duration: 0.3 } },
};
// Initialize initialPath and targetPath with default values
let initialPath = "";
let targetPath = "";

// Check if window is available (client-side rendering)
if (typeof window !== "undefined" && window.innerHeight) {
	initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${
		window.innerHeight
	} Q-100 ${window.innerHeight / 2} 100 0`;
	targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${
		window.innerHeight
	} Q100 ${window.innerHeight / 2} 100 0`;
}

export const curve = {
	initial: {
		d: initialPath,
	},
	enter: {
		d: targetPath,
		transition: { duration: 1, ease: [0.5, 0, 0.25, 1] },
	},
	exit: {
		d: initialPath,
		transition: { duration: 0.8, ease: [0.5, 0, 0.25, 1] },
	},
};
