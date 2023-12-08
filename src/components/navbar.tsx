"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { Icons } from "./ui/icons";
import { useState } from "react";

function NavigationLinks() {
	return (
		<>
			<Link href={"/"}>Affiliate</Link>
			<Link href={"/"}>Pricing</Link>
			<Link href={"/"}>Testimonials</Link>
			<Link href={"/"}>Help Center</Link>
		</>
	);
}

const Navbar = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	return (
		<nav className='fixed top-0 z-50 w-full'>
			<div className='flex justify-between items-center max-md:border max-md:bg-opacity-20 max-md:backdrop-blur-lg '>
				<div className='flex-col md:mx-auto md:container w-full p-4 md:p-[23px] '>
					{/* Main Menu */}
					<div
						className={
							"flex flex-row items-center justify-between md:p-3 gap-x-1 md:rounded-2xl md:mx-8 md:border max-md:border-none md:bg-opacity-20 md:backdrop-blur-lg"
						}>
						{/* Left Logo */}
						<div>
							<Link href={"/"} className='flex flex-row items-center space-x-2'>
								<img
									className='w-[24px] h-[24px]'
									src='/assets/logo.png'
									alt='logo'
								/>
								<h1 className='text-lg font-norma font-normal'>Afforai</h1>
							</Link>
						</div>

						{/* Middle Navigation Links - Desktop */}
						<div className='hidden md:flex flex-row space-x-5 text-sm'>
							<NavigationLinks />
						</div>

						{/* Right Navigation - Desktop */}
						<div className='hidden md:flex flex-row space-x-2'>
							<Button size={"sm"} variant={"third"}>
								Login
							</Button>
							<Button size={"sm"} variant={"accent"}>
								Try For Free
							</Button>
						</div>

						{/* Menu Button - Mobile */}
						<div className='md:hidden flex flex-row space-x-2 items-center'>
							<Button size={"sm"} variant={"third"}>
								Login
							</Button>
							<Button size={"sm"} variant={"accent"}>
								Try For Free
							</Button>
							<Button
								variant='ghost'
								size={"sm"}
								className='bg-background border'
								onClick={toggleMenu}>
								<Icons.menu color='black' />
							</Button>
						</div>
					</div>

					{/* Mobile Navigation Menu */}
					{isMenuOpen && (
						<div className='md:hidden text-primary p-4 flex flex-col text-sm font-light space-y-5 bg-opacity-20 backdrop-blur-lg'>
							<NavigationLinks />
						</div>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
