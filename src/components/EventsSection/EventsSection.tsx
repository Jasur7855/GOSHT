import "./EventsSection.scss"
import { Heading } from "../typography/Heading/Heading";
import { ActivityItem } from "../Activities/ActivityItem";
import { useNavigate } from "react-router-dom";
import { useGetAllEventsQuery } from "../../store/Api/eventsApi";

export const EventsSection = () => {
  const navigate= useNavigate()
  const {data}= useGetAllEventsQuery(null)
  return (
    <section className="eventsSection">
        <Heading variant={"h2"} text={"Activities"} />
        <p>Activities inside the Gōsht Restaurant</p>
        <div className="eventsWrapper">
          
          {data?.length && data.map((elem,index)=>(
            <ActivityItem 
            eventTitle={elem.event_title} 
            key={elem.id} 
            isWrap={index % 2 === 0 ||index===0}
            eventSubtitle={elem.event_subtitle}
            eventImg={elem.img}
            onClick={()=>navigate(`/event-card/${elem.id}`)}
          />
          ))}
        </div>
    </section>
  );
};