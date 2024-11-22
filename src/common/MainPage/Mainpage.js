import React, { useState } from "react";
import "./Mainpage.scss";

const Mainpage = () => {
  const [tableData, setTableData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      alert("Please enter a task");
    } else {
      setTableData([...tableData, { text: inputValue, isChecked: false }]);
      alert("One Todo Added")
      setInputValue("");
    }
  };

  const handleDelete = (index) => {
    const newTableData = [...tableData];
    newTableData.splice(index, 1);
    alert("One Todo Deleted")
    setTableData(newTableData);

  };

  const handleCheck = (index) => {
    const newTableData = [...tableData];
    newTableData[index].isChecked = !newTableData[index].isChecked;
    setTableData(newTableData);
  };

  return (
    <div className="w-50">
      <h1>My Todo List</h1>

      <form onSubmit={handleAddTodo}>
        <label className="w-50">Enter your todo item</label>
        <br />
        <input 
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="m-1 bg-success text-light" type="submit"  >Add todo</button>
        
      </form>
      <span className="font-bold text-4xl mb-5"></span>

      <hr />

      <ul className="w-100 border d-flex flex-column m-2">
        {tableData.map((todo, index) => (
          <li className="d-flex flex-row justify-content-around border m-2 p-2"
            
            style={{
              textDecoration: todo.isChecked ? "line-through" : "none",
            }}
          >
            <div className="d-flex flex-row align-items-center w-50 justify-content-between" >
              <input className="d-flex text-break  align-items-center "
                type="checkbox"
                checked={todo.isChecked}
                onChange={() => handleCheck(index)}
              />
              <span className="ms-2 border w-100  overflow-x-hidden ">{todo.text}</span>
            </div>
            <div>
              <button
                className=" btn bg-danger"
                onClick={() => handleDelete(index) }
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mainpage;
