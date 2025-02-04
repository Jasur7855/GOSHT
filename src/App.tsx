import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { EventsPage } from "./pages/EventsPage/EventsPage";
import { EventsCardPage } from "./pages/EventsCardPage/EventsCardPage";
import { FormPrivateEvent } from "./components/Forms/FormPrivatEvent/FormPrivateEvent";
import { KidsEventsPage } from "./pages/KidsEventsPage/KidsEventsPage";
import { FormBooking } from "./components/Forms/FormBooking/FormBooking";
import { FormKidsEvents } from "./components/Forms/FormKidsEvents/FormKidsEvents";

const App = () => {
  const routerConfig = createBrowserRouter([
    {
      path: "/",
      element: <EventsPage />,
    },
    {
      path: "/event-card/:id",
      element: <EventsCardPage/>,
    },
    {
      path: "/form-booking",
      element: <FormBooking/>,
    },
    {
      path: "/form-event",
      element: <FormPrivateEvent/>,
    },
    {
      path: "/form-kids",
      element: <FormKidsEvents/>,
    },
    {
      path: "/kids-event",
      element: <KidsEventsPage/>,
    },
    
  ]);
  return <RouterProvider router={routerConfig} />;
};

export default App;
