import { useEffect, useState } from "react";

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
        return fetch('/people.json', {signal})
        .then(res => res.json())
        .then(data => setPeople(data))
        .catch(err => {
            if (err.name === 'AbortError') {
              console.log('Запрос был отменён');
            } else {
              console.error(err);
            }
        });
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
                    <div className="contact-wrapper col-6">
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
                    <div className="contact-location col-6">
                        <label>Адрес:</label>
                        <p>г. Самара, ул. Пушкина, д.22</p>
                        <label>Часы работы:</label>
                        <p>Пн-Пт: 9:00 – 18:00<br/>Сб-Вс: Выходной</p>
                        <label>Телефон:</label>
                        <span>+7 (800) 123-45-67</span>
                        <label>Местоположение:</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactCard;