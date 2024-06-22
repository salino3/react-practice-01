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
                {keysToFilter.map((key, colIndex) => {
                  // Busca la fila correspondiente en 'row' para determinar si tiene 'render'
                  const rowConfig = row.find((r) => r.key === key);
                  const content = values[key];
                  // rowConfig && rowConfig.render
                  //   ? rowConfig.render(values[key], values)
                  //   :

                  return (
                    <td
                      key={`${key}_${rowIndex}_${colIndex}`}
                      className={`${key}_${rowIndex}_${colIndex}`}
                    >
                      {content}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
