import Post from '../Post/Post'
import postsStyles from './Posts.module.css'

const arr = [...new Array(5)]

export default function Posts() {
  return (
    <div className={postsStyles.borderContainer}>
      <div className={postsStyles.container}>
        <h3 className={postsStyles.title}>Посты</h3>
        <ul className={postsStyles.list}>
          {arr.map((item, index) => {
            return <Post key={index}/>
          })}
        </ul>
      </div>
    </div>
  )
}