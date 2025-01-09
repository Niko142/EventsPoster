import { useEffect, useState } from "react";
import YandexMap from "./YandexMap";
import FeedbackForm from "./Form";

const ContactCard = () => {
    const [people, setPeople] = useState([]);
    
    useEffect(()=> {
        const abortController = new AbortController();
        const signal = abortController.signal;
        FetchData(signal);
        
        return () => {
            abortController.abort();
        }
    }, [])

    //запрос к JSON
    async function FetchData(signal) {
        try {
            const res = await fetch('/people.json', { signal });
            const data = await res.json();
            return setPeople(data);
        } catch (err) {
            if (err.name === 'AbortError') {
                console.log('Запрос был отменён');
            } else {
                console.error(err);
            }
        }
    }
    const PersonBlock = ({ name, surname, employee, phone, email, tg }) => {
        return (
            <div className="contact-person">
                <h4 className="contact-person contact-person-initials mb-0">{`${name} ${surname}`}</h4>
                <i className="contact-person contact-person-employee">{employee}</i>
                <p className="contact-person contact-person-phone mb-1">Номер: <span>{phone}</span></p>
                <p className="contact-person contact-person-email mb-1">Почта: <u>{email}</u></p>
                <p className="contact-person contact-person-network mb-0">Телеграм: <a href="#">{tg}</a></p>
            </div>
        )
    }

    return (
        <>
            <div className="contact container-fluid">
                <h2>Контакты</h2>
                <div className="row">
                    <div className="contact-wrapper col-sm-12 col-md-4 col-lg-3 mb-4">
                    {people.map((item, ind) => {
                        return (
                        <PersonBlock
                            key={ind}
                            name={item.name}
                            surname={item.surname}
                            employee={item.employee}
                            phone={item.phone}
                            email={item.networks?.email}
                            tg={item.networks?.telegram}
                        />)
                    })}
                    </div>
                    <div className="contact-location col-sm-12 col-md-8 col-lg-5 mb-4">
                        <div className="row">
                            <div className="col-6">
                                <label>Адрес:</label>
                                <p className="contact-location-adress">г. Самара, ул. Пушкина, д.223</p>
                            </div>
                            <div className="col-6">
                                <label>Часы работы:</label>
                                <p className="contact-location-timejob">Пн-Пт: 9:00 – 18:00<br/>Сб-Вс: Выходной</p>
                            </div>
                        <label>Телефон:</label>
                        <span className="contact-location-phone">+7 (800) 123-45-67</span>
                        
                        <label>Расположение:</label>
                        <YandexMap/>
                        </div>
                    </div>
                    <div className="contact-feedback col-md-12 col-lg-4 mb-4">
                        <FeedbackForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactCard;