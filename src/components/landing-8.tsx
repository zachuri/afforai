"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Icons } from "./ui/icons";
import { Badge } from "./ui/badge";
import Animation from "./animation";

const items = [
	{
		icon: <Icons.fastForward />,
		title: "Fast Mode (default)",
		credit: 1,
		content:
			"Quickly ask a question and receive an answer from the AI. This mode is most suited for applications that require only a small part of the documents to be scanned (ex. FAQ Chatbot, Search). ",
	},
	{
		icon: <Icons.power />,
		title: "Powerful Mode",
		credit: 4,
		content:
			"Get answers of extra high quality from the AI. This mode is most suited for applications that require inferences as well as the full documents to be scanned (ex. Textual Data Analysis, Search with Inference, Report Generation).",
	},
	{
		icon: <Icons.magnifyPlus />,
		title: "Google Mode",
		credit: 5,
		content:
			"Supplement your answers with the top 3 results from Google Search. This adds extra reliability to back up our already incredibly accurate answers.",
	},
];

const Landing8 = () => {
	return (
		<Animation direction='right'>
			<section className='flex flex-col items-center my-[160px] md:grid grid-cols-2 gap-4 '>
				<div className='hidden md:block w-full items-center pr-14'>
					<Image
						src={"/assets/laptop-landing-12.png"}
						alt='landing page 4'
						width={650}
						height={600}
					/>
				</div>

				<div className='md:flex flex-col justify-center items-start space-y-4 px-3'>
					<Button variant={"purple"}>Different Modes Available</Button>

					<h2 className='text-[30px] md:text-[36px] font-semibold md:mr-[25px]'>
						Customize your assistant with a range of different modes
					</h2>

					<p className='text-primary-foreground'>
						Further power your questions with additional modes. Afforai allows
						you to switch between three different modes, each which have unique
						ways of utilising our AI tools to answer your question(s).
					</p>

					{/* Mobile Image */}
					<div className='md:hidden w-full items-center pt-[50px]'>
						<Image
							src={"/assets/mobile-landing-12.png"}
							alt='landing page 4'
							width={650}
							height={600}
						/>
					</div>

					<div>
						{items.map((item, index) => (
							<div key={index} className='flex flex-row gap-5'>
								<div className='text-[#3A0299]'>{item.icon}</div>
								<div className='flex flex-col gap-2'>
									<h1 className='text-[#3A0299]'>
										{item.title}{" "}
										<Badge variant={"new"} className='text-xs lowercase'>
											{item.credit} credits
										</Badge>
									</h1>
									<p className='text-[#260266] text-sm mb-5'>{item.content}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</Animation>
	);
};

export default Landing8;
