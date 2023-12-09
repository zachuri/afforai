"use client";

import React, { useCallback, useContext, useRef } from "react";
import { SizeContext } from "@/utils/size-observer";
import useAnimationFrame from "@/utils/use-animation-frame";

interface Props {
	children?: React.ReactNode;
	initialOffsetX: number;
	className?: string;
	contentWidth: number;
	direction: "left" | "right"; // Add direction prop
}

const SliderContainer: React.FC<Props> = ({
	children,
	initialOffsetX,
	className,
	contentWidth,
	direction = "left", // Default to left direction
}) => {
	const refScrollX = useRef<number>(initialOffsetX);
	const refContainer = useRef<HTMLDivElement>(null);
	const refContent = useRef<HTMLDivElement>(null);

	const enabled = true; // Always enable scrolling for this example

	useAnimationFrame(
		enabled,
		useCallback(() => {
			const { current: elContainer } = refContainer;
			const { current: elContent } = refContent;

			if (elContainer && elContent) {
				if (direction === "left") {
					refScrollX.current += 0.2;
				} else {
					refScrollX.current -= 0.2;
				}

				elContainer.scrollLeft = refScrollX.current;

				if (
					direction === "left" &&
					elContainer.scrollLeft >= elContent.clientWidth
				) {
					refScrollX.current = 0;
					elContainer.scrollLeft = 0;
				} else if (direction === "right" && elContainer.scrollLeft <= 0) {
					refScrollX.current = elContent.clientWidth;
					elContainer.scrollLeft = elContent.clientWidth;
				}
			}
		}, [direction])
	);

	return (
		<div
			ref={refContainer}
			className={`"slider-container overflow-x-hidden whitespace-nowrap max-w-full pointer-events-none ${className}"`}>
			<div ref={refContent} className='inline-block'>
				{children}
			</div>

			<div className={enabled ? "inline-block" : "hidden"}>{children}</div>
		</div>
	);
};

interface ItemProps {
	children?: React.ReactNode;
	width: number;
}

export const SliderItem: React.FC<ItemProps> = ({ children, width }) => {
	return (
		<div
			className='inline-flex justify-center items-center mx-5'
			style={{ width }}>
			{children}
		</div>
	);
};

export default SliderContainer;
