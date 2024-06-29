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
  page?: number;
  pageSize?: number;
  setPage?: React.Dispatch<React.SetStateAction<number>>;
  setPageSize?: React.Dispatch<React.SetStateAction<number>>;
}

export const TableComponet: React.FC<TableProps> = ({
  totalData = 0,
  columns,
  row,
  uniqueKey,
  page = 1,
  pageSize = 10,
  setPage,
  setPageSize,
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

  const totalPages: number = Math.ceil(totalData / pageSize);
  console.log(totalPages);
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
        <div className="rootPagination">
          <div className="containerPagination">
            <div className="contentChoosePages">
              <span>Row per page:</span>
              <span className="spanChoosePages_02">{pageSize}</span>
              <details className="detailsPages">
                <summary></summary>
                <div className="containerPages">
                  <span className="rowPages">5</span>
                  <span className="rowPages">10</span>
                  <span className="rowPages">25</span>
                </div>
              </details>
            </div>
            <div className="contentArrows">
              <KeyboardDoubleArrowLeftIcon
                onClick={() => setPage && setPage(1)}
                className="iconPagination"
              />
              <KeyboardArrowLeftIcon
                onClick={() => setPage && setPage(page - 1)}
                className="iconPagination"
              />
              <span>
                {columns?.length} of {totalData || "No data"}
              </span>
              <KeyboardArrowRightIcon
                onClick={() => setPage && setPage(page + 1)}
                className="iconPagination"
              />
              <KeyboardDoubleArrowRightIcon
                onClick={() => setPage && setPage(totalPages)}
                className="iconPagination"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
