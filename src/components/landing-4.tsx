import React from "react";
import { Icons } from "./ui/icons";
import Image from "next/image";

const items = [
	"A whip smart research assistant",
	"We speak every language",
	"Reliable data citation for answers",
	"Fort-Knox level data security",
];

const Landing4 = () => {
	return (
		<section className='flex flex-col md:grid grid-cols-2 gap-4'>
			{/* Content */}
			<div className='md:flex flex-col justify-center items-start space-y-4 px-3 mr-5'>
				<h2 className='text-[36px] font-semibold md:mr-[50px]'>
					Say goodbye to long, tiresome documents
				</h2>
				<p className='text-primary-foreground'>
					Afforai seamlessly translates documents, files, spreadsheets &
					websites, filtering out what you don’t need & answering your specific
					questions within seconds.
				</p>
				<div className='flex flex-col'>
					{items.map((item, index) => (
						<div key={index} className='flex flex-row gap-3 '>
							<Icons.checkCircle />
							<p className='text-[#03CC3B] text-[16px]'>{item}</p>
						</div>
					))}
				</div>
			</div>

			{/* Image */}
			<div>
				<Image
					src={"/assets/laptop-landing-4.png"}
					alt='landing page 4'
					width={700}
					height={700}
				/>
			</div>
		</section>
	);
};

export default Landing4;
