import { useEffect } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Post from '../Post/Post'
import postsStyles from './Posts.module.css'
import { slicePostsNumber } from '../../utils/constants'

export default function Posts() {

  const posts = useTypedSelector(state => state.posts.posts)
  const userPosts = useTypedSelector(state => state.posts.userPosts)
  const user = useTypedSelector(state => state.users.currentUser)
  const {setUserPosts, getPosts} = useActions()

  useEffect(() => {
    getPosts(user?.id)
  }, [user])

  useEffect(() => {
    if (posts.length) {
      setUserPosts(posts.slice(0, slicePostsNumber))
    }
  }, [posts])

  function showAllUserPosts() {
    setUserPosts(posts)
  }
  
  return (
    <div className={postsStyles.borderContainer}>
      <div className={postsStyles.container}>
        <h3 className={postsStyles.title}>Посты</h3>
        <ul className={postsStyles.list}>
          {userPosts && userPosts.map((post) => {
            return <Post post={post} key={post.id}/>
          })}
          {posts.length > 3 && userPosts.length === slicePostsNumber ?
            <button 
              className={postsStyles.button} 
              type='button' 
              onClick={showAllUserPosts}
            >Показать все посты</button> : null}
        </ul>
      </div>
    </div>
  )
}