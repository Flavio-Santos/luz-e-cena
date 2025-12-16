import Banner from './components/Banner';
import Header from './components/Header';
import MovieSection from './components/MovieSection';

function App() {
  return (
    <>
      <Header />
      <Banner src='./public/Banner_Desktop.png' alt='Banner'></Banner>
      <MovieSection />
    </>
  );
}

export default App;
