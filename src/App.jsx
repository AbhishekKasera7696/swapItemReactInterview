import "./styles.css";
import { useState } from "react";

export default function App() {
  const [list1, setList1] = useState(["input1", "input2"]);
  const [list2, setList2] = useState(["input3", "input4"]);

  function handleChange(index) {
    // if (fromList1) {
    //   const itemToMove = list1[index];
    //   setList1(list1.filter((_, i) => i !== index));
    //   setList2([...list2, itemToMove]);
    // } else {
    //   const itemToMove = list2[index];
    //   setList2(list2.filter((_, i) => i !== index));
    //   setList1([...list1, itemToMove]);
    // }

    const newList1 = [...list1];
    const newList2 = [...list2];

    //perform swap;
    const temp = newList1[index];
    newList1[index] = newList2[index];
    newList2[index] = temp;

    //update both list with swapped item;
    setList1(newList1);
    setList2(newList2);
  }

  return (
    <div className="App">
      <h1>List1</h1>
      <div>
        {list1.map((item, index) => {
          return (
            <div>
              <input type="checkbox" onChange={() => handleChange(index)} />
              {item}
            </div>
          );
        })}
      </div>
      <h1>List2</h1>
      <div>
        {list2.map((item, index) => {
          return (
            <div>
              <input type="checkbox" onChange={() => handleChange(index)} />
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
