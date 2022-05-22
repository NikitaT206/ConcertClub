import postDetailStyles from './PostDetail.module.css'
import { date } from '../../utils/constants'
import PostDetailForm from '../PostDetailForm/PostDetailForm'
import PostDetailComments from '../PostDetailComments/PostDetailComments'
import { useTypedSelector } from '../../hooks/useTypedSelector'

export default function PostDetail() {

  const post = useTypedSelector(state => state.posts.post)

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

      <PostDetailForm/>

    </div>  
  )
}