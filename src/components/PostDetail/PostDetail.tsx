import postDetailStyles from './PostDetail.module.css'
import { date } from '../../utils/constants'
import { PostDetailReduxForm } from '../PostDetailForm/PostDetailForm'
import PostDetailComments from '../PostDetailComments/PostDetailComments'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import { LeaveComment } from '../../types/comments'

export default function PostDetail() {

  const post = useTypedSelector(state => state.posts.post)
  const {leaveComment, setShowCommentForm, reset} = useActions()

  function submitComment(data: LeaveComment) {
    leaveComment(post?.id, data)
    setShowCommentForm()
    reset('comment')
  }

  return (
    <div className={postDetailStyles.container}>

      <div className={postDetailStyles.flexContainer}>
        <h4 className={postDetailStyles.title}>{post?.title}</h4>
        <span className={postDetailStyles.date}>{date}</span>
      </div>
      <div className={postDetailStyles.textContainer}>
        <p className={postDetailStyles.text}>{post?.body}</p>
      </div>

      <PostDetailComments/>

      <PostDetailReduxForm onSubmit={submitComment}/>

    </div>  
  )
}