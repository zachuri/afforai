"use client";

import React from "react";
import { Icons } from "./ui/icons";
import SliderContainer, { SliderItem } from "./slider";

const items = [
	"Summarize Key Findings",
	"Compare Between Documents",
	"Search For Answer",
	"Ask in Any Language",
];

const Carousel = () => {
	return (
		<div className='w-[816px] z-20'>
			<SliderContainer contentWidth={1062} initialOffsetX={0}>
				{items.map((item, index) => (
					<SliderItem key={index} width={250}>
						<div className='flex flex-row items-center justify-center text-xs border p-1 px-2 rounded-sm space-x-2 bg-primary-foreground'>
							<Icons.check />
							<p>{item}</p>
						</div>
					</SliderItem>
				))}
			</SliderContainer>
		</div>
	);
};

export default Carousel;
