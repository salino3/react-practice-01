import React, { useEffect, useState } from "react";
import { TableComponet } from "@/common";
import { mockPaginationData, Pagination, TableData } from "@/core";
import { useAppFunctions } from "@/hooks";
import "./workers-table.styles.scss";

interface Arr {
  key?: string;
  title: string;
  tooltip?: (item: any, row: TableData) => any | string | undefined;
  render?: (item: any, row: TableData) => any | string | undefined;
}

export const WorkersTable: React.FC = () => {
  const { getEmailPrefix, fetchPaginatedData } = useAppFunctions();
  const [tableData, setTableData] = useState<Pagination | undefined>();

  const array: Arr[] = [
    {
      key: "id",
      title: "Id",
    },
    {
      title: "Name",
      key: "name",
    },
    {
      key: "city",
      title: "City",
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
      name: "a",
    };
    fetchPaginatedData(1, 10, body)
      .then((res) => {
        setTableData(res);
        console.log("Response: ", res);
      })
      .catch((err: any) => {
        console.error("Error fetching data: ", err);
      });
  }, []);

  console.log("Rows11:", array);
  return (
    <div className="rootWorkersTable">
      <div className="containerWorkesTable">
        <TableComponet
          uniqueKey="id"
          row={array}
          // totalData={mockTableData?.length}
          // columns={mockTableData}
          totalData={tableData?.totalProducts || 0}
          columns={tableData?.products || []}
        />
      </div>
    </div>
  );
};
