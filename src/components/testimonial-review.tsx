"use client";

import Image from "next/image";
import React from "react";
import Testimonials from "./carousel/testimonials-1";
import Testimonials1 from "./carousel/testimonials-1";
import Testimonials2 from "./carousel/testimonials-2";
import Animation from "./animation";

const TestitmonialReview = () => {
	return (
		<section className='mb-5 w-full'>
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

			<div>
				<Testimonials1 />
			</div>
			<div>
				<Testimonials2 />
			</div>
		</section>
	);
};

export default TestitmonialReview;
