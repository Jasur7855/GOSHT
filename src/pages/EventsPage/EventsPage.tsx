import { Footer } from "../../components/widgets/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { EventsSection } from "../../components/EventsSection/EventsSection";
import { SliderDesk } from "../../components/widgets/Carousel/SliderDesk";
const data = [
  {
    tagText: "BOOK AN EVENT",
    title: "Caesar",
    description:
      "Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg.",
    buttonText: "Inquire Now",
    backgroundImage:"/public/img/Kids.png"
  },
  {
    tagText: "книга про Эвенты",
    title: "Private Events",
    description:
      "For all inquiries, please fill out the form below and we’ll be in touch soon. ",
    buttonText: "Inquire Now",
    backgroundImage:"/public/img/IronMan 55.png"
  },
];
export const EventsPage = () => {
  return (
    <div>
      <Header />

      <SliderDesk  data={data}/>

      <EventsSection />
      <Footer />
    </div>
  );
};
