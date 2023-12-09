"use client";

import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import Carousel from "./carousel";

export type TestimonialProps = {
	testimonial: string;
};

function TestimonialCard({ testimonial }: TestimonialProps) {
	return (
		<>
			{/* full padding breaks the slide */}
			<div className='rounded-xl border border-[#E6E6E6] p-[32px] '>
				<p className='text-base text-[#222222] w-[534px] h-[144px] '>
					{testimonial}
				</p>
				<div className='flex flex-row justify-between items-center pt-4 border-t'>
					<div className='flex flex-row items-center gap-2'>
						<Avatar>
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<h1 className='text-sm text-primary-foreground'>Name, Type</h1>
					</div>
					<Button variant={"orange"} className='gap-2'>
						<Icons.orangePlus />
						View on Product Hunt
					</Button>
				</div>
			</div>
		</>
	);
}

type Props = {
	testimonials: { testimonial: string }[];
};

const Testimonials: React.FC<Props> = ({ testimonials }) => {
	return (
		<div className='mx-5 '>
			<Carousel>
				{testimonials.map((testimonial, index) => {
					return (
						<div key={index} className='mx-3'>
							<TestimonialCard testimonial={testimonial.testimonial} />
						</div>
					);
				})}
			</Carousel>
		</div>
	);
};

export default Testimonials;
