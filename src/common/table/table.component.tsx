import React from "react";
import "./table.styles.scss";

interface TableProps {
  columns: any[];
  row: any[];
}

export const TableComponet: React.FC<TableProps> = ({ columns, row }) => {
  const keysToFilter = row.map((r) => r.key);

  const valuesArray = columns.map((column) => {
    const values: any = {};
    keysToFilter.forEach((key) => {
      values[key] = column[key] || "";
    });
    return values;
  });

  return (
    <div className="rootTableComponet">
      <div className="containerTable">
        <table className="table">
          <thead>
            <tr>
              {row &&
                row.length > 0 &&
                row.map((r, index) => (
                  <th
                    key={index}
                    scope="col"
                    className={`${r?.title}_${index}`}
                  >
                    {r?.title}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {valuesArray.map((values, rowIndex) => (
              <tr key={rowIndex} className={`trTable`}>
                {keysToFilter.map((key, colIndex) => {
                  const rowConfig = row.find((r) => r.key === key);
                  const content =
                    rowConfig && rowConfig.render
                      ? rowConfig.render(values[key], values)
                      : values[key];
                  const tooltip =
                    rowConfig && rowConfig.tooltip
                      ? rowConfig.tooltip(values[key], values)
                      : values[key];

                  return (
                    <td
                      key={`${key}_${rowIndex}_${colIndex}`}
                      className={`${key}_${rowIndex}_${colIndex}`}
                    >
                      {key && <span>{tooltip}</span>}
                      {content}
                    </td>
                  );
                })}
              </tr>
              //
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
