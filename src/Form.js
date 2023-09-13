import { useState } from "react";
import { useTranslation } from "./TranslateContext";

const Form = ({ list, setList, setInit }) => {
    const { translate } = useTranslation();

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
        placeholder={`${translate('enterTask')}`}
      />
      <button onClick={handleSubmit} type="submit">
        {translate('submit')}
      </button>
    </form>
  );
};

export default Form;
