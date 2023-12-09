import Carousel from "./carousel";

interface PropsDisplay {
	avatar: string;
	testimonial: string;
}

function TestimonialCard({ avatar, testimonial }: PropsDisplay) {
	return (
		<>
			{/* full padding breaks the slide */}
			<div className='pl-5 pt-5 pb-5'>
				<p className='text-sm text-[#222222] md:text-sm lg:text-lg'>
					{testimonial}
				</p>
				<h1 className='text-md md:text-md uppercase tracking-widest text-[#222222] lg:text-xl'>
					{avatar}
				</h1>
			</div>
		</>
	);
}

interface Props {
	testimonials: { testimonial: string; avatar: string }[];
}

const Project: React.FC<Props> = ({ testimonials }) => {
	return (
		<div className='mx-5 '>
			<Carousel className=' text-white'>
				{testimonials.map((testimonial, index) => {
					return (
						<div key={index}>
							<TestimonialCard
								testimonial={testimonial.testimonial}
								avatar={testimonial.avatar}
							/>
						</div>
					);
				})}
			</Carousel>
		</div>
	);
};

export default Project;
