import { useId, useRef } from 'react';
import { createPost } from '../redux/reducres/postsReducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function PostCreatePage() {
	const titleId = useId();
	const bodyId = useId();
	const titleDOMRef = useRef(null);
	const bodyDOMRef = useRef(null);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		const newPost = {
			title : titleDOMRef.current.value,
			body : bodyDOMRef.current.value
		};

		dispatch(createPost(newPost));
		navigate
	};

	return (
		<div>
			<h1 className='text-4xl font-bold'>새 글 작성하기</h1>
			<form onSubmit={handleSubmit} className="mt-20">
				<div className="mt-4">
					<label htmlFor={titleId} className='text-sm font-semibold text-gray-500'>
						제목
					</label>
					<input
						ref={titleDOMRef}
						id={titleId}
						type="text"
						className='border border-gray-700 px-4 py-2 w-full'
					/>
				</div>
				<div className="mt-4">
					<label htmlFor={bodyId} className='text-sm font-semibold text-gray-500'>
						내용
					</label>
					<textarea
						ref={bodyDOMRef}
						id={bodyId}
						className='border border-gray-700 px-4 py-2 w-full'
					></textarea>
				</div>
				<button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
					확인
				</button>
			</form>
		</div>
	);
}

export default PostCreatePage;