import React from "react";
import { TableComponet } from "@/common";
import { mockTableData, TableData } from "@/core";
import { useAppFunctions } from "@/hooks";
import "./workers-table.styles.scss";

export const WorkersTable: React.FC = () => {
  const { getEmailPrefix } = useAppFunctions();

  interface Arr {
    key?: string;
    title: string;
    render?: (item: any, row: TableData) => any | string | undefined;
  }

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
      // render: (item: string) => {
      //   return getEmailPrefix(item);
      // },
    },
    {
      key: "gender",
      title: "Gender",
    },
    {
      // key: "Action",
      title: "Action",
      render: (_: any, row: TableData) => {
        return (
          <div className="boxBtnRow">
            <button onClick={() => alert(row?.email)}>{row?.city}</button>
          </div>
        );
      },
    },
  ];
  console.log("Rows11:", array);
  return (
    <div className="rootWorkersTable">
      <div className="containerWorkesTable">
        <TableComponet row={array} columns={mockTableData} />
      </div>
    </div>
  );
};
