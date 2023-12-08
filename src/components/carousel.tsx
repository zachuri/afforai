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
		<div className='w-full z-20 text-[#525252]'>
			{/* Display items on medium screens and up */}
			<div className='hidden lg:flex flex-row items-center justify-center space-x-5'>
				{items.map((item, index) => (
					<div
						key={index}
						className='flex flex-row items-center justify-center text-xs border p-1 px-2 rounded-sm space-x-2 bg-[#FAFAFA]'>
						<Icons.check />
						<p>{item}</p>
					</div>
				))}
			</div>

			{/* Display carousel on small screens */}
			<div className='lg:hidden'>
				<SliderContainer contentWidth={1062} initialOffsetX={0}>
					{items.map((item, index) => (
						<SliderItem key={index} width={250}>
							<div className='flex flex-row items-center justify-center text-sm border p-1 px-2 rounded-sm space-x-2 bg-[#FAFAFA]'>
								<Icons.check />
								<p>{item}</p>
							</div>
						</SliderItem>
					))}
				</SliderContainer>
			</div>
		</div>
	);
};

export default Carousel;
