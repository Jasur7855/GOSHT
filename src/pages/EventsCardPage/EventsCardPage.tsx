import { useParams } from "react-router-dom";
import { EventCardItem } from "../../components/EventCardItem/EventCardItem";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/widgets/Footer/Footer";
import { SEventsCard } from "./EventsCardPage.style";
import {
  useGetAllEventsQuery,
  useGetEventByIdQuery,
} from "../../store/Api/eventsApi";
import { Heading } from "../../components/typography/Heading/Heading";
import { Button } from "../../components/ui/Button/Button";
import { IoIosArrowBack } from "react-icons/io";

export const EventsCardPage = () => {
  const { id } = useParams();
  const {
    data: eventInfo,
    isLoading,
    isError,
  } = useGetEventByIdQuery(id as string);
  const {
    data: eventsData,
    isLoading: isEventsLoading,
    isError: isEventsError,
  } = useGetAllEventsQuery(null);

  if (isLoading) return <div>Loading event...</div>;
  if (isError) return <div>Error loading event</div>;
  if (!eventInfo) return <div>No event found</div>;

  return (
    <div>
      <Header />
      <SEventsCard $mainBg={eventInfo.img || ""}>
        <aside className="leftSide">
          <Heading text="Events" variant="h6" />
          {isEventsLoading && <p>Loading events...</p>}
          {isEventsError && <p>Error loading events</p>}
          {Array.isArray(eventsData) && eventsData.length > 0 ? (
            eventsData.map((e, i) => (
              <EventCardItem key={i} itemBg={e.img} itemTitle={e.event_title} />
            ))
          ) : (
            <p>No events available</p>
          )}
        </aside>
        <div className="Main">
          <div className="breadcrumb">
            <IoIosArrowBack />
            <span>Main / Events / {eventInfo.event_title}</span>
          </div>
          <Heading text={eventInfo.event_title} variant="h4" />
          <div className="mainImg"></div>
          <div className="btnWrapper">
            <Button typeButton="button" variant="fill" text={eventInfo.date} />
            <Button typeButton="button" variant="fill" text={eventInfo.time} />
          </div>
          <div className="eventDateTime">
            <Heading variant="h5" text={eventInfo.title} />
            <p>{eventInfo.paragraph}</p>
            
          </div>
          <Heading
            text={eventInfo.motivation}
            variant="h5"
          />
          <div className="bookingWrapper">
            <div className="btnWrapper">
              <Button typeButton="button" text="Booking" variant="fill" />
              <Button
                typeButton="button"
                text="Workshop Cost:"
                childText={eventInfo.cost}
                variant="outlined"
              />
            </div>
            <Heading
              text="For reservations or further inquiries, please call:"
              variant="h5"
              childText="+1 718 504-8880"
            />
            <Heading variant="h5" text="Best regards," />
            <Heading variant="h5" text="The Gōsht Family ❤️" />
          </div>
        </div>
      </SEventsCard>
      <Footer />
    </div>
  );
};


// "paragraph": "Join us for an extraordinary adventure tailored for our young fans. Children will embark on a journey as junior adventurers, immersing themselves in thrilling activities inspired by Unicorns, discovering the wonder and magic of a captivating enchanted realm.Experience the joy of a hands-on Caesar Salad-making masterclass for the little ones, guided by our expert chef. Plus, enjoy the creative activity of painting ceramic figures. To top it off, there will be a fun-filled program by the best animators in NYC!While children delight in the festivities, parents can unwind and indulge in an array of international and local cuisines meticulously crafted by our talented chefs.",


