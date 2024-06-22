import React from "react";
import "./table.styles.scss";

interface TableProps {
  columns: any[];
  key?: any;
}

export const TableComponet: React.FC<TableProps> = ({ columns, key }) => {
  return (
    <div className="rootCustomTooltip">
      <div className="containerTitle">
        <h2>Custom Tooltip</h2>
      </div>
      <div className="containerTable">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">City</th>
              <th className="lastThTitle" scope="col">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {columns &&
              columns?.length > 0 &&
              columns.map((item, index) => (
                <tr className="trTable" key={key || index}>
                  <th scope="row">{item?.id}</th>
                  <th scope="row">
                    {item?.name}
                    <span>{item?.name}</span>
                  </th>
                  <th scope="row">
                    {item?.city}

                    <span>{item?.city}</span>
                  </th>
                  <th scope="row">
                    {item.email}
                    <span>{item?.email}</span>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
