"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const Landing9 = () => {
	return (
		<section className='flex flex-col my-[250px] md:grid grid-cols-2 gap-4 '>
			{/* Content */}
			<div className='md:flex flex-col justify-center space-y-4 px-3 md:mr-5'>
				<div className='md:flex flex-col justify-center items-start space-y-4 px-3'>
					<Button variant={"purple"}>Multiple Language Supported</Button>
					<h2 className='text-[30px] md:text-[36px] font-semibold md:mr-[25px]'>
						Regardless of where you are from, Afforai is for you
					</h2>
					<p className='text-primary-foreground'>
						We support more than 100 Languages, meaning you can seamlessly use
						our services regardless of where you are from. Our Cross Language
						Querying feature also allows flawless translation of documents.
					</p>
				</div>
			</div>

			{/* Image */}
			<div className='hidden md:block w-full items-center'>
				<Image
					src={"/assets/laptop-landing-13.png"}
					alt='landing page 4'
					width={650}
					height={600}
				/>
			</div>

			{/* Mobile Image */}
			<div className='md:hidden w-full items-center mt-[20px]'>
				<Image
					src={"/assets/mobile-landing-13.png"}
					alt='landing page 4'
					width={650}
					height={600}
				/>
			</div>
		</section>
	);
};

export default Landing9;
