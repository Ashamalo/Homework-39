import { useState, useEffect } from 'react';
import SlideView from './SlideView';

interface Slide {
  id: number;
  imageUrl: string;
  caption: string;
}

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides: Slide[] = [
    {
      id: 1,
      imageUrl: "/images/image1.jpg",
      caption: "Красивий пейзаж зі скелею і човном у морі"
    },
    {
      id: 2,
      imageUrl: "/images/image2.jpg",
      caption: "Квітучі маки у полі"
    },
    {
      id: 3,
      imageUrl: "/images/image3.jpg",
      caption: "Захід сонця на морському узбережжі"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="image-slider">
      <h2>Функціональний слайдер зображень</h2>
      
      <div className="slider-container">
        <button 
          className="nav-button prev-button" 
          onClick={prevSlide}
        >
          &larr;
        </button>
        
        <div className="slide-wrapper">
          <SlideView slide={slides[currentSlide]} />
        </div>
        
        <button 
          className="nav-button next-button" 
          onClick={nextSlide}
        >
          &rarr;
        </button>
      </div>
      
      <div className="slider-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;