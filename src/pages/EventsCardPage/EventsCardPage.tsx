import { Link, useParams } from "react-router-dom";
import { EventCardItem } from "../../components/EventCardItem/EventCardItem";
import { SEventsCard } from "./EventsCardPage.style";
import { API_URL } from "../../config/envConfig";
import {
  useGetAllEventsQuery,
  useGetEventByIdQuery,
} from "../../store/Api/eventsApi";
import { Heading } from "../../components/typography/Heading/Heading";
import { Button } from "../../components/ui/Button/Button";
import { IoIosArrowBack } from "react-icons/io";
import { FormBooking } from "../../components/Forms/FormBooking/FormBooking";
import { useState } from "react";
import { FormBtn } from "../../components/ui/Button/FormBtn";

const EventsCardPage = () => {
  const [isFormBookingOpenModal, setIsFormBookingOpenModal] =
    useState<boolean>(false);
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
  
  const visibleEvents = eventsData?.filter((event) => event.is_visible) || [];
  
  const handleCloseModal = () => {
    setIsFormBookingOpenModal(false);
  };
  return (
    <div>
      <SEventsCard $mainBg={`${API_URL}${eventInfo.media.path}` || ""}>
        <aside className="leftSide">
          <Heading text="Events" variant="h6" />
          {isEventsLoading && <p>Loading events...</p>}
          {isEventsError && <p>Error loading events</p>}
          {visibleEvents.length > 0 ? (
            visibleEvents.map((e, i) => (
              <EventCardItem
                key={i}
                itemBg={`${API_URL}${e.media.path}`}
                itemTitle={e.main_title}
              />
            ))
          ) : (
            <p>No events available</p>
          )}
        </aside>
        <div className="Main">
          <div className="breadcrumb">
            <IoIosArrowBack />
            <Link to="/events">
              <span>Main / Events / {eventInfo.main_title}</span>
            </Link>
          </div>
          <Heading text={eventInfo.main_title} variant="h4" />
          <div className="mainImg"></div>
          <div className="btnWrapper">
            <Button
              btnLink="#"
              typeButton="button"
              variant="fill"
              text={eventInfo.date}
            />
            <Button
              btnLink="#"
              typeButton="button"
              variant="fill"
              text={eventInfo.time}
            />
          </div>
          <div className="eventDateTime">
            <Heading variant="h5" text={eventInfo.main_title} />
            <p>{eventInfo.paragraph}</p>
          </div>
          <Heading text={eventInfo.motivation} variant="h5" />
          <div className="bookingWrapper">
            <div className="btnWrapper">
              <FormBtn
                typeButton="button"
                text="Booking"
                variant="fill"
                onClick={() => setIsFormBookingOpenModal(true)}
              />
              <Button
                btnLink="#"
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
      {isFormBookingOpenModal && (
        <FormBooking
          isOpen={isFormBookingOpenModal}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default EventsCardPage;
