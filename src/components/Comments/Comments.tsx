import React, { useEffect, useState } from 'react'
import { MdSort } from 'react-icons/md'

import './index.css'
import { BiEdit } from 'react-icons/bi'
import { BsEmojiLaughing } from 'react-icons/bs'
import { addDoc, collection, getDocs, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebse'
import { CommentType } from '../../Types'
import CommentItem from './CommentItem'

function Comments() {
	const [commentText, setCommentText] = useState<string>('')
	const [comments, setComments] = useState<any | null>(null)

	const dbInstance = collection(db, 'comments');

	useEffect(() => {
		getDocs(dbInstance)
			.then((data) => {
				setComments(data.docs.map((item) => {
					return { ...item.data(), id: item.id }
				}));

			})

	}, [commentText, dbInstance])


	const postComment = (e: React.FormEvent) => {
		e.preventDefault()

		const comment = {
			userName: "Hari Naik Meravath",
			photoURL: "https://yt3.ggpht.com/yti/AHyvSCBalbI-ozkzJXbC4WJ-VpERpN9SdsLzilo4xQ=s88-c-k-c0x00ffffff-no-rj",
			text: commentText,
			timestamp: serverTimestamp()
		}

		if (commentText !== '') {
			addDoc(dbInstance, comment)
			setCommentText('')
		}

	}

	const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
		setCommentText(e.currentTarget.value)
	}

	return (
		<div className='comment_section'>
			<div className='comment_info'>
				<span>{comments && comments.length} Comments</span>
				<button>
					<MdSort className='sort_icon' />
					<span>Sort by</span>
				</button>
			</div>
			<div className='comment_input_container'>
				<span>Commenting as</span>
				<div className='comment_user_info'>
					<img src="https://yt3.ggpht.com/yti/AHyvSCBalbI-ozkzJXbC4WJ-VpERpN9SdsLzilo4xQ=s88-c-k-c0x00ffffff-no-rj" alt="" className='comment_user_img'/>
					<div>
						<div>
							<span>Hari Naik Meravath</span>
							<span>@user-rd3xl8fy8s</span>
						</div>
						<BiEdit />
					</div>
				</div>
				<form onSubmit={postComment} className='comment_form'>
					<input type="text" placeholder='Add a comment...' className='add_comment_input' onChange={onChangeInput} value={commentText} />
					<div>
						<small>
							<BsEmojiLaughing className='emoji_icon' />
							By completing this action you are creating a <span>channel</span> ​and agree to <span>YouTube's Terms of Service​.</span>
						</small>
						<div>
							<button className='cancel_btn'>Cancel</button>
							<button type='submit' className={`comment_btn ${commentText.length > 0 && 'comment_btn_color'}`}>comment</button>
						</div>
					</div>
				</form>
			</div>
			<ul className='comments_container'>
				{comments && comments.map((item: CommentType) => (

					<CommentItem
						key={item.id}
						photoURL={item.photoURL}
						userName={item.userName}
						text={item.text}
					/>
				))}
			</ul>
		</div>
	)
}

export default Comments