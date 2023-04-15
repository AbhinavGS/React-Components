import "./Options.css";

interface OptionsProps {
  data: string[];
  selected: string[];
  setSelected: any;
}

const Options = ({ data, selected, setSelected }: OptionsProps) => {
  const handleChange = (e: any): void => {
    const { checked, value } = e.target;
    if (checked) {
      setSelected((prev: string[]) => [...prev, value]);
    }
    if (!checked) {
      setSelected((prev: string[]) =>
        selected.filter((item) => item !== value)
      );
    }
  };

  //   console.log(selected);

  const items = data.map((item) => (
    <div key={item} className="options-bg">
      <input
        type="checkbox"
        name="checkbox"
        onChange={handleChange}
        value={item}
        checked={selected.includes(item)}
      />
      <label htmlFor="checkbox">{item}</label>
      <br />
    </div>
  ));
  return <>{items}</>;
};

export default Options;
