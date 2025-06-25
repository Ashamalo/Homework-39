import { Component } from 'react';
import SlideView from './SlideView';

interface Slide {
  id: number;
  imageUrl: string;
  caption: string;
}

interface State {
  currentSlide: number;
}

class ClassSlider extends Component<{}, State> {
  intervalId?: number;
  
  state: State = {
    currentSlide: 0
  };
  
  slides: Slide[] = [
    {
      id: 1,
      imageUrl: import.meta.env.BASE_URL + "/images/nature1.jpg",
      caption: "Хмарочоси на узбережжі"
    },
    {
      id: 2,
      imageUrl: import.meta.env.BASE_URL + "/images/nature2.jpg",
      caption: "Рідкісний вид орла"
    },
    {
      id: 3,
      imageUrl: import.meta.env.BASE_URL + "/images/nature3.jpg",
      caption: "Скелясте узбережжя з неспокійною водою"
    }
  ];

  componentDidMount() {
    this.intervalId = window.setInterval(() => {
      this.setState(prev => ({
        currentSlide: prev.currentSlide === this.slides.length - 1 
          ? 0 
          : prev.currentSlide + 1
      }));
    }, 5000);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide = () => {
    this.setState(prev => ({
      currentSlide: prev.currentSlide === this.slides.length - 1 
        ? 0 
        : prev.currentSlide + 1
    }));
  };

  prevSlide = () => {
    this.setState(prev => ({
      currentSlide: prev.currentSlide === 0 
        ? this.slides.length - 1 
        : prev.currentSlide - 1
    }));
  };

  render() {
    const { currentSlide } = this.state;
    
    return (
      <div className="image-slider">
        <h2>Класовий слайдер зображень</h2>
        
        <div className="slider-container">
          <button 
            className="nav-button prev-button" 
            onClick={this.prevSlide}
          >
            &larr;
          </button>
          
          <div className="slide-wrapper">
            <SlideView slide={this.slides[currentSlide]} />
          </div>
          
          <button 
            className="nav-button next-button" 
            onClick={this.nextSlide}
          >
            &rarr;
          </button>
        </div>
        
        <div className="slider-indicators">
          {this.slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => this.setState({ currentSlide: index })}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ClassSlider;