import Posts from '../Posts/Posts'
import ProfileInfo from '../ProfileInfo/ProfileInfo'
import Publications from '../Publications/Publications'
import profileStyles from './Profile.module.css'

export default function Profile() {
  return (
    <section className={profileStyles.section}>
      <ProfileInfo/>
      <Posts/>
      <Publications/>
    </section>
  )
}