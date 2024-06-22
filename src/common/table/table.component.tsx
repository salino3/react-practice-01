import React from "react";
import "./table.styles.scss";

interface TableProps {
  columns: any[];
  key?: any;
  row: any[];
}

export const TableComponet: React.FC<TableProps> = ({ columns, key, row }) => {
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

  // Crear una lista de valores filtrados para cada propiedad
  const valuesArray = filteredColumns.map((column) => {
    const values: any = {};
    keysToFilter.forEach((key) => {
      values[key] = column[key] || "";
    });
    return values;
  });

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
                  <th
                    key={index}
                    scope="col"
                    className={`${row?.title}_${index}`}
                  >
                    {row?.title}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {valuesArray.map((values, rowIndex) => (
              <tr key={rowIndex} className={`trTable`}>
                {keysToFilter.map((key, colIndex) => (
                  <td
                    key={`${key}_${rowIndex}_${colIndex}`}
                    className={`${key}_${rowIndex}_${colIndex}`}
                  >
                    {values[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
