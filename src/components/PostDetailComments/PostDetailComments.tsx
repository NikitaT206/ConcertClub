import { useTypedSelector } from '../../hooks/useTypedSelector'
import postDetailCommentsStyles from './PostDetailComments.module.css'
import PostDetailComment from '../PostDetailComment/PostDetailComment'

export default function PostDetailComments() {
  const post = useTypedSelector(state => state.posts.post)
  const comments = useTypedSelector(state => state.comments.comments)
  const postComments = comments.filter(comment => comment.postId === post?.id)
  
  return (
    <div className={postDetailCommentsStyles.container}>
      <h4 className={postDetailCommentsStyles.title}>Комментарии</h4>
      <ul className={postDetailCommentsStyles.list}>
        {postComments.map(comment => {
          return <PostDetailComment comment={comment} key={comment.id}/>
        })}
      </ul>
    </div>
  )
}