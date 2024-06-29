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
  rowPerPages?: number[];
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
  rowPerPages = [5, 10, 25, 50],
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
  const startRow = (page - 1) * pageSize + 1;
  const endRow = Math.min(page * pageSize, totalData);

  return (
    <div className="table_x02_rootTableComponet">
      <div className="table_x02_containerTable">
        <table className="table">
          <thead>
            <tr>
              {row &&
                row.length > 0 &&
                row.map((r, index) => (
                  <th
                    key={uniqueKey ? r[uniqueKey] : index}
                    scope="col"
                    className={`table_x02_${r?.title}_${
                      uniqueKey ? r[uniqueKey] : index
                    }`}
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
                  className={`table_x02_trTable`}
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
                          key={`${key}_${
                            uniqueKey ? values[uniqueKey] : rowIndex
                          }_${colIndex}`}
                          className={`table_x02_${key}_${
                            uniqueKey ? values[uniqueKey] : rowIndex
                          }_${colIndex}`}
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
        <div className="table_x02_rootPagination">
          <div className="table_x02_containerPagination">
            <div className="table_x02_contentChoosePages">
              <div className="table_x02_containerSpanRowsInfo">
                <span className="table_x02_spanChoosePages_01">
                  Rows per page:
                </span>
                <span className="table_x02_spanChoosePages_02">{pageSize}</span>
              </div>
              <details
                id="detailsPagesTable"
                className="table_x02_detailsPages"
              >
                <summary></summary>
                <div
                  id="containerPagesTable"
                  className="table_x02_containerPages"
                >
                  {rowPerPages &&
                    rowPerPages?.length > 0 &&
                    rowPerPages.map((item: number) => (
                      <span
                        onClick={() => setPageSize && setPageSize(item)}
                        key={item}
                        className="table_x02_rowPages"
                      >
                        {item}
                      </span>
                    ))}
                </div>
              </details>
            </div>
            <div className="table_x02_contentArrows">
              <KeyboardDoubleArrowLeftIcon
                style={{
                  cursor: page == 1 ? "" : "pointer",
                  opacity: page == 1 ? "0.4" : "1",
                }}
                onClick={() => setPage && setPage(1)}
                className="table_x02_iconPagination"
              />
              <KeyboardArrowLeftIcon
                style={{
                  cursor: page == 1 ? "" : "pointer",
                  opacity: page == 1 ? "0.4" : "1",
                }}
                onClick={() => setPage && setPage(page == 1 ? page : page - 1)}
                className="table_x02_iconPagination"
              />
              <div className="table_x02_infoPagination">
                {startRow} - {endRow} of {totalData || "No data"}
              </div>
              <KeyboardArrowRightIcon
                style={{
                  cursor: page == totalPages ? "" : "pointer",
                  opacity: page == totalPages ? "0.4" : "1",
                }}
                onClick={() =>
                  setPage && setPage(page == totalPages ? totalPages : page + 1)
                }
                className="table_x02_iconPagination"
              />
              <KeyboardDoubleArrowRightIcon
                style={{
                  cursor: page == totalPages ? "" : "pointer",
                  opacity: page == totalPages ? "0.4" : "1",
                }}
                onClick={() => setPage && setPage(totalPages)}
                className="table_x02_iconPagination"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
