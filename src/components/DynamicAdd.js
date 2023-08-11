import { FormField, TextInput } from "grommet";
import React from "react";
import { useState } from "react";

const DynamicAdd = () => {
  const [data, setData] = useState([
    { type: "", stream: "", passed_out_year: "", percentage: "" },
  ]);

  const handleClick = () => {
    setData([...data,{ type: "", stream: "", passed_out_year: "", percentage: "" }])
  };

  const handleChange = (e,i) => {
    const {name,value}=e.target
    const onChangeVal=[...data]
    onChangeVal[i][name]=value
    setData(onChangeVal)
  };

  const handleDelete = (i) => {
    const deleteval=[...data]
    deleteval.splice(i,1)
    setData(deleteval)
  };

  return (
    <div>
      {data.map((val, i) => (
        <div className="flexing">
          <FormField label="Type" required>
            <TextInput
              placeholder="Type"
              name="type"
              value={val.type}
              onChange={(e) => handleChange(e, i)}
            />
          </FormField>
          <FormField label="Stream" required>
            <TextInput
              placeholder="Stream"
              name="stream"
              value={val.stream}
              onChange={(e) => handleChange(e, i)}
            />
          </FormField>
          <FormField label="Passed out Year" required>
            <TextInput
              placeholder="Passed out Year"
              name="passed_out_year"
              value={val.passed_out_year}
              onChange={(e) => handleChange(e, i)}
            />
          </FormField>
          <FormField label="Percentage" required>
            <TextInput
              placeholder="Percentage"
              name="percentage"
              value={val.percentage}
              onChange={(e) => handleChange(e, i)}
            />
          </FormField>
          
          <button onClick={(i) => handleDelete(i)}>Delete</button>
        </div>
      ))}
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default DynamicAdd;
