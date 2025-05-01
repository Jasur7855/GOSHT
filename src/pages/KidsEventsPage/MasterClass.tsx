import { Heading } from "../../components/typography/Heading/Heading";
import { useGetAllMasterclassesQuery } from "../../store/Api/MasterclassesApi";

export const MasterClass = () => {
  const { data } = useGetAllMasterclassesQuery(null);
  console.log(data);

  return (
    <div className="masterClass">
      <div className="image"></div>
      <Heading variant="h4" text="Masterclasses" />
      <p>
        Welcome to our extraordinary children's celebration, filled with fun
        workshops and activities for unforgettable moments:
      </p>
      <div className="plans_wrapper">
        {data?.map((elem) => (
          <div className="plan">{elem.title}</div>
        ))}
      </div>
      <div className="plan">Cookie Painting</div>
      <div className="plan red">Cookie Painting</div>
    </div>
  );
};
