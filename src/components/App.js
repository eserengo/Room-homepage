import NavWithModal from './NavWithModal';
import Attribution from './Attribution';
import Head from './Head';
import About from './About';

const App = () => (
  <main className='container-fluid'>
    <Head children={<NavWithModal />} />
    <About />
    <Attribution />
  </main>
);

export default App;