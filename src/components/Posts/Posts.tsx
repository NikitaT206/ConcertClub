import { useEffect } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Post from '../Post/Post'
import postsStyles from './Posts.module.css'

export default function Posts() {

  const posts = useTypedSelector(state => state.posts.posts)
  const user = useTypedSelector(state => state.users.user)
  const filteredPosts = posts.filter(post => post.userId === user?.id)
  const {setUserPosts} = useActions()
  const userPosts = useTypedSelector(state => state.posts.userPosts)

  useEffect(() => {
    setUserPosts(filteredPosts.slice(0, 3))
  }, [])

  function showAllUserPosts() {
    setUserPosts(filteredPosts)
  }
  
  return (
    <div className={postsStyles.borderContainer}>
      <div className={postsStyles.container}>
        <h3 className={postsStyles.title}>Посты</h3>
        <ul className={postsStyles.list}>
          {userPosts && userPosts.map((post) => {
            return <Post post={post} key={post.id}/>
          })}
          {userPosts.length <= 3 && <button className={postsStyles.button} type='button' onClick={showAllUserPosts}>Показать все посты</button>}
        </ul>
      </div>
    </div>
  )
}