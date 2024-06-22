import React from "react";
import "./table.styles.scss";

interface TableProps {
  columns: any[];
  key?: any;
  rows: any[];
}

export const TableComponet: React.FC<TableProps> = ({ columns, key, rows }) => {
  return (
    <div className="rootCustomTooltip">
      <div className="containerTitle">
        <h2>Custom Tooltip</h2>
      </div>
      <div className="containerTable">
        <table className="table">
          <thead>
            <tr>
              {rows &&
                rows.length > 0 &&
                rows.map((row, index) => (
                  <th scope="col" className={`${row?.title}_${index}`}>
                    {row?.title}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            <tr className="trTable">
              {columns &&
                columns?.length > 0 &&
                columns.map(
                  (item, index) =>
                    ""
                    // * aquí *
                )}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
