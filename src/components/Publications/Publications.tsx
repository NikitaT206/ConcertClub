import { useEffect } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Publication from '../Publication/Publication'
import publicationsStyles from './Publications.module.css'

export default function Publications() {

  const posts = useTypedSelector(state => state.posts.posts)
  const userPublications = useTypedSelector(state => state.posts.userPublications)
  const {setUserPublications} = useActions()

  useEffect(() => {
    if (posts) {
      setUserPublications(posts)
    }
  }, [posts])

  return (
    <div className={publicationsStyles.container}>
      <h3 className={publicationsStyles.title}>Публикации</h3>
      <ul className={publicationsStyles.list}>
        {userPublications.map((post) => {
          return <Publication post={post} key={post.id}/>
        })}
      </ul>
    </div>
  )
}