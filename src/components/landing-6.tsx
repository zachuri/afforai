import React from "react";
import { Button } from "./ui/button";
import GridImages from "./grid-images";

const Landing6 = () => {
	return (
		<section>
			<div className='flex flex-col items-center justify-center w-full gap-[15px] my-[160px]'>
				<Button variant={"purple"}>Why choose us?</Button>

				<h1 className='text-[36px] font-semibold max-w-[556px] text-center'>
					Built for the user
				</h1>

				<p className='max-w-[556px] text-center text-primary-foreground '>
					Afforai is where exceptional customer focus meets exceptional
					technology.
				</p>
			</div>
			<div className='-mt-[60px]'>
				<GridImages />
			</div>
		</section>
	);
};

export default Landing6;
