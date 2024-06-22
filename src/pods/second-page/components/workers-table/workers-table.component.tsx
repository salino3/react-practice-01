import React from "react";
import { TableComponet } from "@/common";
import { mockTableData, TableData } from "@/core";
import { useAppFunctions } from "@/hooks";
import "./workers-table.styles.scss";

export const WorkersTable: React.FC = () => {
  const { getEmailPrefix } = useAppFunctions();

  interface Arr {
    key: string;
    title: string;
    unique?: boolean;
  }

  const array: Arr[] = [
    {
      title: "Name",
      key: "name",
    },
    {
      key: "id",
      title: "Id",
      unique: true,
    },
    {
      key: "city",
      title: "City",
    },
    {
      key: "email",
      title: "Email",
      //   render: (item: string, row: TableData) => getEmailPrefix(item),
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
