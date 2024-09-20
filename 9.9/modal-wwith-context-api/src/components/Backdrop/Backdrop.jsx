/* eslint-disable react/prop-types */

function Backdrop({ children }) {
	return (
		<div className='fixed top-0 bottom-0 left-0 right-0'>
			<div className='h-screen flex flex-col'></div>
			{children}
		</div>
	)
}


export default Backdrop
