export const letterAnimation = {
	rest: {
		y: 0,
	},
	hover: {
		y: -30,
		transition: {
			duration: 0.5,
			ease: [0.6, 0.01, 0.05, 0.95],
			type: "tween",
		},
	},
};

export const letterAnimationTwo = {
	rest: {
		y: 30,
	},
	hover: {
		y: 0,
		transition: {
			duration: 0.5,
			ease: [0.6, 0.01, 0.05, 0.95],
			type: "tween",
		},
	},
};
