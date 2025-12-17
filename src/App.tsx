import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import MovieSection from './components/MovieSection';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <>
      <Header />
      <Banner src='./public/Banner_Desktop.png' alt='Banner'></Banner>
      <MovieSection />
      <Banner src='./public/Banner_combo_desktop.png' alt='Banner Desktop'></Banner>
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
