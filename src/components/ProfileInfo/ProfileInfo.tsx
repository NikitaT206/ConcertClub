import profileInfoStyles from './ProfileInfo.module.css'

export default function ProfileInfo() {
  return (
    <div className={profileInfoStyles.container}>

      <div className={profileInfoStyles.borderContainer}>
        <h2 className={profileInfoStyles.name}>Иванов Семен</h2>
      </div>

      <div className={profileInfoStyles.borderContainer}>
        <div className={profileInfoStyles.flexContainer}>
          <p className={profileInfoStyles.text}>Санкт-Петербург</p>
          <p className={profileInfoStyles.text}>ivanov@mail.com</p>
          <p className={profileInfoStyles.text}>+7 (821) 311-21-32</p>
          <button className={profileInfoStyles.button}>Написать сообщение</button>
          <button className={profileInfoStyles.button}>Предложить сходить на концерт</button>
        </div>
      </div>

    </div>
  )
}