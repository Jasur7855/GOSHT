import { Heading } from "../../components/typography/Heading/Heading";

export const Shows = () => {
  return (
    <div className="shows">
      <div className="image"></div>
      <Heading variant="h4" text="Shows for Kids" />
      <p>
        Welcome to our extraordinary children's celebration, filled with fun
        workshops and activities for unforgettable moments:
      </p>
      <ul className="shows_wrapper">
        <li>
          <Heading text="Postcard Creation:" variant="h6" />
          <p>
            Let kids construct their virtual worlds with colorful blocks, from
            castles to hideaways.
          </p>
        </li>
        <li>
          <Heading text="Unleash the Superhero:" variant="h6" />
          <p>
            Design capes and masks for epic adventures, engaging in
            superhero-themed crafts and activities.
          </p>
        </li>
        <li>
          <Heading text="Magical Mickey Mouse:" variant="h6" />
          <p>
            Create iconic Mickey Mouse ears with Disney-inspired crafts and
            games.
          </p>
        </li>
        <li>
          <Heading text="Glamorous Barbie Fashion:" variant="h6" />
          <p>Design outfits and accessories fit for a fashionista runway.</p>
        </li>
        <li>
          <Heading text="Enchanting Unicorn Adventure:" variant="h6" />
          <p>
            Craft magical unicorn crafts and horns, exploring a realm of wonder.
          </p>
        </li>
        <li>
          <Heading text="Paw Patrol Adventures:" variant="h6" />
          <p>
             Design Paw Patrol badges and partake in thrilling missions and
            activities.
          </p>
        </li>
        <li>
          <Heading text="Hilarious Clown Circus:" variant="h6" />
          <p>
            Create clown costumes and accessories, enjoying entertaining
            performances and laughter-inducing activities.
          </p>
        </li>
      </ul>
    </div>
  );
};
