const colors = ["red", "yellow", "green", "blue"];
const text = "Kids";

const ColorfulText = () => {
  return (
    <div style={{ fontWeight: "bold" }}>
      {text.split("").map((letter, index) => (
        <span key={index} style={{ color: colors[index], fontWeight: 500 }}>
          {letter}
        </span>
      ))}
    </div>
  );
};

export default ColorfulText;
