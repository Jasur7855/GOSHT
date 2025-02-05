import { MdOutlineClear } from "react-icons/md";
import { Heading } from "../../typography/Heading/Heading";
import { Button } from "../../ui/Button/Button";
import { LabelInput } from "../../ui/LabelInput/LabelInput";
import { SFormBooking } from "./FormBooking.style";
import { Link } from "react-router-dom";

interface IFormBookingProps {}

export const FormBooking = ({}: IFormBookingProps) => {
  return (
    <SFormBooking>
      <Link to="/event-card/:id">
        <MdOutlineClear className="exit" />
      </Link>
      <div className="image"></div>
      <div className="form">
        <Heading
          variant="h4"
          text="Fill in the form and we
          will contact you about Kids event"
        />
        <form action="">
          <LabelInput labelText="First Name" isError />
          <LabelInput labelText="Email" isError />
          <LabelInput labelText="Phone Number" isError />
          <LabelInput labelText="Number of People" isError />
          <Button btnLink="#" typeButton="submit" text="Send" variant="fill" />
        </form>
      </div>
    </SFormBooking>
  );
};
