import { Key } from 'readline';
import { UserPost } from '../../types/posts'
import postStyles from './Post.module.css'
import { date } from '../../utils/constants';
import { useActions } from '../../hooks/useActions';

export default function Post(props: {post: UserPost, key: Key}) {

  const {setPost} = useActions()
  
  return (
    <li className={postStyles.container} onClick={() => setPost(props.post)}>
      <div className={postStyles.flexContainer}>
        <h4 className={postStyles.title}>{props.post.title}</h4>
        <span className={postStyles.date}>{date}</span>
      </div>
      <p className={postStyles.text}>{props.post.body}</p>
    </li>  
  )
}