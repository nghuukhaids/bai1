import { useEffect, useState } from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

const TodoList = ({ list, setList }) => {
  const [date, setDate] = useState("");
  const handleChangeState = (e) => {
    console.log(typeof e.target.id);
    const mission = list.find((item) => String(item.id) == String(e.target.id));
    console.log(mission);
    if (mission !== undefined && mission !== null && mission.state === false) {
      let newObject = Object.assign(mission, { ...mission, state: true });
      const newList = Object.assign([...list], newObject);
      setList(newList);
    } else if(mission !== undefined && mission !== null && mission.state === true) {
      let newObject = Object.assign(mission, { ...mission, state: false });
      const newList = Object.assign([...list], newObject);
      setList(newList);
    }
  };

  const countDay1 = () => {
    let date1 = new Date().getDate();
    setDate(date1);
  };

  useEffect(() => {
    countDay1();
  });
  return (
    <div style={{overflowY:"scroll"}} className="todo-list-container">
      {list.map((e, index) => {
        return (
          <div key={index}>
            {e.state ? (
              <div className="todo-item-container done">
                <FaRegCheckCircle
                  id={e.id}
                  onClick={handleChangeState}
                  color="#9a9a9a"
                  className="item-done-button"
                />
                <div style={{ marginRight: "150px" }} className="item-title">
                  {e.title}
                </div>
                <p>Deadline còn {Number(e.expireIN) - Number(date)} ngày</p>
              </div>
            ) : (
              <div className="todo-item-container">
                <FaRegCircle
                  id={e.id}
                  onClick={handleChangeState}
                  className="item-done-button"
                  color="#9a9a9a"
                />
                <div style={{ marginRight: "150px" }} className="item-title">
                  {e.title}
                </div>
                <p>Deadline còn {Number(e.expireIN) - Number(date)} ngày</p>
              </div>
            )}
          </div>
        );
      })}

      {/* <div className="todo-item-container">
        <FaRegCircle className="item-done-button" color="#9a9a9a" />
        <div className="item-title">Do excercises</div>
      </div>
      <div className="todo-item-container">
        <FaRegCircle className="item-done-button" color="#9a9a9a" />
        <div className="item-title">Go shopping</div>
      </div>
      <div className="todo-item-container done">
        <FaRegCheckCircle color="#9a9a9a" className="item-done-button" />
        <div className="item-title">House cleaning</div>
      </div> */}
    </div>
  );
};

export default TodoList;
