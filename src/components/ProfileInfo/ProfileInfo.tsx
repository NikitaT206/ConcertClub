import { useTypedSelector } from '../../hooks/useTypedSelector'
import profileInfoStyles from './ProfileInfo.module.css'

export default function ProfileInfo() {
  const user = useTypedSelector(state => state.users.user)
  
  return (
    <div className={profileInfoStyles.container}>

      <div className={profileInfoStyles.borderContainer}>
        <h2 className={profileInfoStyles.name}>{user?.name}</h2>
      </div>

      <div className={profileInfoStyles.borderContainer}>
        <div className={profileInfoStyles.flexContainer}>
          <p className={profileInfoStyles.text}>{user?.address.city}</p>
          <p className={profileInfoStyles.text}>{user?.email}</p>
          <p className={profileInfoStyles.text}>{user?.phone}</p>
          <button className={profileInfoStyles.button}>Написать сообщение</button>
          <button className={profileInfoStyles.button}>Предложить сходить на концерт</button>
        </div>
      </div>

    </div>
  )
}