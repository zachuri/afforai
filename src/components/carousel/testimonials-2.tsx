"use client";

import TestimonialCard from "./testimonial-card";
import SliderContainer, { SliderItem } from "./testimonial-slider";

const testimonials = [
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

const Testimonials2 = () => {
	return (
		<SliderContainer
			contentWidth={1062}
			initialOffsetX={0}
			direction={"right"}
			id={2}>
			{testimonials.map((testimonial, index) => (
				<SliderItem key={index} width={590}>
					<TestimonialCard testimonial={testimonial.testimonial} />
				</SliderItem>
			))}
		</SliderContainer>
	);
};

export default Testimonials2;
