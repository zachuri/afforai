"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { Icons } from "./ui/icons";
import { useState } from "react";
import { cn } from "../../utils/utils";

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
		<header className='sticky top-0 z-40 bg-opacity-20 backdrop-blur-lg'>
			<div className='md:pt-5 flex justify-between items-center '>
				<div className='flex flex-col md:mx-14 w-full md:container '>
					<div
						className={cn(
							"flex flex-row items-center justify-between md:p-3 p-5 py-5 gap-x-1 md:rounded-2xl md:border border-b",
							isMenuOpen && "border-none"
						)}>
						{/* Left Logo */}
						<div>
							<Link href={"/"} className='flex flex-row space-x-2'>
								<img src='/assets/logo.png' alt='logo' width={25} height={25} />
								<h1 className='text-lg font-norma font-normal'>Afforai</h1>
							</Link>
						</div>

						{/* Middle Navigation Links - Desktop */}
						<div className='hidden md:flex flex-row md:space-x-3 lg:space-x-5 text-sm'>
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
						<div className='md:hidden text-primary p-4 border-b flex flex-col text-sm font-light space-y-5'>
							<NavigationLinks />
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Navbar;
