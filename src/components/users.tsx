import Image from "next/image";
import React from "react";

const Users = () => {
	return (
		<section className='max-width-[1600px] mt-[100px] mb-[128px]'>
			<div className='flex flex-col justify-center items-center gap-[24px]'>
				<p className='text-primary-foreground'>
					Loved by
					<span className='text-[#8036ff]'> 20,000+ </span>
					users around the world
				</p>

				<Image
					src='/assets/laptop-landing-2.png'
					alt={"laptop-landing-2"}
					width={336}
					height={48}
				/>
			</div>
		</section>
	);
};

export default Users;
