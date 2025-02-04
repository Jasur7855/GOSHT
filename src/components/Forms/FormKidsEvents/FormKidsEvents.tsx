import { Heading } from "../../typography/Heading/Heading";
import { LabelInput } from "../../ui/LabelInput/LabelInput";
import { SFormKidsEvent } from "./FormKidsEvents.style";

interface IFormKidsEventsProps {}

export const FormKidsEvents = ({}: IFormKidsEventsProps) => {
  return (
    <SFormKidsEvent>
      <Heading
        text="Fill in the form and we will contact you about Kids event"
        variant="h4"
      />
      <form action="">
        <div className="formFlex">
          <LabelInput labelText="First Name" isError={false} placeholder="First Name"/>
          <LabelInput labelText="Phone Number" isError={false} placeholder="Phone Number"/>
        </div>
        <LabelInput labelText="Phone Number" isError={false} placeholder="example@gmail.com"/>
        <div className="formFlex">
          <LabelInput labelText="Event Date" isError={false} placeholder="DD/MM/YYYY"/>
          <LabelInput labelText="Number of People" isError={false} placeholder="0"/>
        </div>
      </form>
    </SFormKidsEvent>
  );
};
