import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const Landing7 = () => {
	return (
		<section className='flex flex-col my-[250px] md:grid grid-cols-2 gap-4 '>
			{/* Content */}
			<div className='md:flex flex-col justify-center space-y-4 px-3 md:mr-5'>
				<div className='md:flex flex-col justify-center items-start space-y-4 px-3'>
					<Button variant={"purple"}>Most versatile</Button>
					<h2 className='text-[30px] md:text-[36px] font-semibold md:mr-[25px]'>
						Create Multiple chatbots for different purposes
					</h2>
					<p className='text-primary-foreground'>
						Legal documents? Summarizing a book? Extracting data from a website?
						We allow you to create multiple chatbots at one time, so you can use
						Afforai for a whole range of purposes.
					</p>
				</div>
				<div className='hidden md:flex flex-row justify-center items-center space-x-5'>
					<Button variant={"accent"}>Get Started</Button>
					<Button variant={"third"}>View pricing</Button>
				</div>
			</div>

			{/* Image */}
			<div className='hidden md:block w-full items-center'>
				<Image
					src={"/assets/laptop-landing-11.png"}
					alt='landing page 4'
					width={650}
					height={600}
				/>
			</div>

			{/* Mobile Image */}
			<div className='md:hidden w-full items-center mt-[20px]'>
				<Image
					src={"/assets/mobile-landing-11.png"}
					alt='landing page 4'
					width={650}
					height={600}
				/>
			</div>
		</section>
	);
};

export default Landing7;
