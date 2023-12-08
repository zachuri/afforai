import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Landing6 = () => {
	return (
		<div className='flex flex-col items-center justify-center w-full gap-[24px] my-[160px]'>
			<Button variant={"purple"}>Why choose us?</Button>

			<h1 className='text-[36px] font-semibold max-w-[556px] text-center'>
				Save yourself from stress & streamline your workflow
			</h1>

			<p className='max-w-[556px] text-center text-primary-foreground mb-[75px]'>
				The average worker spends 9 hours per week looking through & gathering
				information from thick stacks of documents. With Afforai, you can save
				yourself 8 hours per week (plus a lot of headaches).
			</p>

			<Image
				src={"/assets/laptop-landing-5.png"}
				alt='landing page 4'
				width={1200}
				height={600}
			/>
		</div>
	);
};

export default Landing6;
