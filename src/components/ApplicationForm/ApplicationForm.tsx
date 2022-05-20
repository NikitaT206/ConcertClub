import applicationFormStyles from './ApplicationForm.module.css'

export default function ApplicationForm() {
  return (
    <div className={applicationFormStyles.container}>
      <form className={applicationFormStyles.form}>
        <label className={applicationFormStyles.label} htmlFor='textArea'>Оставить заявку на проведение концерта</label>
        <textarea className={applicationFormStyles.textArea} id='textArea' placeholder='Расскажите о вашем предложении'></textarea>
        <button className={applicationFormStyles.button} type='submit'>Отправить</button>
      </form>
    </div>
  )
}