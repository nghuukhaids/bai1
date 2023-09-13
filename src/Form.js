import { useState } from "react";

const Form = ({ list, setList, setInit }) => {
  const [formValue, setFormValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if(formValue === ""){
      alert("Please enter task")
      return
    }
    setList([
      ...list,
      {
        id: list.length + 1,
        title: formValue,
        state: false,
        createAt: new Date().getDate(),
        expireIN: new Date().getDate() + 3
      }
    ]);
    console.log(list);
    setInit(list);
    localStorage.setItem(
      "task",
      JSON.stringify([
        ...list,
        {
          id: list.length + 1,
          title: formValue,
          state: false
        }
      ])
    );
    setFormValue("");
  };
  const handleChange = (e) => {
    setFormValue(e.target.value);
    console.log(formValue);
  };
  return (
    <form className="form">
      <input
        value={formValue}
        onChange={handleChange}
        placeholder="Enter task ..."
      />
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
