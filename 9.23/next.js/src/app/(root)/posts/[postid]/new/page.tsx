import Page from "@/app/(root)/_components/page"
import React from 'react'

function NewPostPage() {
	return (
		<Page title='글 작성하기'>
			<form>
				<input type="text" />

				<input type="text" />

				<textarea typeof="submit">작성하기</textarea>
			</form>
		</Page>
	)
}

export default NewPostPage