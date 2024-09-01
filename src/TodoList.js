import React, { useState } from 'react';

const TodoList = () => {
  const [activity, setActivity] = useState('');
  const [listData, setListData] = useState([]);

  const addActivity = () => {
    // Previous way commented out for reference
    // setListData([...listData, activity]);

    // Corrected version:
    setListData((prevListData) => {
      const updatedList = [...prevListData, activity];
      console.log(updatedList);
      setActivity(''); // Clear the input field after adding the activity
      return updatedList;
    });
  };

  const removeActivity = (i) => {
    const updatedList = listData.filter((_, id) => id !== i); // Changed comparison to `!==`
    setListData(updatedList);
  };

  const removeAll = () => {
    setListData([]);
  };

  return (
    <>
      <div className="container">
        <div className="header">Todo List</div>
        <input
          type="text"
          placeholder="Input Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}>Add</button>
        <p className="List-heading">Here is your List:</p>

        {listData.length !== 0 && listData.map((data, i) => {
          return (
            <div key={i} className="listItem">
              <p className="listData">{data}</p>
              <div className="btn-position">
                <button onClick={() => removeActivity(i)}>Remove(-)</button>
              </div>
            </div>
          );
        })}

        {listData.length >= 1 && <button onClick={removeAll}>Remove All</button>}
      </div>
    </>
  );
};

export default TodoList;
