import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { EventsCardPage } from "./pages/EventsCardPage/EventsCardPage";
import { KidsEventsPage } from "./pages/KidsEventsPage/KidsEventsPage";
import { FormBooking } from "./components/Forms/FormBooking/FormBooking";
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
    {
      path: "/form-booking",
      element: <FormBooking />,
    },
    
  ]);
  return <RouterProvider router={routerConfig} />;
};

export default App;
