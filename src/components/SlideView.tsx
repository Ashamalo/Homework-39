import type { ReactNode } from 'react';
import type { Slide } from '../commonTypes/slide';

interface SlideViewProps {
  slide: Slide;
}

const SlideView = ({ slide }: SlideViewProps): ReactNode => {
  return (
    <div className="slide">
      <img 
        src={slide.imageUrl} 
        alt={slide.caption} 
        className="slide-image"
      />
      <div className="slide-caption">
        <p>{slide.caption}</p>
      </div>
    </div>
  );
};

export default SlideView;