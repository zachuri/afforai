"use client";

import Image from "next/image";
import React from "react";

type ItemProp = {
	src: string;
	title: string;
	content: string;
};

const items: ItemProp[] = [
	{
		src: "landing-17",
		title: "Trusted by users all over the World",
		content:
			"Afforai is used all around the World, saving thousands of people time and money with our speed & accuracy.",
	},
	{
		src: "landing-18",
		title: "Information filtering",
		content:
			"Afforai gives you the highest quality answers, and filters out any irrelevant information.",
	},
	{
		src: "landing-19",
		title: "Built in Comprehension Model",
		content:
			"Our powerful comprehension model increases the power of our data retrieval.",
	},
];

function Card({ src, title, content }: ItemProp) {
	return (
		<div className='rounded-xl border border-[#E6E6E6]'>
			<Image
				className='hidden md:block'
				src={`/assets/laptop-${src}.png`}
				alt={src}
				width={1200}
				height={600}
			/>
			<Image
				className='md:hidden'
				src={`/assets/mobile-${src}.png`}
				alt={src}
				width={1200}
				height={600}
			/>
			<div className='px-3 pt-2 pb-4 border-t'>
				<h2 className='text-[#222222] text-lg'>{title}</h2>
				<p className='text-primary-foreground text-xs'>{content}</p>
			</div>
		</div>
	);
}

const Landing12 = () => {
	return (
		<section>
			<div className='flex flex-col items-center justify-center w-full gap-[15px] my-[160px]'>
				<h1 className='text-[36px] font-semibold max-w-[700x] text-center'>
					Unquestionable accuracy & reliability
				</h1>

				<p className='max-w-[580px] text-center text-primary-foreground '>
					We pride ourselves on the quality of our chatbot’s responses, and go
					the extra mile to ensure the accuracy & reliability of our answers.
				</p>

				<div className='flex flex-col md:grid grid-cols-3 gap-5 mt-5'>
					{items.map((item, index) => (
						<Card key={index} {...item} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Landing12;
