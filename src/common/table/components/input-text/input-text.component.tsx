import React from "react";
import "./input-text.styles.scss";

interface PropsInput {
  lbl: string;
  Styles?: string;
  handleChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  inputValue?: any;
  type: React.HTMLInputTypeAttribute | undefined;
  name: string;
}

export const CustomInputText: React.FC<PropsInput> = ({
  lbl,
  Styles,
  inputValue,
  handleChange,
  type,
  name,
}) => {
  return (
    <div className={`table_x02_rootCustomInputText ${Styles}`}>
      <div className="table_x02_containerInput">
        <input
          autoFocus
          type={type}
          id={name}
          className="table_x02_inputText"
          name={name}
          value={inputValue}
          onChange={handleChange}
        />
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
