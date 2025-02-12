import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { EventsCardPage } from "./pages/EventsCardPage/EventsCardPage";
import { KidsEventsPage } from "./pages/KidsEventsPage/KidsEventsPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { EventsPage } from "./pages/EventsPage/EventsPage";
import ScrollToTop from "./theme/ScrolToTop";
import { AboutPage } from "./pages/AboutPage/AboutPage";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <MainPage />
      </>
    ),
  },
  {
    path: "/events",
    element: (
      <>
        <ScrollToTop />
        <EventsPage />
      </>
    ),
  },
  {
    path: "/kids-event",
    element: (
      <>
        <ScrollToTop />
        <KidsEventsPage />
      </>
    ),
  },
  {
    path: "/event-card/:id",
    element: (
      <>
        <ScrollToTop />
        <EventsCardPage />
      </>
    ),
  },
  {
    path: "/about-page",
    element: (
      <>
        <ScrollToTop />
        <AboutPage />
      </>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={routerConfig} />;
};

export default App;
