import React from "react";
import "./table.styles.scss";

interface TableProps {
  columns: any[];
  key?: any;
  row: any[];
}

export const TableComponet: React.FC<TableProps> = ({ columns, key, row }) => {
  console.log("Rowxxs:", row);

  const keysToFilter = row.map((row) => row.key);

  // Filtrar 'columns' para obtener solo los objetos que coincidan con 'keysToFilter'
  const filteredColumns = columns.map((column) => {
    const filteredColumn: any = {};
    keysToFilter.forEach((key) => {
      if (column.hasOwnProperty(key)) {
        filteredColumn[key] = column[key];
      }
    });
    return filteredColumn;
  });

  console.log("Columns:", columns);
  console.log("Rows:", row);
  console.log("Filtered Columns:", filteredColumns);
  row[0].key = filteredColumns.map((row) => row);
  console.log("Rows:", row);

  return (
    <div className="rootCustomTooltip">
      <div className="containerTitle">
        <h2>Custom Tooltip</h2>
      </div>
      <div className="containerTable">
        <table className="table">
          <thead>
            <tr>
              {row &&
                row.length > 0 &&
                row.map((row, index) => (
                  <th scope="col" className={`${row?.title}_${index}`}>
                    {row?.title}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            <tr className={`trTable`}>
              {filteredColumns.map((column, index, arr) => {
                // const array = Object.keys(arr);
                // console.log("here4", arr);
                return (
                  <td
                    key={`${column}_${index}`}
                    className={`${column}_${index}`}
                  >
                    {column[index]}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
