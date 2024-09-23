import { title } from 'process';
import React from 'react';

interface PageProps {
	title?: string;
	fullWidth?: boolean;
	children: React.ReactNode;
}

function Page({children, fullWidth}: PageProps) {
	const baseClassNames = 'px-5 py-8';
	const notFullWidthClassNames = 'max-w-screen-md';

	const className = baseClassNames + !fullWidth ? notFullWidthClassNames : "";

	return (
		<main className={className}>
			{title && <h1 className='mb-10'>{title}</h1>}
			{children}
		</main>
	)
}

export default Page;