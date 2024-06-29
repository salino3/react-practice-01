import React, { useEffect, useState } from "react";
import { TableComponet } from "@/common";
import { Pagination, TableData } from "@/core";
import { useAppFunctions } from "@/hooks";
import "./workers-table.styles.scss";

interface Row {
  key?: string;
  title: string;
  tooltip?: (item: any, row: TableData) => any | string | undefined;
  render?: (item: any, row: TableData) => any | string | undefined;
}

export const WorkersTable: React.FC = () => {
  const { getEmailPrefix, fetchPaginatedData } = useAppFunctions();
  const [tableData, setTableData] = useState<Pagination | undefined>();
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);

  const array: Row[] = [
    {
      key: "id",
      title: "Id",
    },
    {
      title: "Name",
      key: "name",
      tooltip: (item: string) => item,
    },
    {
      key: "city",
      title: "City",
      tooltip: (item: string) => item,
    },
    {
      key: "email",
      title: "Email",

      tooltip: (item: string) => item,
      render: (item: string) => getEmailPrefix(item),
    },
    {
      key: "gender",
      title: "Gender",
      tooltip: (item: string) =>
        item === "male"
          ? "male"
          : item === "female"
          ? "female"
          : "prefer not say",
      render: (item: string) =>
        item === "male"
          ? "male"
          : item === "female"
          ? "female"
          : "prefer not say",
    },
    {
      title: "Action",
      render: (_: any, row: TableData) => {
        return (
          <div className="boxBtnRow">
            <button onClick={() => alert(row?.email)}>Click here</button>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    const body = {
      name: "",
    };
    fetchPaginatedData(page, pageSize, body)
      .then((res) => {
        setTableData(res);
        console.log("Response: ", res);
      })
      .catch((err: any) => {
        console.error("Error fetching data: ", err);
      });
  }, [page, pageSize]);

  console.log("Rows11:", array);
  return (
    <div className="rootWorkersTable">
      <div className="containerWorkesTable">
        <TableComponet
          uniqueKey="id"
          row={array}
          setPage={setPage}
          setPageSize={setPageSize}
          page={page}
          pageSize={pageSize}
          rowPerPages={[5, 10, 25]}
          totalData={tableData?.totalProducts || 0}
          columns={tableData?.products || []}
        />
      </div>
    </div>
  );
};
