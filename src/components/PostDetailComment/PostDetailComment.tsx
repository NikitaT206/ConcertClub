import { PostComment } from '../../types/comments'
import postDetailCommentStyles from './PostDetailComment.module.css'

export default function PostDetailComment(props: {comment: PostComment}) {
  return (
    <li className={postDetailCommentStyles.container}>
      <div className={postDetailCommentStyles.flexContainer}>
        <div className={postDetailCommentStyles.userInfo}>
          <span className={postDetailCommentStyles.name}>{props.comment.name}</span>
          <span className={postDetailCommentStyles.email}>{props.comment.email}</span>
        </div>
        <p className={postDetailCommentStyles.text}>{props.comment.body}</p>
      </div>
    </li>
  )
}