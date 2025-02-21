import { useState } from "react";
import { SKidsEventPrograms } from "./KidsEventsPage.style";
import { KidsGallery } from "./KidsGallery";
import { MasterClass } from "./MasterClass";
import { Shows } from "./Shows";
import { FormKidsEvents } from "../../components/Forms/FormKidsEvents/FormKidsEvents";
import { useIsMobile } from "../../hooks/useIsMobile";
import { SliderDesk } from "../../components/widgets/Carousel/SliderDesk";
import { SliderMobile } from "../../components/widgets/Carousel/SliderMobile";
import ColorfulText from "../../components/widgets/ColorFulText/ColorFulText";
const dataMain = [
  {
    id: 1,
    tagText: "книга про Эвенты",
    title: "Kid's Events",
    description:
      "For all inquiries, please fill out the form below and we’ll be in touch soon. ",
    buttonText: "Inquire Now",
    backgroundImage: "/img/Kids.png",
  },
  {
    id: 2,
    tagText: "BOOK AN EVENT",
    title: "Caesar",
    description:
      "Crisp hearts of Romaine lettuce tossed in robust homemade Caesar dressing, topped with shaved parmesan cheese and egg.",
    buttonText: "Inquire Now",
    backgroundImage: "/img/Main.jpg",
  },
];
const KidsEventsPage = () => {
  const [isKidsModalOpen, setIsKidsModalOpen] = useState<boolean>(false);
  const handleCloseModal = () => {
    setIsKidsModalOpen(false);
  };

  const isMobile = useIsMobile(975);
  return (
    <div>
      {!isMobile && (
        <SliderDesk btnClick={() => setIsKidsModalOpen(true)} data={dataMain} />
      )}
      {isMobile && (
        <SliderMobile
          data={dataMain}
          btnClick={() => setIsKidsModalOpen(true)}
        />
      )}

      <SKidsEventPrograms>
        <h2>
          Gosht <ColorfulText />
        </h2>
        {!isMobile ? (
          <p>
            Birthdays and special occasions made effortless! Whether it's a
            grand birthday bash or an intricate celebration, leave the details
            to us. Fill out the form below and let's transform your vision into
            an unforgettable reality!
          </p>
        ) : (
          <p>Activities inside the Gōsht Restaurant</p>
        )}
        <div className="programsWrapper">
          <MasterClass />
          <Shows />
        </div>
        <KidsGallery />
      </SKidsEventPrograms>
      <FormKidsEvents isOpen={isKidsModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default KidsEventsPage;
