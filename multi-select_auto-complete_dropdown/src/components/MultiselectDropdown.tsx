import Options from "./Options";
import "./MultiselectDropdown.css";
import { useState, useEffect } from "react";

const DATA: string[] = [
  "first",
  "firstOne",
  "second",
  "secondOne",
  "third",
  "thirdOne",
];

const MultiselectDropdown = () => {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const [search, setSearch] = useState("");
  const [data, setData] = useState(DATA);
  const [selected, setSelected] = useState([]);
  const [selectedItem, setSelectedItems] = useState([]);

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    setIsDropdownOpened(true);
  };

  useEffect(() => {
    setData(
      DATA.filter((item) => {
        return item.toLocaleLowerCase().includes(search.toLocaleLowerCase());
      })
    );
  }, [search]);

  return (
    <div className="container">
      <div className="selected-items">{`selected: ${selectedItem.join(
        ", "
      )}`}</div>
      <input
        type="text"
        size={50}
        value={search}
        onChange={handleSearch}
        onFocus={handleSubmit}
        placeholder="type here"
      />
      <button
        onClick={() => {
          setIsDropdownOpened(false);
          setSelectedItems(selected);
        }}
      >
        OK
      </button>
      <div className="options-div">
        {isDropdownOpened && (
          <Options data={data} selected={selected} setSelected={setSelected} />
        )}
      </div>
    </div>
  );
};

export default MultiselectDropdown;
