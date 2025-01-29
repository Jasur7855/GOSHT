import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { EventsPage } from "./pages/EventsPage/EventsPage";
import { EventsCardPage } from "./pages/EventsCardPage/EventsCardPage";
import { FormPrivateEvent } from "./components/FormPrivatEvent/FormPrivateEvent";
import { KidsEventsPage } from "./pages/KidsEventsPage/KidsEventsPage";

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
      path: "/event-form",
      element: <FormPrivateEvent/>,
    },
    {
      path: "/kids-event",
      element: <KidsEventsPage/>,
    },
  ]);
  return <RouterProvider router={routerConfig} />;
};

export default App;
