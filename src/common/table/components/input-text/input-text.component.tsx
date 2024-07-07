import React from "react";
import "./input-text.styles.scss";
import { ValuesFilter } from "@/pods";

interface PropsInput {
  lbl: string;
  Styles?: string;
  handleChange?:
    | React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>
    | undefined;
  inputValue?: any;
  type: React.HTMLInputTypeAttribute | undefined;
  name: string;
  valuesFilter?: ValuesFilter[] | [];
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
            autoFocus
            onChange={handleChange}
            id={name}
            className="table_x02_inputText"
            name={name}
          >
            {valuesFilter &&
              valuesFilter?.length &&
              valuesFilter.map((item: ValuesFilter) => (
                <option key={item?.value} value={item?.value}>
                  {item?.text}
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
