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
};
