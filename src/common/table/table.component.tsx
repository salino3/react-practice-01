import React from "react";
import "./table.styles.scss";

interface TableProps {
  columns: any[];
  key?: any;
  row: any[];
}

export const TableComponet: React.FC<TableProps> = ({ columns, key, row }) => {
  const keysToFilter = row.map((row) => row.key);
  const keysToFilter2 = keysToFilter;
  const filteredColumns = columns.map((column) => {
    const filteredColumn: any = {};
    keysToFilter2.forEach((key) => {
      if (column.hasOwnProperty(key)) {
        filteredColumn[key] = column[key];
      }
    });
    return filteredColumn;
  });

  const arrId = filteredColumns.map((column) => Object.values(column)[0] || "");
  const arrName = filteredColumns.map(
    (column) => Object.values(column)[1] || ""
  );
  const arrCity = filteredColumns.map(
    (column) => Object.values(column)[2] || ""
  );
  const arrEmail = filteredColumns.map(
    (column) => Object.values(column)[3] || ""
  );

  const array = filteredColumns.map((column, index) => {
    return {
      id: arrId[index],
      name: arrName[index],
      city: arrCity[index],
      email: arrEmail[index],
    };
  });

  console.log("Filtered Columns:", filteredColumns);

  console.log("here2:", Object.values(filteredColumns[0])[0]);

  console.log("Roxs:", arrId || []);

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
            {array &&
              array.length > 0 &&
              array.map((row: any, index) => (
                <tr className={`trTable`}>
                  {" "}
                  <th scope="col" className={`${row?.id}_${index}`}>
                    {row?.id}
                  </th>
                  <th scope="col" className={`${row?.name}_${index}`}>
                    {row?.name}
                  </th>
                  <th scope="col" className={`${row?.city}_${index}`}>
                    {row?.city}
                  </th>
                  <th scope="col" className={`${row?.email}_${index}`}>
                    {row?.email}
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
