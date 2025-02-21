import { Heading } from "../typography/Heading/Heading";
import { ActivityItem } from "../Activities/ActivityItem";
import { useGetAllEventsQuery } from "../../store/Api/eventsApi";
import { SEventSection } from "./EventSection.style";

export const EventsSection = () => {
  const { data } = useGetAllEventsQuery(null);

  return (
    <SEventSection>
      <Heading variant="h2" text="Activities" />
      <p>Activities inside the Gōsht Restaurant</p>
      <div className="eventsWrapper">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((elem, index) => (
            <ActivityItem
              key={elem.id}
              eventTitle={elem.event_title}
              eventSubtitle={elem.event_subtitle}
              eventImg={elem.img}
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
