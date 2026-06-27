import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
// We will create these pages next
import Home from './pages/Home';
import About from './pages/About';
import ServicesList from './pages/ServicesList';
import ServiceDetail from './pages/ServiceDetail';
import Doctors from './pages/Doctors';
import Blog from './pages/Blog';
import BookingModal from './components/BookingModal'; // We'll add this
import Chatbot from './components/Chatbot';
import { LanguageProvider } from './lib/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<ServicesList />} />
            <Route path="services/:id" element={<ServiceDetail />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="blog" element={<Blog />} />
          </Route>
        </Routes>
        <BookingModal />
        <Chatbot />
      </BrowserRouter>
    </LanguageProvider>
  );
}
