import { useState } from "react";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const AboutBlock = () => {

    const AboutCard = ({ title }) => {
        return (
            <div className="about-card">
                <h3 className="about-card-header">{title}</h3>

                <button className="about-card-btn btn btn-info unshow"><IoMdArrowDown color='white' size={25}/></button>
            </div>
        )
    }

    function showInfo(event) {

    }

    return (
        <>
        <div className="about mx-4">
            <AboutCard title={'О нас:'}/>
            <AboutCard title={'Как пользоваться сайтом:'}/>
            <AboutCard title={''}/>
            <AboutCard title={'Часто задаваемые вопросы (FAQ):'}/>
        </div>
         {/* 
            О нас
            Краткая информация о том, кто вы, миссия сайта, цели и для кого предназначен ресурс.

            Как пользоваться сайтом
            Инструкции по навигации, поиск мероприятий, фильтры, и как бронировать билеты (если применимо).

            Часто задаваемые вопросы (FAQ)
            Ответы на популярные вопросы пользователей, например:

            Как найти ближайшие события?
            Как купить билеты?
            Как связаться с организаторами?
            Полезные ссылки

            Ссылки на социальные сети.
            Партнерские организации или площадки мероприятий.
            Политика конфиденциальности
            Детали о том, как обрабатываются данные пользователей.

            Контакты для сотрудничества
            Информация для организаторов мероприятий и рекламодателей, желающих добавить свои события.

            Отзывы и предложения
            Раздел для сбора обратной связи от посетителей сайта.
            */}
        </>
    )
}

export default AboutBlock;