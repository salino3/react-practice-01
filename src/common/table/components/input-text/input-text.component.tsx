import React from "react";
import "./input-text.styles.scss";

interface PropsInput {
  lbl: string;
  Styles?: string;
  handleChange?:
    | React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>
    | undefined;
  inputValue?: any;
  type: React.HTMLInputTypeAttribute | undefined;
  name: string;
  valuesFilter?: string[] | [];
}

export const CustomInputText: React.FC<PropsInput> = ({
  lbl,
  Styles,
  inputValue,
  handleChange,
  type,
  name,
  valuesFilter,
}) => {
  return (
    <div className={`table_x02_rootCustomInputText ${Styles}`}>
      <div className="table_x02_containerInput">
        {type == "select" ? (
          <select
            value={inputValue}
            onChange={handleChange}
            id={name}
            className="table_x02_inputText"
            name={name}
          >
            {valuesFilter &&
              valuesFilter?.length &&
              valuesFilter.map((item: string, index: number) => (
                <option key={index} value={item}>
                  {item == "prefer_not_say" ? "prefer not say" : item}
                </option>
              ))}
          </select>
        ) : (
          <input
            autoFocus
            type={type}
            id={name}
            className="table_x02_inputText"
            name={name}
            value={inputValue}
            onChange={handleChange}
          />
        )}
        <label
          htmlFor={name}
          className={`table_x02_inputLabel ${
            inputValue ? "table_x02_shrink" : ""
          }`}
        >
          {lbl}
        </label>
      </div>
    </div>
  );
};
