import { Heading } from "../../components/typography/Heading/Heading";

export const MasterClass = () => {
  return (
    <div className="masterClass">
      <div className="image"></div>
      <Heading variant="h4" text="Masterclasses" />
      <p>
        Welcome to our extraordinary children's celebration, filled with fun
        workshops and activities for unforgettable moments:
      </p>
      <div className="plans_wrapper">
        <div className="plan">Postcard Creation</div>
        <div className="plan">Box and Pencil Case Painting</div>
        <div className="plan">Branded Aprons</div>
        <div className="plan">Cotton Wool Creations</div>
        <div className="plan">Exclusive Mugs</div>
        <div className="plan">Ring Holders</div>
        <div className="plan">Stylish T-Shirts</div>
        <div className="plan">Cozy Pillows</div>
        <div className="plan">Magical Candles</div>
        <div className="plan">Lucky Stone Amulets</div>
        <div className="plan">Canvas Art</div>
        <div className="plan">Giant Coloring</div>
        <div className="plan">Lantern Design</div>
        <div className="plan">Gosht Kids Puzzle</div>
      </div>
      <div className="plan">Cookie Painting</div>
      <div className="plan red">Cookie Painting</div>
    </div>
  );
};
