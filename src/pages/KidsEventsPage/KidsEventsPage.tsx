import { useState } from "react";
import { Header } from "../../components/Header/Header";
import { Heading } from "../../components/typography/Heading/Heading";
import { CarouselItem } from "../../components/widgets/Carousel/CarouselItem";
import { Footer } from "../../components/widgets/Footer/Footer";
import { SKidsEventFormInfo, SKidsEventPrograms } from "./KidsEventsPage.style";
import { KidsGallery } from "./KidsGallery";
import { MasterClass } from "./MasterClass";
import { Shows } from "./Shows";
import { FormKidsEvents } from "../../components/Forms/FormKidsEvents/FormKidsEvents";
import { useIsMobile } from "../../hooks/useIsMobile";
import { SliderDesk } from "../../components/widgets/Carousel/SliderDesk";
import { SliderMobile } from "../../components/widgets/Carousel/SliderMobile";
const dataMain = [
  {
    id: 1,
    tagText: "книга про Эвенты",
    title: "Kid's Events",
    description:
      "For all inquiries, please fill out the form below and we’ll be in touch soon. ",
    buttonText: "Inquire Now",
    backgroundImage: "/public/img/Kids.png",
  },
  {
    id: 2,
    tagText: "BOOK AN EVENT",
    title: "Caesar",
    description:
      "Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg.",
    buttonText: "Inquire Now",
    backgroundImage: "/public/img/Main.jpg",
  },
];
export const KidsEventsPage = () => {
  const [isKidsModalOpen, setIsKidsModalOpen] = useState<boolean>(false);
  const handleCloseModal = () => {
    setIsKidsModalOpen(false);
  };

  const isMobile = useIsMobile(975);
  return (
    <div>
      <Header />
      {!isMobile && (
        <SliderDesk
        btnClick={()=>setIsKidsModalOpen(true)}
          sliderForm={
            <FormKidsEvents
              isOpen={isKidsModalOpen}
              onClose={handleCloseModal}
              
            />
          }
          data={dataMain}
        />
      )}
      {isMobile && <SliderMobile data={dataMain}  btnClick={()=>setIsKidsModalOpen(true)} />}

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
          <Shows />
        </div>
        <KidsGallery />
      </SKidsEventPrograms>
      <Footer />
    </div>
  );
};
