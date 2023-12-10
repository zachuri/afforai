//@ts-nocheck
"use client";

import React, { useCallback, useContext, useEffect, useRef } from "react";
import { SizeContext } from "@/utils/size-observer";
import useAnimationFrame from "@/utils/use-animation-frame";

interface Props {
	children?: React.ReactNode;
	initialOffsetX: number;
	className?: string;
	contentWidth: number;
	direction: "left" | "right"; // Add direction prop
	id: number;
}

const SliderContainer: React.FC<Props> = ({
	children,
	initialOffsetX,
	className,
	contentWidth,
	direction = "left", // Default to left direction
	id,
}) => {
	const refScrollX = useRef<number>(initialOffsetX);
	const refContainer = useRef<HTMLDivElement>(null);
	const refContent = useRef<HTMLDivElement>(null);
	const refIsDragging = useRef<boolean>(false);
	const refDragStartX = useRef<number>(0);

	const enabled = true; // Always enable scrolling for this example

	const handleMouseDown = useCallback(
		(e: React.MouseEvent) => {
			refIsDragging.current = true;
			refDragStartX.current = e.clientX;
		},
		[]
	);

	const handleMouseUp = useCallback(() => {
		refIsDragging.current = false;
	}, []);

	const handleMouseMove = useCallback(
		(e: MouseEvent) => {
			if (refIsDragging.current) {
				const deltaX = e.clientX - refDragStartX.current;

				if (deltaX !== 0) {
					refScrollX.current -= deltaX;
					const { current: elContainer } = refContainer;

					if (elContainer) {
						elContainer.scrollLeft = refScrollX.current;

						if (refScrollX.current <= 0) {
							refScrollX.current = elContainer.scrollLeft = 0;
						} else if (
							refScrollX.current >=
							elContainer.scrollWidth - elContainer.clientWidth
						) {
							refScrollX.current = elContainer.scrollLeft =
								elContainer.scrollWidth - elContainer.clientWidth;
						}
					}

					refDragStartX.current = e.clientX;
				}
			}
		},
		[refContainer]
	);

	// Attach event listeners for mouse down, up, and move
	useEffect(() => {
		document.addEventListener("mousedown", handleMouseDown);
		document.addEventListener("mouseup", handleMouseUp);
		document.addEventListener("mousemove", handleMouseMove);

		return () => {
			document.removeEventListener("mousedown", handleMouseDown);
			document.removeEventListener("mouseup", handleMouseUp);
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, [handleMouseDown, handleMouseUp, handleMouseMove]);

	useAnimationFrame(
		enabled,
		useCallback(() => {
			const { current: elContainer } = refContainer;
			const { current: elContent } = refContent;

			if (elContainer && elContent && !refIsDragging.current) {
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
			className={`slider-container overflow-x-hidden whitespace-nowrap max-w-full pointer-events-none ${className} [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]`}>
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
