"use client";

import Image from "next/image";
import React from "react";
import Testimonials from "./carousel/testimonials";

const item = [
	{
		testimonial:
			"I've signed up and starting testing Afforai Ask for my next project's business model, and I have had a great experience so far. It has been exactly what I needed with its fast response times. For now, I am considering purchasing the Afforai - Lite Plan.",
	},
	{
		testimonial:
			"The platform is free to use with a pay-as-you-go option, and there are no subscriptions required. The platform's Comprehension Model is highly recommended for tasks like document comprehension, reasoning, report writing, and research.",
	},
	{
		testimonial:
			"I love it! Build totally changed the way I use my unstructured text data at school and in my internship this summer. Something special is brewing over at Afforai!",
	},
	{
		testimonial:
			"This looks good to ease out the data analysis task for the users. But in the Affroi build guide, I couldn't see how efficiently the data analysis is done. Guess I have to take a subscription for it. The product looks great and has a User-friendly interface. Congrats on the launch.",
	},
];

const TestitmonialReview = () => {
	return (
		<section>
			<div className='flex flex-col items-center justify-center space-y-5'>
				<Image
					src={"/assets/ph-review.png"}
					alt={"ph-review"}
					width={170}
					height={52.69}
				/>
				<h1 className='text-4xl font-bold'>See what our users say</h1>
				<p className='text-primary-foreground'>
					Loved by thousands, all around the World
				</p>
			</div>

			<Testimonials testimonials={item} />
		</section>
	);
};

export default TestitmonialReview;
