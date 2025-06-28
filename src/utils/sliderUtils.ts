export const getNextSlideIndex = (currentIndex: number, totalSlides: number): number => {
    return currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
  };

  export const getPrevSlideIndex = (currentIndex: number, totalSlides: number): number => {
    return currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
  };
 
  export const getIndicatorSlideIndex = (
    newIndex: number, 
    currentIndex: number, 
    totalSlides: number
  ): number => {
    return newIndex;
  };