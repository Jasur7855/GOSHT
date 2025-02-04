import { Heading } from "../../typography/Heading/Heading";
import { Button } from "../../ui/Button/Button";
import { LabelInput } from "../../ui/LabelInput/LabelInput";
import { SFormBooking } from "./FormBooking.style";

interface IFormBookingProps {}

export const FormBooking = ({}: IFormBookingProps) => {
  return (
    <SFormBooking>
      <div className="image">
        <img src="/img/bookingIMG.png" alt="" />
      </div>
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
          <Button btnLink="#"  typeButton="submit" text="Send" variant="fill"/>

        </form>
      </div>
    </SFormBooking>
  );
};
