import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import postDetailFormStyles from './PostDetailForm.module.css'
import { Field, InjectedFormProps, reduxForm, } from 'redux-form'
import { LeaveComment } from '../../types/comments'

export default function PostDetailForm(props: InjectedFormProps<LeaveComment>) {
  const showCommentForm = useTypedSelector(state => state.comments.showCommentForm)
  const {setShowCommentForm} = useActions()    

  return (
    <div className={postDetailFormStyles.formContainer}>
      <form 
        onSubmit={props.handleSubmit} 
        className={showCommentForm ? postDetailFormStyles.form : postDetailFormStyles.formHide} 
        name='commentForm'
      >

        <div className={postDetailFormStyles.inputs}>
          <Field 
            name='name' 
            component={'input'} 
            className={postDetailFormStyles.input} 
            placeholder='Ваше имя' 
            type={'text'}
            required 
            min={2}
            max={20}
          />
          <Field 
            name='email' 
            component={'input'} 
            className={postDetailFormStyles.input} 
            placeholder='Ваш email'
            type={'email'}
            required
            min={2}
            max={30}
          />
        </div>
        <Field 
          name='body' 
          component={'textarea'} 
          className={postDetailFormStyles.textArea} 
          placeholder='Текст комментария'
          type={'text'}
          required
          min={2}
        />
        <button className={postDetailFormStyles.submitButton} type='submit'>Отправить</button>
      </form>

      <button 
        className={postDetailFormStyles.button} 
        onClick={setShowCommentForm}
      >
        {!showCommentForm ? 'Оставить комментарий' : 'Скрыть форму'}
      </button>

    </div>
  )
}

export const PostDetailReduxForm = reduxForm<LeaveComment>({form: 'comment'})(PostDetailForm)
