"use client ";

import React from "react";
import { motion } from "framer-motion";

const variants = {
	up: {
		offscreen: {
			y: 25,
			opacity: 0,
		},
		onscreen: {
			y: 0,
			opacity: 1,
			transition: {
				type: "linear",
				bounce: 0.4,
				duration: 0.75,
			},
		},
	},
	down: {
		offscreen: {
			y: -25,
			opacity: 0,
		},
		onscreen: {
			y: 0,
			opacity: 1,
			transition: {
				type: "linear",
				bounce: 0.4,
				duration: 0.75,
			},
		},
	},
	left: {
		offscreen: {
			x: -25,
			opacity: 0,
		},
		onscreen: {
			x: 0,
			opacity: 1,
			transition: {
				type: "linear",
				duration: 0.75,
			},
		},
	},
	right: {
		offscreen: {
			x: 25,
			opacity: 0,
		},
		onscreen: {
			x: 0,
			opacity: 1,
			transition: {
				type: "linear",
				duration: 0.75,
			},
		},
	},
};

interface MyComponentProps {
	className?: string;
	direction: "up" | "left" | "right" | "down"; // Specify the possible values for direction
	children: React.ReactNode;
}

const Animation: React.FC<MyComponentProps> = ({
	className,
	children,
	direction = "up",
}) => {
	const selectedVariants = variants[direction];

	return (
		<motion.div
			initial='offscreen'
			whileInView='onscreen'
			transition={{ delay: 1 }}
			viewport={{ once: true, amount: 0.5 }}>
			<motion.div className={`${className}`} variants={selectedVariants}>
				{children}
			</motion.div>
		</motion.div>
	);
};

export default Animation;
