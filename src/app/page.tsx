"use client";

import Landing6 from "@/components/landing-6";
import Landing4 from "@/components/landing-4";
import Landing5 from "@/components/landing-5";
import MasterHead from "@/components/mast-head";
import Users from "@/components/users";
import Landing7 from "@/components/landing-7";
import Landing8 from "@/components/landing-8";
import Landing9 from "@/components/landing-9";
import Landing10 from "@/components/landing-10";
import Landing11 from "@/components/landing-11";
import Landing12 from "@/components/landing-12";
import TestitmonialReview from "@/components/testimonial-review";
import Testimonials1 from "@/components/carousel/testimonials-1";
import Testimonials2 from "@/components/carousel/testimonials-2";

export default function Home() {
	return (
		<main className='container mt-[65px] md:mt-[104px] md:px-[60px] flex flex-col items-center'>
			<MasterHead />
			<Users />
			<Landing4 />
			<Landing5 />
			{/* <Landing6 /> */}
			<Landing7 />
			<Landing8 />
			<Landing9 />
			{/* <Landing10 /> */}
			<Landing11 />
			<Landing12 />
			<TestitmonialReview />
      <Testimonials1 />
			<Testimonials2 />
		</main>
	);
}
