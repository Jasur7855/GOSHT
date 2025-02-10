import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { EventsCardPage } from "./pages/EventsCardPage/EventsCardPage";
import { KidsEventsPage } from "./pages/KidsEventsPage/KidsEventsPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { EventsPage } from "./pages/EventsPage/EventsPage";

const App = () => {
  const routerConfig = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/events",
      element: <EventsPage />,
    },
    {
      path: "/kids-event",
      element: <KidsEventsPage />,
    },
    {
      path: "/event-card/:id",
      element: <EventsCardPage />,
    },
  ]);
  return <RouterProvider router={routerConfig} />;
};

export default App;
