import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import ScrollToTop from "./theme/ScrolToTop";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/widgets/Footer/Footer";
import { lazy, Suspense } from "react";
import { FormFeedback } from "./components/Forms/FormFeedback/FormFeedback";
import { Layout } from "./Layout/Layout";

const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const EventsPage = lazy(() => import("./pages/EventsPage/EventsPage"));
const EventsCardPage = lazy(
  () => import("./pages/EventsCardPage/EventsCardPage")
);
const KidsEventsPage = lazy(
  () => import("./pages/KidsEventsPage/KidsEventsPage")
);
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const LocationPage = lazy(() => import("./pages/LocationPage/LocationPage"));
const CareerPage = lazy(() => import("./pages/CareerPage/CareerPage"));
const MenuPage = lazy(() => import("./pages/MenuPage/MenuPage"));
const CareerMorePage = lazy(() =>
  import("./pages/CareerPage/CareerMorePage").then((module) => ({
    default: module.CareerMorePage,
  }))
);

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* 1) Отдельный маршрут без Header/Footer */}
          <Route path="/review-page" element={<FormFeedback />} />

          {/* 2) Все остальные страницы — внутри Layout */}
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="events">
              <Route index element={<EventsPage />} />
              <Route path=":id" element={<EventsCardPage />} />
            </Route>
            <Route path="kids-event" element={<KidsEventsPage />} />
            <Route path="about-page" element={<AboutPage />} />
            <Route path="location-page" element={<LocationPage />} />
            <Route path="menu-page/:id" element={<MenuPage />} />
            <Route path="career-page" element={<CareerPage />} />
            <Route path="career-more-page" element={<CareerMorePage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
