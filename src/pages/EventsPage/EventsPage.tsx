import { EventsSection } from "../../components/EventsSection/EventsSection";
import { SliderDesk } from "../../components/widgets/Carousel/SliderDesk";
import { useIsMobile } from "../../hooks/useIsMobile";
import { SliderMobile } from "../../components/widgets/Carousel/SliderMobile";
import { useState, useMemo } from "react";
import { FormPrivateEvent } from "../../components/Forms/FormPrivatEvent/FormPrivateEvent";
import { useGetEventBannersQuery } from "../../store/Api/eventBannerApi";

const EventsPage = () => {
  const [isAddPostModalOpen, setIsAddPostModalOpen] = useState<boolean>(false);
  const { data: bannersData, isLoading } = useGetEventBannersQuery();
  const isMobile = useIsMobile(975);

  const dataMain = useMemo(() => {
    if (!bannersData) return [];
    
    return bannersData.map((banner) => ({
      id: banner.id,
      tagText: banner.tag_text,
      title: banner.main_text,
      description: banner.description,
      buttonText: banner.button_enabled ? banner.button_text : "",
      backgroundImage: `https://new.gosht.com${banner.background_image}`,
      buttonLink: banner.button_link,
    }));
  }, [bannersData]);

  const handleCloseModal = () => {
    setIsAddPostModalOpen(false);
  };
  
  const handleOpenModal = () => {
    console.log("true");
    setIsAddPostModalOpen(true);
  };
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {!isMobile && <SliderDesk btnClick={handleOpenModal} data={dataMain} />}
      {isMobile && (
        <SliderMobile
          data={dataMain}
          btnClick={() => setIsAddPostModalOpen(true)}
        />
      )}
      <EventsSection />
      <FormPrivateEvent
        isOpen={isAddPostModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default EventsPage;
