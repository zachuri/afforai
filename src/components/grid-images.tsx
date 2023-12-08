import React from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { DivideIcon } from "lucide-react";
import Link from "next/link";

type CardItem = {
	image: string;
	isNew: boolean;
	title: string;
	content: string;
	link?: string;
};

const items: CardItem[] = [
	{
		image: "/assets/laptop-landing-6.png",
		isNew: true,
		title: "Cross Language Querying",
		content:
			"Afforai is able to translate your documents to more than 100 languages, meaning wherever you’re from, you can be assured we can help.",
	},
	{
		image: "/assets/laptop-landing-7.png",
		isNew: false,
		title: "Multiple file types supported",
		content:
			"Afforai can extract data from a multitude of formats, including; PDF, URL, DOCX, PPTX & XLSX, as well as your own text & links from Websites. The possibilities are limitless!",
	},
	{
		image: "/assets/laptop-landing-8.png",
		isNew: true,
		title: "Valuable Data Citation",
		content:
			"Afforai is able to show exactly where your data has been extracted from & highlight it for you, so you never loose your time validating information again.",
	},
	{
		image: "/assets/laptop-landing-9.png",
		isNew: false,
		title: "Unbreakable Security",
		content:
			"Afforai uses Azure Server & Azure OpenAI API. In other words, your data is more than safe with us.",
		link: "https://afforai.com/security",
	},
	{
		image: "/assets/laptop-landing-10.png",
		isNew: false,
		title: "Built in Document Viewer",
		content:
			"Never Switch tabs again. Afforai’s document viewer means that you can have your uploaded files right next to your chatbot, giving you the ability to search the file, and refer to it for data citations.",
	},
];

const GridImages = () => {
	return (
		<section>
			{/* First Grid */}
			<div className='flex flex-col gap-5 md:grid grid-cols-2 max-h-[500px] '>
				<Card className='max-w-[600px] h-full'>
					<CardContent className='p-0'>
						<Image
							src={items[0].image}
							alt='landing 6'
							width={600}
							height={300}
							className='bg-secondary rounded-t-lg'
						/>
					</CardContent>
					<CardFooter className='flex flex-col items-start pt-4'>
						<div className='flex flex-row space-x-3'>
							<h2>{items[0].title}</h2>
							{items[0].isNew && <Badge variant={"new"}>New</Badge>}
						</div>
						<p className='text-xs text-primary-foreground'>
							{items[0].content}
						</p>
					</CardFooter>
				</Card>

				<Card className='max-w-[750px] h-full'>
					<CardContent className='p-0'>
						{" "}
						<Image
							src={items[1].image}
							alt='landing 6'
							width={750}
							height={750}
							className='bg-secondary rounded-t-lg'
						/>
					</CardContent>
					<CardFooter className='flex flex-col items-start pt-4'>
						<div className='flex flex-row space-x-3'>
							<h2>{items[1].title}</h2>
							{items[1].isNew && <Badge variant={"new"}>New</Badge>}
						</div>
						<p className='text-xs text-primary-foreground'>
							{items[1].content}
						</p>
					</CardFooter>
				</Card>
			</div>

			{/* Second Grid */}
			<div className='flex flex-col gap-5 md:grid grid-cols-2 mt-5 max-h-[789px]'>
				{/* 2 cards */}
				<div className='flex flex-col gap-5'>
					<Card className='max-w-[600px] max-h-[1200px]'>
						<CardContent className='p-0'>
							<Image
								src={items[2].image}
								alt='landing 6'
								width={600}
								height={300}
								className='bg-secondary rounded-t-lg'
							/>
						</CardContent>
						<CardFooter className='flex flex-col items-start pt-4'>
							<div className='flex flex-row space-x-3'>
								<h2>{items[2].title}</h2>
								{items[2].isNew && <Badge variant={"new"}>New</Badge>}
							</div>
							<p className='text-xs text-primary-foreground'>
								{items[2].content}
							</p>
						</CardFooter>
					</Card>

					<Card className='max-w-[750px] max-h-[300px]'>
						<CardContent className='p-0'>
							<Image
								src={items[4].image}
								alt='landing 6'
								width={750}
								height={300}
								className='bg-secondary rounded-t-lg'
							/>
						</CardContent>
						<CardFooter className='flex flex-col items-start pt-4'>
							<div className='flex flex-row space-x-3'>
								<h2>{items[4].title}</h2>
								{items[4].isNew && <Badge variant={"new"}>New</Badge>}
							</div>
							<p className='text-xs text-primary-foreground'>
								{items[4].content}
							</p>
						</CardFooter>
					</Card>
				</div>
				<div>
					<Card className='max-w-[600px] max-h-[800px]'>
						<CardContent className='p-0'>
							<Image
								src={items[3].image}
								alt='landing 6'
								width={600}
								height={300}
								className='bg-secondary rounded-t-lg'
							/>
						</CardContent>
						<CardFooter className='flex flex-col items-start pt-4'>
							<div className='flex flex-row space-x-3'>
								<h2>{items[3].title}</h2>
								{items[3].isNew && <Badge variant={"new"}>New</Badge>}
							</div>
							<p className='text-xs text-primary-foreground'>
								{items[3].content}{" "}
								{items[3].link && (
									<Link
										href={items[3].link}
										className='text-xs text-blue-500 hover:underline'>
										Learn more
									</Link>
								)}
							</p>
						</CardFooter>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default GridImages;
