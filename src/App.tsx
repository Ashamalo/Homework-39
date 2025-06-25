import ImageSlider from './components/ImageSlider';
import ClassSlider from './components/ClassSlider';

function App() {
  return (
    <div className="app">
      <header>
        <h1>Слайдери зображень</h1>
        <p>Без анімацій, з підписами до фото, які реалізовані на stateful та stateless компонентах. Додатково ркалізовано слайдер на основі класових компонентів</p>
      </header>
      
      <main>
        <div className="slider-group">
          <ImageSlider />
        </div>
        
        <div className="slider-group">
          <ClassSlider />
        </div>
      </main>
      
      <footer>
        <div className="comparison">
          <h3>Порівняння підходів:</h3>
          <ul>
            <li><strong>Функціональний компонент</strong> - використовує хуки</li>
            <li><strong>Класовий компонент</strong> - використовує методи життєвого циклу</li>
            <li><strong>SlideView</strong> - безстановий компонент для відображення</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;