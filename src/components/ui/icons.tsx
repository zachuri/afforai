import { LucideIcon, Menu } from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
	menu: Menu,
	caret: () => (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth='3'
			stroke='currentColor'
			className='w-3 h-3'>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M8.25 4.5l7.5 7.5-7.5 7.5'
			/>
		</svg>
	),
	check: () => (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth='1.5'
			stroke='currentColor'
			className='w-4 h-4'>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M4.5 12.75l6 6 9-13.5'
			/>
		</svg>
	),
	checkCircle: () => (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth='1.5'
			stroke='#03CC3B'
			className='w-6 h-6'>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
			/>
		</svg>
	),
};
