'use client'

import { Avatar } from "../ui/avatar";
import Carousel from "./carousel";

export type TestimonialProps = {
	testimonial: string;
};

function TestimonialCard({ testimonial }: TestimonialProps) {
	return (
		<>
			{/* full padding breaks the slide */}
			<div className='pl-5 pt-5 pb-5'>
				<p className='text-lg text-[#222222] '>{testimonial}</p>
				<h1 className='text-md md:text-md uppercase tracking-widest text-[#222222] lg:text-xl'>
					<Avatar />
				</h1>
			</div>
		</>
	);
}

type Props = {
	testimonials: { testimonial: string }[];
};

const Testimonial: React.FC<Props> = ({ testimonials }) => {
	return (
		<div className='mx-5 '>
			<Carousel className=' text-white'>
				{testimonials.map((testimonial, index) => {
					return (
						<div key={index}>
							<TestimonialCard testimonial={testimonial.testimonial} />
						</div>
					);
				})}
			</Carousel>
		</div>
	);
};

export default Testimonial;
