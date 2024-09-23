import clsx from 'clsx';
import React, { ComponentProps } from 'react';

type inputProps = {
	wrapperClassName?: string;
	inputClassName?: string;
} & Omit<ComponentProps<'input'>, 'className'>;

function Input({
	wrapperClassName : passedWrapperClassName,
	inputClassName : passedInputClassName,
	...props
}: inputProps) {
	const wrapperClassName = clsx("border rounded-md px-4 py-2", passedWrapperClassName);

	const inputClassName = clsx("outline-none", passedInputClassName);

	return (
		<div className={wrapperClassName}>
			<input type="text" className={inputClassName} {...props}/>
		</div>
	)
}

export default Input;