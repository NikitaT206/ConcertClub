import { useTypedSelector } from '../../hooks/useTypedSelector'
import postDetailCommentsStyles from './PostDetailComments.module.css'
import PostDetailComment from '../PostDetailComment/PostDetailComment'
import { useEffect } from 'react'
import { useActions } from '../../hooks/useActions'

export default function PostDetailComments() {
  const post = useTypedSelector(state => state.posts.post)
  const comments = useTypedSelector(state => state.comments.comments)
  const {setPostComments, getComments} = useActions()

  useEffect(() => {
    getComments(post?.id)
  }, [post])

  useEffect(() => {
    if (comments) {
      setPostComments(comments)
    }
  }, [comments])
  
  return (
    <div className={postDetailCommentsStyles.container}>
      <h4 className={postDetailCommentsStyles.title}>Комментарии</h4>
      <ul className={postDetailCommentsStyles.list}>
        {comments.map(comment => {
          return <PostDetailComment comment={comment} key={comment.id}/>
        })}
      </ul>
    </div>
  )
}