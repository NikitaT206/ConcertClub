import Publication from '../Publication/Publication'
import publicationsStyles from './Publications.module.css'

const arr = [...new Array(6)]

export default function Publications() {
  return (
    <div className={publicationsStyles.container}>
      <h3 className={publicationsStyles.title}>Публикации</h3>
      <ul className={publicationsStyles.list}>
        {arr.map((item, index) => {
          return <Publication key={index}/>
        })}
      </ul>
    </div>
  )
}