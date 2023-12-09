"use client";

import React from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";

export type TestimonialProps = {
	testimonial: string;
};

const TestimonialCard: React.FC<TestimonialProps> = ({ testimonial }) => {
	return (
		<>
			<div className='rounded-xl border border-[#E6E6E6] p-[32px] whitespace-normal '>
				<p className='text-base text-[#222222] w-[534px] h-[144px]  '>
					{testimonial}
				</p>
				<div className='flex flex-row justify-between items-center pt-4 border-t'>
					<div className='flex flex-row items-center gap-2'>
						<Avatar>
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<h1 className='text-sm text-primary-foreground'>Name, From</h1>
					</div>
					<Button variant={"orange"} className='gap-2'>
						<Icons.orangePlus />
						View on Product Hunt
					</Button>
				</div>
			</div>
		</>
	);
};

export default TestimonialCard;
