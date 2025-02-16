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
import { MainMenu } from "./pages/MenuPage/MainMenu";
import { LocationPage } from "./pages/LocationPage/LocationPage";

const categories = [
  {
    id: 0,
    name: "salad",
    description:
      "Served with roasted garlic and cherry tomatoes Certified Halal meat from local butchers",
  },
  {
    id: 1,
    name: "steaks",
    description:
      "Served with roasted garlic and cherry tomatoes Certified Halal meat from local butchers",
  },
  {
    id: 2,
    name: "soups",
    description:
      "Served with roasted garlic and cherry tomatoes Certified Halal meat from local butchers",
  },
];

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
        <Route path="/menu-page/:id" element={<MenuPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
