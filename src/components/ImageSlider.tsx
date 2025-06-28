import { useState, useEffect, useCallback } from 'react';
import SlideView from './SlideView';
import { slidesData } from '../data/slides';
import { getNextSlideIndex, getPrevSlideIndex } from '../utils/sliderUtils';

  const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = slidesData;
  const totalSlides = slides.length;

  const createSlideHandler = useCallback((direction: 'next' | 'prev' | number) => {
    return () => {
      if (direction === 'next') {
        setCurrentSlide(prev => getNextSlideIndex(prev, totalSlides));
      } else if (direction === 'prev') {
        setCurrentSlide(prev => getPrevSlideIndex(prev, totalSlides));
      } else {
        setCurrentSlide(direction);
      }
    };
  }, [totalSlides]);

  const nextSlide = useCallback(createSlideHandler('next'), [createSlideHandler]);
  const prevSlide = useCallback(createSlideHandler('prev'), [createSlideHandler]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="image-slider">
      <h2>Функціональний слайдер зображень</h2>
      
      <div className="slider-container">
        <button 
          className="nav-button prev-button" 
          onClick={prevSlide}
          aria-label="Попередній слайд"
        >
          &larr;
        </button>
        
        <div className="slide-wrapper">
          {slides[currentSlide] && <SlideView slide={slides[currentSlide]} />}
        </div>
        
        <button 
          className="nav-button next-button" 
          onClick={nextSlide}
          aria-label="Наступний слайд"
        >
          &rarr;
        </button>
      </div>
      
      <div className="slider-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={createSlideHandler(index)}
            aria-label={`Перейти до слайду ${index + 1}`}
            aria-current={index === currentSlide ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;