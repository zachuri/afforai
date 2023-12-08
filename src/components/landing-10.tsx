import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const Landing10 = () => {
	return (
		<section className='flex flex-col my-[250px] md:grid grid-cols-2 gap-4 '>
			{/* Image */}
			<div className='hidden md:block w-full items-center'>
				<Image
					src={"/assets/laptop-landing-14.png"}
					alt='landing page 4'
					width={650}
					height={600}
				/>
			</div>

			{/* Mobile Image */}
			<div className='md:hidden w-full items-center mt-[20px]'>
				<Image
					src={"/assets/mobile-landing-14.png"}
					alt='landing page 4'
					width={650}
					height={600}
				/>
			</div>

			{/* Content */}
			<div className='md:flex flex-col justify-center space-y-4 px-3 md:mr-5'>
				<div className='md:flex flex-col justify-center items-start space-y-4 px-3'>
					<Button variant={"purple"}>Get more out of your files</Button>
					<h2 className='text-[30px] md:text-[36px] font-semibold md:mr-[25px]'>
						File Wizard - a game changing new feature
					</h2>
					<p className='text-primary-foreground'>
						Convert your files with less effort than ever. Afforai’s File Wizard
						feature allows you to transform your files, in limitless different
						ways. We can translate, summarize, or explain your upload in no
						time.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Landing10;
