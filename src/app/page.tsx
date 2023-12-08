"use client";

import Landing6 from '@/components/lading-6';
import Landing4 from "@/components/landing-4";
import Landing5 from "@/components/landing-5";
import MasterHead from "@/components/mast-head";
import Users from "@/components/users";

export default function Home() {
	return (
		<main className='container mt-[65px] md:mt-[104px] md:px-[60px] flex min-h-screen flex-col items-center'>
			<MasterHead />
			<Users />
			<Landing4 />
			<Landing5 />
			<Landing6 />
		</main>
	);
}
