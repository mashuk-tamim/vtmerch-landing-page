export const wordLetterAnimation = {
	rest: {
		y: 0,
	},
	hover: {
		y: -100,
		transition: {
			duration: 0.2,
			ease: [0.6, 0.01, 0.05, 0.95],
			type: "tween",
		},
	},
};

export const wordLetterAnimationTwo = {
	rest: {
		y: 100,
	},
	hover: {
		y: 0,
		transition: {
			duration: 0.2,
			ease: [0.6, 0.01, 0.05, 0.95],
			type: "tween",
		},
	},
};
