import React from 'react'
import { BiDislike, BiLike } from 'react-icons/bi';

interface props {
	photoURL: string;
	userName: string;
	text: string;
}

function CommentItem({ photoURL, userName, text }: props) {
	return (
		<>
			<li className='comment_item'>
				<img src={photoURL} alt="" className='comment_user_img' />

				<div>
					<span className='comment_username'>{userName}</span>
					<span className='comment_text'>{text}</span>
					<div className='comment_reply'>
						<button>
							<BiLike />
						</button>
						<button>
							<BiDislike />
						</button>
						<span>Reply</span>
					</div>
				</div>
			</li>

		</>
	)
}

export default CommentItem