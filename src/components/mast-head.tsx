import Link from "next/link";
import React from "react";
import { Icons } from "./ui/icons";
import { Button } from "./ui/button";
import Carousel from "./carousel";

const MasterHead = () => {
	return (
		<section className='mx-[60px] w-full flex flex-col items-center justify-center space-y-10'>
			<div className='px-2 p-1 border-[2px] border-black rounded-xl text-sm font-medium flex flex-row items-center justify-center space-x-2 bg-gradient-to-r from-[#fd7e14] to-[#ffc107]'>
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

			<h1 className='max-w-[659px] text-5xl font-semibold content-center text-center'>
				Your second brain for maximizing productivity
			</h1>

			<p className='max-w-[671px] text-center text-[#525252]'>
				Afforai is an AI chatbot that searches, summarizes, and translates info
				from multiple sources to produce trustworthy research. Feed lengthy
				research documents to stacks of dry compliance requirements and extract
				the key findings you need.
			</p>

			<Carousel />

			<div className='space-x-2'>
				<Button variant={"accent"}>Try For Free</Button>
				<Button variant={"third"}>View pricing</Button>
			</div>
		</section>
	);
};

export default MasterHead;
