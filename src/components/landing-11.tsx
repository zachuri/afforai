import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Landing11 = () => {
	return (
		<section>
			<div className='flex flex-col items-center justify-center w-full gap-[15px] my-[160px]'>
				<Button variant={"purple"}>Seamless Integrations - Coming Soon</Button>

				<h1 className='text-[36px] font-semibold max-w-[636px] text-center'>
					Upload Files directly from Google Drive, One Drive & Dropbox
				</h1>

				<p className='max-w-[636px] text-center text-primary-foreground '>
					Afforai allows you to upload files directly from Google Drive, One
					Drive & Dropbox, meaning your experience will be smooth sailing
					regardless of your preferred
				</p>

				<div className='pt-[30px]'>
					{/* Image */}
					<div className='hidden md:block w-full items-center'>
						<Image
							src={"/assets/laptop-landing-15.png"}
							alt='landing page 4'
							width={650}
							height={600}
						/>
					</div>

					{/* Mobile Image */}
					<div className='md:hidden w-full items-center mt-[20px]'>
						<Image
							src={"/assets/mobile-landing-15.png"}
							alt='landing page 4'
							width={650}
							height={600}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Landing11;
