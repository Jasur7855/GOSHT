import { Header } from "../../components/Header/Header";
import { Heading } from "../../components/typography/Heading/Heading";
import { CarouselItem } from "../../components/widgets/Carousel/CarouselItem";
import { Footer } from "../../components/widgets/Footer/Footer";
import { SKidsEventFormInfo, SKidsEventPrograms } from "./KidsEventsPage.style";
import { KidsGallery } from "./KidsGallery";
import { MasterClass } from "./MasterClass";
import { Shows } from "./Shows";

export const KidsEventsPage = () => {
  return (
    <div>
      <Header />
      <SKidsEventFormInfo>
        <CarouselItem
          buttonText="Inquire Now"
          description="For all inquiries, please fill out the form below and we’ll be in touch soon. "
          tagText="BOOK AN EVENT"
          title="Kids Events"
        />
      </SKidsEventFormInfo>
      <SKidsEventPrograms>
        <Heading text="Gōsht Kids" variant="h2" />
        <p>
          Birthdays and special occasions made effortless! Whether it's a grand
          birthday bash or an intricate celebration, leave the details to us.
          Fill out the form below and let's transform your vision into an
          unforgettable reality!
        </p>
        <div className="programsWrapper">
          <MasterClass />
          <Shows/>
        </div>
        <KidsGallery />
      </SKidsEventPrograms>
      <Footer />
    </div>
  );
};
