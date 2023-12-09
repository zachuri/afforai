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
	fastForward: () => (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth='1.5'
			stroke='currentColor'
			className='w-6 h-6'>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z'
			/>
		</svg>
	),
	power: () => (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth='1.5'
			stroke='currentColor'
			className='w-6 h-6'>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M5.636 5.636a9 9 0 1012.728 0M12 3v9'
			/>
		</svg>
	),
	magnifyPlus: () => (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth='1.5'
			stroke='currentColor'
			className='w-6 h-6'>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6'
			/>
		</svg>
	),
	orangePlus: () => (
		<svg
			width='16'
			height='17'
			viewBox='0 0 16 17'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<g id='product hunt'>
				<path
					id='Vector'
					fillRule='evenodd'
					clipRule='evenodd'
					d='M16 8.5C16 12.9184 12.4184 16.5 8 16.5C3.5816 16.5 0 12.9184 0 8.5C0 4.0816 3.5816 0.5 8 0.5C12.4184 0.5 16 4.0816 16 8.5Z'
					fill='#DA552F'
				/>
				<path
					id='Vector_2'
					fillRule='evenodd'
					clipRule='evenodd'
					d='M9.067 8.5H6.8002V6.1H9.067C9.38525 6.1 9.6905 6.22645 9.91555 6.45145C10.1405 6.6765 10.267 6.98175 10.267 7.3C10.267 7.61825 10.1405 7.9235 9.91555 8.14855C9.6905 8.37355 9.38525 8.5 9.067 8.5ZM9.067 4.5H5.2002V12.5H6.8002V10.1H9.067C9.8096 10.1 10.5218 9.805 11.0469 9.2799C11.572 8.7548 11.867 8.0426 11.867 7.3C11.867 6.5574 11.572 5.8452 11.0469 5.3201C10.5218 4.795 9.8096 4.5 9.067 4.5Z'
					fill='white'
				/>
			</g>
		</svg>
	),
};
