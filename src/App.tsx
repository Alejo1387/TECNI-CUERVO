import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
