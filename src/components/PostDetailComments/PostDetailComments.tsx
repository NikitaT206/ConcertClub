import { useTypedSelector } from '../../hooks/useTypedSelector'
import postDetailCommentsStyles from './PostDetailComments.module.css'
import PostDetailComment from '../PostDetailComment/PostDetailComment'
import { EffectCallback, useEffect } from 'react'
import { useActions } from '../../hooks/useActions'

export default function PostDetailComments() {
  const post = useTypedSelector(state => state.posts.post)
  const comments = useTypedSelector(state => state.comments.comments)
  const postComments = useTypedSelector(state => state.comments.postComments)
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
      {postComments && (
         <ul className={postDetailCommentsStyles.list}>
          {postComments.map(comment => {
            return <PostDetailComment comment={comment} key={comment.id}/>
          })}
        </ul>
      )}
     
    </div>
  )
}