import { useEffect, useRef, useState } from 'react';
import {slideImage} from './data';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const StartWidget = () => {
    const [image, setImage] = useState([]);
    const [currentIndex, setIndex] = useState(0);
    const wrapper = useRef(null);


    useEffect(()=> {
        setImage(slideImage);
        checkVisible();
        translateSlide(currentIndex);

        const interval = setInterval(()=> {
            nextSlide();
        }, 7000)

        return () => {
            clearInterval(interval)
        }

    }, [image, currentIndex])

    const SliderImage = ({ src, type, alt }) => {
        return (<img src={src} className='card-carousel-image' data-index={type} alt={alt}/>)
    }

    //проверка по индексу слайда и в завимости от этого видим ли конкретный слайд или нет
    function checkVisible() {
        const sliderComponent = document.querySelectorAll('.card-carousel-image');
        sliderComponent.forEach((item, ind) => {
            item.classList.remove('visible', 'unvisible');
            if(ind === currentIndex) {  
                item.classList.add('visible')
            }
            else{item.classList.add('unvisible')}
        })
    }
    
    function motionSlide(event) {
        const {type} = event.target.dataset;
        if (type === 'prev') {
            prevSlide();
        }
        else if (type === 'next') {
            nextSlide();
        }
    }

    function nextSlide() {
        (currentIndex >= image.length - 1) ? setIndex(0) : setIndex(count => count + 1);
    }
    
    function prevSlide() {
        (currentIndex <= 0) ? setIndex(image.length - 1) : setIndex(count => count - 1);
    }

    function translateSlide(scale) {
        wrapper.current ? wrapper.current.style.transform = `translateX(-${scale * 100}%)`: null;
    }
    
    return (
        <div className="card">
            <div className="card-carousel">
                <div className="card-carousel-wrapper" ref={wrapper}>
                    {image.map((item, ind) => {
                        return (
                            <SliderImage key={ind} src={item.src} type={ind} alt={item.description}/>
                    )})}
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">Анонс событий</h2>
                <p className="card-text">Добро пожаловать на сайт по демонстрации надвигающихся мероприятий в городе Самара! Организуйте дальнейший план по посещению выставок, концертов, театров, чтобы в вашей жизни появилась активность.</p>
                <button className="btn btn-continue">Продолжить</button>
                <div className="card-btn-bar">
                    <button className='btn prev' data-type = 'prev' onClick={(e) => motionSlide(e)}><FaArrowLeft /></button>
                    <button className='btn next' data-type = 'next' onClick={(e) => motionSlide(e)}><FaArrowRight /></button>
                </div>
            </div>
        </div>
    )
}

export default StartWidget;