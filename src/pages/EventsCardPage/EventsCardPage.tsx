import { useParams } from "react-router-dom";
import { EventCardItem } from "../../components/EventCardItem/EventCardItem";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/widgets/Footer/Footer";
import { SEventsCard } from "./EventsCardPage.style";
import {
  useGetAllEventsQuery,
  useGetEventByIdQuery,
} from "../../store/Api/eventsApi";


export const EventsCardPage = () => {
  const { id } = useParams();
  console.log(id);

  const { data: eventsData, isLoading, isError } = useGetAllEventsQuery(null);
  const {data:event}=useGetEventByIdQuery(id as string)
  console.log(event);
  
  console.log(eventsData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading events</div>;
  }

  if (!eventsData) {
    return <div>No events found</div>;
  }

  return (
    <div>
      <Header />
      <SEventsCard $mainBg="{data.img}">
        <aside className="leftSide">
          {eventsData.map((e, i) => (
            <EventCardItem key={i} itemBg={e.img} itemTitle={e.event_title} />
          ))}
        </aside>
        {/* <div className="Main">
          <div className="breadcrumb">
            <IoIosArrowBack />
            Main / Events / Tales of Ladying & Cat Noir
          </div>
          <Heading text={data.event_title} variant="h4" />
          <div className="mainImg"></div>
          <div className="btnWrapper">
            <Button typeButton="button" variant="fill" text={data.date} />
            <Button typeButton="button" variant="fill" text={data.time} />
          </div>
          <div className="eventDateTime">
            <Heading variant="h5" text={data.event_subtitle} />
            <p>
              Join us for an extraordinary adventure tailored for our young
              fans. Children will embark on a journey as junior adventurers,
              immersing themselves in thrilling activities inspired by Unicorns,
              discovering the wonder and magic of a captivating enchanted realm.
            </p>
            <p>
              Experience the joy of a hands-on Caesar Salad-making masterclass
              for the little ones, guided by our expert chef. Plus, enjoy the
              creative activity of painting ceramic figures. To top it off,
              there will be a fun-filled program by the best animators in NYC!
            </p>
            <p className="last">
              While children delight in the festivities, parents can unwind and
              indulge in an array of international and local cuisines
              meticulously crafted by our talented chefs.
            </p>
          </div>
          <Heading
            text="Don't let this opportunity slip away! Come and create cherished memories filled with joy, creativity, and laughter at Gōsht Kids Playground, the premier family destination in NYC!"
            variant="h5"
          />
          <div className="bookingWrapper">
            <div className="btnWrapper">
              <Button typeButton="button" text="Booking" variant="fill" />
              <Button
                typeButton="button"
                text=" Workshop Cost:"
                childText=" $25 per child."
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
        </div> */}
      </SEventsCard>
      <Footer />
    </div>
  );
};
