import { useState } from "react";
import { Heading } from "../typography/Heading/Heading";
import { ActivityItem } from "../Activities/ActivityItem";
import { useGetAllEventsQuery } from "../../store/Api/eventsApi";
import { SEventSection } from "./EventSection.style";
import { API_URL } from "../../config/envConfig";
import { useIsMobile } from "../../hooks/useIsMobile";
import { FormBtn } from "../ui/Button/FormBtn";

export const EventsSection = () => {
  const { data } = useGetAllEventsQuery(null);
  const isMobile = useIsMobile(768);
  const [showAll, setShowAll] = useState(false);

  const visibleEvents = data?.filter((event) => event.is_visible) || [];
  
  // На мобильном показываем только 3 мероприятия, если не нажата кнопка "Show all"
  const displayedEvents = isMobile && !showAll 
    ? visibleEvents.slice(0, 3) 
    : visibleEvents;

  return (
    <div className="adaptive">
      <SEventSection className="container">
        <Heading variant="h2" text="Activities" />
        <p>Activities inside the Gōsht Restaurant</p>
        <div className="eventsWrapper">
          {displayedEvents.length > 0 ? (
            displayedEvents.map((elem, index) => (
              <ActivityItem
                key={elem.id}
                eventTitle={elem.main_title}
                eventSubtitle={elem.main_description}
                eventImg={`${API_URL}${elem.media.path}`}
                isWrap={index % 2 === 0}
                onClick={`/events/${elem.id}`}
              />
            ))
          ) : (
            <p>No events available.</p>
          )}
        </div>
        {isMobile && visibleEvents.length > 3 && !showAll && (
          <div className="knowMoreBtn">
            <FormBtn 
              typeButton="button" 
              text="Know more" 
              variant="outlined"
              onClick={() => setShowAll(true)}
            />
          </div>
        )}
      </SEventSection>
    </div>
  );
};
