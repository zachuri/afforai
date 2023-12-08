"use client";

import MasterHead from "@/components/mast-head";
import Users from "@/components/users";

export default function Home() {
	return (
		<main className='container mt-[65px] md:mt-[104px] md:px-[60px] flex min-h-screen flex-col items-center'>
			<MasterHead />
			<Users />
		</main>
	);
}
