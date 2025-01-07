import {useForm} from 'react-hook-form';

const FeedbackForm = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // function FetchData() {
        //     fetch('', {
        //         method: 'POST'
        //     })
        //     .then(res => JSON.stringify(res))
        //     .catch(err => err)
            
        // }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h4 className='mb-1 mt-2'>Форма обратной связи</h4>
            <p className="contact-feedback-symbol">Символ <span id='symbols'>*</span> указывает на обязательное заполнение поля</p>
            <label htmlFor="username">Имя <span id='symbols'>*</span></label>
            <input {...register('name', {
                required: true,
                minLength: 3,
                maxLength: 45
            })} type="text" className="contact-feedback-input contact-feedback-name form-control mb-3" id='username'/>
            
            {errors.name && errors.name.type === 'required' && (<span className='contact-feedback-error'>Поле не заполнено</span>)}
            {errors.name && errors.name.type === 'minLength' && (<span className='contact-feedback-error'>Имя должно содержать не менее 3 символов</span>)}
            {errors.name && errors.name.type === 'maxLength' && (<span className='contact-feedback-error'>Имя должно содержать не более 45 символов</span>)}

            <label htmlFor="email">Email <span id='symbols'>*</span></label>
            <input {...register('email', {
                required: true,
                pattern: /^\S+@\S+$/i,
                maxLength: 45
            })} type='text' className="contact-feedback-input contact-feedback-email form-control mb-3" id='email'/>
            
            {errors.email && errors.email.type === 'required' && (<span className='contact-feedback-error'>Поле не заполнено</span>)}
            {errors.email && errors.email.type === 'pattern' && (<span className='contact-feedback-error'>Неверный формат заполнения email</span>)}
            {errors.email && errors.email.type === 'maxLength' && (<span className='contact-feedback-error'>Email содержит более 45 символов</span>)}

            <label htmlFor="phone">Номер <span id='symbols'>*</span></label>
            <input {...register('phone', {
                required: true,
                pattern: /\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}/i,
            })} type='tel' placeholder='+7(___)___-__-__' className="contact-feedback-input contact-feedback-phone form-control mb-3" id='phone'/>
            
            {errors.phone && errors.phone.type === 'required' && (<span className='contact-feedback-error'>Поле не заполнено</span>)}
            {errors.phone && errors.phone.type === 'pattern' && (<span className='contact-feedback-error'>Формат номера неверный</span>)}

            <label htmlFor="description">Сообщение <span id='symbols'>*</span></label>
            <textarea {...register('message')} name="description" className="contact-feedback-area form-control mb-3" id='description'></textarea>

            <button type='submit' className="contact-feedback-btn btn btn-primary d-block">Отправить</button>
        </form>
    )
}

export default FeedbackForm;