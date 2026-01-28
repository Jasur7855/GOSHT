import { useMemo } from "react";
import { Heading } from "../../components/typography/Heading/Heading";
import { FormBtn } from "../../components/ui/Button/FormBtn";
import { useIsMobile } from "../../hooks/useIsMobile";
import { SLocation } from "./Location.style";
import { Map } from "./Map";
import "leaflet/dist/leaflet.css";
import { useGetHoursLocationBannersQuery } from "../../store/Api/hoursLocationBannerApi";
import { useGetHoursLocationInfoQuery } from "../../store/Api/hoursLocationInfoApi";
import { useGetHoursLocationMapQuery } from "../../store/Api/hoursLocationMapApi";

const LocationPage = () => {
  const mobile = useIsMobile();
  const { data: bannersData, isLoading: isBannersLoading } = useGetHoursLocationBannersQuery();
  const { data: infoData, isLoading: isInfoLoading } = useGetHoursLocationInfoQuery();
  const { data: mapData, isLoading: isMapLoading } = useGetHoursLocationMapQuery();

  const bannerData = useMemo(() => {
    if (!bannersData || bannersData.length === 0) return null;
    const visibleBanners = bannersData.filter((banner) => banner.is_visible !== false);
    return visibleBanners[0] || null;
  }, [bannersData]);

  const infoBlocks = useMemo(() => {
    if (!infoData) return [];
    return infoData.filter((info) => info.is_visible !== false);
  }, [infoData]);

  if (isBannersLoading || isInfoLoading || isMapLoading) {
    return <div>Loading...</div>;
  }

  return (
    <SLocation>
      {mobile ? (
        <section>
          <div 
            className="hours" 
            style={bannerData?.background_image ? { backgroundImage: `url(https://new.gosht.com${bannerData.background_image})` } : {}}
          ></div>
          <div className="mobHours">
            <Heading text={bannerData?.main_text || "Gōsht Restaurant"} variant="h1" />
            <p>
              {bannerData?.description || "For all inquiries, please fill out the form below and we'll be in touch soon."}
            </p>
            
              <FormBtn 
                text={"Get directions"} 
                typeButton="button" 
                variant="fill" 
              />
          
             
          </div>
        </section>
      ) : (
        <section 
          className="hours"
          style={bannerData?.background_image ? { backgroundImage: `url(https://new.gosht.com${bannerData.background_image})` } : {}}
        >
          <div>
            <Heading text={bannerData?.main_text || "Gōsht Restaurant"} variant="h1" />
            <p>
              {bannerData?.description || "For all inquiries, please fill out the form below and we'll be in touch soon."}
            </p>
            <FormBtn 
                text={"Get directions"} 
                typeButton="button" 
                variant="fill" 
              />
            
          </div>
        </section>
      )}
      <section className="menuInfo">
        <div className="bgImg">
          <img src="/img/burger4.png" className="burger" />
          {infoBlocks.map((info, index) => (
            <div key={info.id || info.type} className={info.type === "second" ? "center" : ""}>
              <h6>
                <img src="/icons/starWhite.svg" alt="" />
                {info.title}
              </h6>
              <p>{info.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="location">
        <Heading text={mapData?.title || "We are on the map"} variant="h2" />
        <span>{mapData?.description || "We're waiting for everyone!"}</span>
        <div className="wrapper">
          <Map />
        </div>
      </section>
    </SLocation>
  );
};

export default LocationPage;
