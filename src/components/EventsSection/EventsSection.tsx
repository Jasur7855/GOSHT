import { Heading } from "../typography/Heading/Heading";
import { ActivityItem } from "../Activities/ActivityItem";
import { useGetAllEventsQuery } from "../../store/Api/eventsApi";
import { SEventSection } from "./EventSection.style";
import { API_URL } from "../../config/envConfig";

export const EventsSection = () => {
  const { data } = useGetAllEventsQuery(null);

  return (
    <SEventSection className="container">
      <Heading variant="h2" text="Activities" />
      <p>Activities inside the Gōsht Restaurant</p>
      <div className="eventsWrapper">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((elem, index) => (
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
