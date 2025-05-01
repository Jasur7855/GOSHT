import { Heading } from "../../components/typography/Heading/Heading";
import { useGetAllShowsApiQuery } from "../../store/Api/ShowsApi";

export const Shows = () => {
  const { data } = useGetAllShowsApiQuery(null);

  return (
    <div className="shows">
      <div className="image"></div>
      <Heading variant="h4" text="Shows for Kids" />
      <p>
        Welcome to our extraordinary children's celebration, filled with fun
        workshops and activities for unforgettable moments:
      </p>
      <ul className="shows_wrapper">
        {data?.map((elem) => (
          <li>
            <Heading text={elem.title} variant="h6" />
            <p>{elem.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
