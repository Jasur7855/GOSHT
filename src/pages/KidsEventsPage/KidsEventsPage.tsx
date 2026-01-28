import { useState, useMemo } from "react";
import { SKidsEventPrograms } from "./KidsEventsPage.style";
import { KidsGallery } from "./KidsGallery";
import { MasterClass } from "./MasterClass";
import { Shows } from "./Shows";
import { FormKidsEvents } from "../../components/Forms/FormKidsEvents/FormKidsEvents";
import { useIsMobile } from "../../hooks/useIsMobile";
import { SliderDesk } from "../../components/widgets/Carousel/SliderDesk";
import { SliderMobile } from "../../components/widgets/Carousel/SliderMobile";
import ColorfulText from "../../components/widgets/ColorFulText/ColorFulText";
import { useGetKidsEventBannersQuery } from "../../store/Api/kidsEventBannerApi";
const KidsEventsPage = () => {
  const [isKidsModalOpen, setIsKidsModalOpen] = useState<boolean>(false);
  const { data: bannersData, isLoading } = useGetKidsEventBannersQuery();
  const isMobile = useIsMobile(975);

  const dataMain = useMemo(() => {
    if (!bannersData) return [];
    
    return bannersData
      .filter((banner) => banner.is_visible)
      .map((banner) => ({
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
    setIsKidsModalOpen(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
