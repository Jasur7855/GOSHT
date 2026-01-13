import { Heading } from "../typography/Heading/Heading";
import { ActivityItem } from "../Activities/ActivityItem";
import { useGetAllEventsQuery } from "../../store/Api/eventsApi";
import { SEventSection } from "./EventSection.style";
import { API_URL } from "../../config/envConfig";

export const EventsSection = () => {
  const { data } = useGetAllEventsQuery(null);

  const visibleEvents = data?.filter((event) => event.is_visible) || [];

  return (
    <SEventSection className="container">
      <Heading variant="h2" text="Activities" />
      <p>Activities inside the Gōsht Restaurant</p>
      <div className="eventsWrapper">
        {visibleEvents.length > 0 ? (
          visibleEvents.map((elem, index) => (
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
    </SEventSection>
  );
};
