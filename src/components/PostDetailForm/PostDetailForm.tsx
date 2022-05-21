import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import postDetailFormStyles from './PostDetailForm.module.css'

export default function PostDetailForm() {
  const showCommentForm = useTypedSelector(state => state.comments.showCommentForm)
  const {setShowCommentForm} = useActions()

  return (
    <div className={postDetailFormStyles.formContainer}>
      <form className={showCommentForm ? postDetailFormStyles.form : postDetailFormStyles.formHide}>
        <div className={postDetailFormStyles.inputs}>
          <input className={postDetailFormStyles.input} placeholder='Ваше имя'></input>
          <input className={postDetailFormStyles.input} placeholder='Ваш email'></input>
        </div>
        <textarea className={postDetailFormStyles.textArea} placeholder='Текст комментария'></textarea>
        <button className={postDetailFormStyles.submitButton} type='submit'>Отправить</button>
      </form>
      <button className={postDetailFormStyles.button} onClick={setShowCommentForm}>{!showCommentForm ? 'Оставить комментарий' : 'Скрыть форму'}</button>
    </div>
  )
}