"use client";

import Link from "next/link";
import React from "react";
import { Icons } from "./ui/icons";
import { Button } from "./ui/button";
import Carousel from "./carousel/mast-carousel";
import Image from "next/image";
import Animation from './animation';

const MasterHead = () => {
	return (
		<section className='relative mx-[60px] w-full '>
			<Animation
				className='flex flex-col items-center justify-center space-y-10 max-md:pt-5 '
				direction={"up"}>
				<div className='max-md:w-full px-2 p-1 border-[2px] border-black rounded-xl text-sm font-medium flex flex-row items-center justify-center space-x-2 bg-gradient-to-r from-[#fd7e14] to-[#ffc107]'>
					<img
						className='w-[26px] h-[20px]'
						src='/assets/appsumo.png'
						alt='logo'
					/>
					<h2>Now on AppSumo</h2>
					<Link
						className='border border-black rounded-md p-1 flex flex-row items-center bg-gradient-to-t from-[#ffc107] from-5% to-[#ff9501] to-95%'
						href={"/"}>
						Get Lifetime Deal <Icons.caret />
					</Link>
				</div>

				<h1 className='max-w-[343px] md:max-w-[659px] text-4xl md:text-5xl font-semibold text-left md:text-center max-md:self-start z-2'>
					Your second brain for maximizing productivity
				</h1>

				<p className='max-w-[671px] md:text-center text-[#525252] z-20'>
					Afforai is an AI chatbot that searches, summarizes, and translates
					info from multiple sources to produce trustworthy research. Feed
					lengthy research documents to stacks of dry compliance requirements
					and extract the key findings you need.
				</p>

				<Carousel />

				<div className='flex flex-col w-full max-md:space-y-3 md:flex-row md:justify-center md:items-center md:space-x-2 z-20'>
					<Button variant={"accent"}>Try For Free</Button>
					<Button variant={"third"}>View pricing</Button>
				</div>

				<div className='absolute z-10 rounded-[28px] w-full max-md:hidden flex justify-center items-center'>
					<Image
						src='/assets/laptop-landing-3.png'
						alt='laptop landing 1'
						width={"2000"}
						height={"1000"}
						className='rounded-[28px]'
						priority
					/>
				</div>

				<div className='max-md:hidden pt-[50px] mx-[72px] z-20'>
					<Image
						src='/assets/laptop-landing-1.png'
						alt='laptop landing 1'
						width={"1500"}
						height={"500"}
						priority
					/>
				</div>
			</Animation>
		</section>
	);
};

export default MasterHead;
