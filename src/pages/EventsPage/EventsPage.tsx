
import { Carousel } from "../../components/widgets/Carousel/Carousel";
import { Footer } from "../../components/widgets/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { EventsSection } from "../../components/EventsSection/EventsSection";
import { DropdownMenu } from "../../components/ui/DropDown/DropDown";

export const EventsPage = () => {
  return (
    <div>
      <Header/>
      
      <Carousel />
      <DropdownMenu/>
      <EventsSection/>
      <Footer />
    </div>
  );
};
