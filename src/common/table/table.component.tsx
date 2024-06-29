import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

import "./table.styles.scss";

interface TableProps {
  totalData: number;
  columns: any[];
  row: any[];
  uniqueKey?: string;
}

export const TableComponet: React.FC<TableProps> = ({
  totalData = 0,
  columns,
  row,
  uniqueKey,
}) => {
  const keysToFilter = row.map((r) => r.key);

  const valuesArray =
    columns &&
    columns?.length > 0 &&
    columns.map((column) => {
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
            {valuesArray &&
              valuesArray?.length > 0 &&
              valuesArray.map((values, rowIndex) => (
                <tr
                  key={uniqueKey ? values[uniqueKey] : rowIndex}
                  className={`trTable`}
                >
                  {keysToFilter &&
                    keysToFilter?.length > 0 &&
                    keysToFilter.map((key, colIndex) => {
                      const rowConfig = row.find((r) => r.key === key);
                      const content =
                        rowConfig && rowConfig.render
                          ? rowConfig.render(values[key], values)
                          : values[key];
                      const tooltip =
                        rowConfig && rowConfig.tooltip
                          ? rowConfig.tooltip(values[key], values)
                          : null;

                      return (
                        <td
                          key={`${key}_${rowIndex}_${colIndex}`}
                          className={`${key}_${rowIndex}_${colIndex}`}
                        >
                          {key && tooltip && <span>{tooltip}</span>}
                          {content}
                        </td>
                      );
                    })}
                </tr>
                //
              ))}
          </tbody>
        </table>
        <div className="containerPagination">
          <div className="contentPagination">
            <KeyboardDoubleArrowLeftIcon className="iconPagination" />
            <KeyboardArrowLeftIcon className="iconPagination" />
            <span>
              {columns?.length} of {totalData || "No data"}
            </span>
            <KeyboardArrowRightIcon className="iconPagination" />
            <KeyboardDoubleArrowRightIcon className="iconPagination" />
          </div>
        </div>
      </div>
    </div>
  );
};
