import { Link } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { UserPost } from '../../types/posts'
import publicationStyles from './Publication.module.css'

export default function Publication(props: {post: UserPost}) {
  const user = useTypedSelector(state => state.users.currentUser)
  const {setPost, getComments, eraseComments} = useActions()

  function setPostHandler() {
    eraseComments()
    getComments(props.post.id)
    setPost(props.post)
  }
  return (
    <li className={publicationStyles.container}>
      <Link className={publicationStyles.link} to={`/users/${user?.name}/post=${props.post.id}`} onClick={setPostHandler}>
        <h3 className={publicationStyles.title}>{props.post.title}</h3>
        <p className={publicationStyles.text}>{props.post.body}</p>
      </Link>
    </li>
  )
}