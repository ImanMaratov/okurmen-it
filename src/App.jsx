import { useState, useEffect } from 'react';
import './App.css';
import './styles/globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import LearningFormat from './sections/LearningFormat/LearningFormat';
import Directions from './sections/Directions/Directions';
import Kids from './sections/Kids/Kids';
import Duration from './sections/Duration/Duration';
import Certificates from './sections/Certificates/Certificates';
import Contacts from './sections/Contacts/Contacts';
import Modal from './components/Modal';
import { useTranslation } from './hooks/useTranslation';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener('openSignupModal', handleOpenModal);
    return () => window.removeEventListener('openSignupModal', handleOpenModal);
  }, []);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <LearningFormat />
        <Directions />
        <Kids />
        <Duration />
        <Certificates />
        <Contacts />
      </main>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;