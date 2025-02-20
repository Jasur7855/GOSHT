
import { EventsSection } from "../../components/EventsSection/EventsSection";
import { SliderDesk } from "../../components/widgets/Carousel/SliderDesk";
import { useIsMobile } from "../../hooks/useIsMobile";
import { SliderMobile } from "../../components/widgets/Carousel/SliderMobile";
import { useState } from "react";
import { FormPrivateEvent } from "../../components/Forms/FormPrivatEvent/FormPrivateEvent";
const dataMain = [
  
  {
    id: 1,
    tagText: "книга про Эвенты",
    title: "Private Events",
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
export const EventsPage = () => {
  const [isAddPostModalOpen, setIsAddPostModalOpen] = useState<boolean>(false);

  const handleCloseModal = () => {
    setIsAddPostModalOpen(false);
  };
  const  handleOpenModal=()=>{
    console.log("true");
    
    setIsAddPostModalOpen(true)
  }
  const isMobile = useIsMobile(975);
  return (
    <div>

      {!isMobile && <SliderDesk btnClick={handleOpenModal} data={dataMain} 
      sliderForm={<FormPrivateEvent
        isOpen={isAddPostModalOpen}
        onClose={handleCloseModal}
      />}
      />}
      {isMobile && <SliderMobile data={dataMain}  btnClick={()=>setIsAddPostModalOpen(true)}/>}

      <EventsSection />
    </div>
  );
};
