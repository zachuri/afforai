"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { Icons } from "./ui/icons";

const Navbar = () => {
	return (
		<header className='sticky top-0 z-40 bg-opacity-20 backdrop-blur-lg'>
			<div className='md:pt-5 flex justify-center items-center '>
				<div className='md:mx-14 w-full md:container flex flex-row items-center justify-between md:p-3 p-5 py-5 gap-x-1 md:rounded-2xl md:border border-b'>
					<div>
						<Link className='flex flex-row space-x-2' href={"/"}>
							<img src='/assets/logo.png' alt='logo' width={25} height={25} />
							<h1 className='text-lg font-norma font-normal'>Afforai</h1>
						</Link>
					</div>
					<ul className='hidden md:flex flex-row md:space-x-3 lg:space-x-5 text-sm'>
						<Link href={"/"}>Affiliate</Link>
						<Link href={"/"}>Pricing</Link>
						<Link href={"/"}>Testimonials</Link>
						<Link href={"/"}>Help Center</Link>
					</ul>
					<div className='flex flex-row space-x-2'>
						<Button size={"sm"} variant={"third"}>
							Login
						</Button>
						<Button size={"sm"} variant={"accent"}>
							Try For Free
						</Button>
						<div className='md:hidden '>
							<Button
								variant='ghost'
								size={"sm"}
								className='bg-background border'>
								<Icons.menu color='black' />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
