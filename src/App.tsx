import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EventsCardPage } from "./pages/EventsCardPage/EventsCardPage";
import { KidsEventsPage } from "./pages/KidsEventsPage/KidsEventsPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { EventsPage } from "./pages/EventsPage/EventsPage";
import ScrollToTop from "./theme/ScrolToTop";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/widgets/Footer/Footer";
import { MenuPage } from "./pages/MenuPage/MenuPage";
import { LocationPage } from "./pages/LocationPage/LocationPage";
import { CareerPage } from "./pages/CareerPage/CareerPage";
import { CareerMorePage } from "./pages/CareerPage/CareerMorePage";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/kids-event" element={<KidsEventsPage />} />
        <Route path="/event-card/:id" element={<EventsCardPage />} />
        <Route path="/about-page" element={<AboutPage />} />
        <Route path="/location-page" element={<LocationPage />} />
        <Route path="/menu-page/:id" element={<MenuPage />} />
        <Route path="/career-page" element={<CareerPage />} />
        <Route path="/career-more-page" element={<CareerMorePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
