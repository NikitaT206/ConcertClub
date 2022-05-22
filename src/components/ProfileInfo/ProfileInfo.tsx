import { useLocation } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import profileInfoStyles from './ProfileInfo.module.css'

export default function ProfileInfo() {
  const user = useTypedSelector(state => state.users.currentUser)
  const location = useLocation()
  const myProfile = location.pathname === '/profile'
  
  return (
    <div className={profileInfoStyles.container}>

      <div className={profileInfoStyles.borderBottomContainer}>
        <h2 className={profileInfoStyles.name}>{user?.name}</h2>
      </div>

      <div className={profileInfoStyles.borderBottomContainer}>
        <div className={myProfile ? profileInfoStyles.gridContainer : profileInfoStyles.flexContainer}>
          <span className={profileInfoStyles.text}>{user?.address.city}</span>
          <span className={profileInfoStyles.text}>{user?.email}</span>
          <span className={profileInfoStyles.text}>{user?.phone}</span>
          {myProfile ? null : (
            <>
              <button className={profileInfoStyles.button} type='button'>Написать сообщение</button>
              <button className={profileInfoStyles.button} type='button'>Предложить сходить на концерт</button>
            </>
          )}
         
        </div>

        <div className={profileInfoStyles.borderTopContainer}>
          <div className={profileInfoStyles.gridContainer}>
            <span className={profileInfoStyles.text}>{user?.website}</span>
            <span className={profileInfoStyles.text}>{user?.company.name}</span>
            <span className={profileInfoStyles.text}>{user?.company.bs}</span>
          </div>
        </div>
        
        
      </div>

    </div>
  )
}