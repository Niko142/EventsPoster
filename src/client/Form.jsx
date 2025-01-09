import {useForm} from 'react-hook-form';
import { data } from 'react-router-dom';

const FeedbackForm = () => {
    const { register, handleSubmit, formState: {errors}, reset } = useForm({mode: 'onChange'});

    const onSubmit = ( data ) => {
        const res = JSON.stringify(data);
        console.log(res);
        
        // function FetchData(req) {
        //     fetch('', {
        //         method: 'POST',
        //         body: '',
        //         headers: {'Content-type': 'application/json; charset=UTF-8'}
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
                required: 'Поле должно быть заполнено',
                minLength: {value: 3, message: 'Имя не должно содержать менее 3 символов'},
                maxLength: {value: 45, message: 'Имя не должно содержать более 45 символов'},
            })} type="text" className="contact-feedback-input contact-feedback-name form-control" id='username'/>

            {errors.name?.message && ((<span className='contact-feedback-error'>{errors.name?.message}</span>))}

            <label htmlFor="email" className='mt-3'>Email <span id='symbols'>*</span></label>
            <input {...register('email', {
                
                required: 'Поле должно быть заполнено',
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Некорректный формат email'
                },
                maxLength: {value: 45, message: 'Email должен содержать не более 45 символов'}
            })} type='email' className="contact-feedback-input contact-feedback-email form-control" id='email'/>
            
            {errors.email?.message && (<span className='contact-feedback-error'>{errors.email?.message}</span>)}

            <label htmlFor="phone" className='mt-3'>Номер <span id='symbols'>*</span></label>
            <input {...register('phone', {
                required: 'Номер должен быть заполнен',
                pattern: {
                    value: /\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}/i,
                    message: 'Формат заполнения номера неверный',
                },
                
            })} type='tel' placeholder='+7(___)___-__-__' className="contact-feedback-input contact-feedback-phone form-control" id='phone'/>
            
            {errors.phone?.message && (<span className='contact-feedback-error'>{errors.phone?.message}</span>)}
            
            <label htmlFor="description" className='mt-3'>Сообщение <span id='symbols'>*</span></label>
            <textarea {...register('letter', {
                required: 'Пустое поле',
                maxLength: {value: 250, message: 'Размер сообщения превышает допустимое'}
            })} className="contact-feedback-area form-control" id='description'></textarea>

            {errors.letter?.message && (<span className='contact-feedback-error'>{errors.letter?.message}</span>)}

            <button type='submit' className="contact-feedback-btn btn btn-primary d-block mt-5">Отправить</button>
        </form>
    )
}

export default FeedbackForm;