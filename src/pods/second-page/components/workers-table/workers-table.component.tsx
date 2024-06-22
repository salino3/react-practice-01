import React from "react";
import { TableComponet } from "@/common";
import { mockTableData, TableData } from "@/core";
import { useAppFunctions } from "@/hooks";
import "./workers-table.styles.scss";

export const WorkersTable: React.FC = () => {
  const { getEmailPrefix } = useAppFunctions();

  const rows = [
    {
      key: "id",
      title: "Id",
      unique: true,
    },

    {
      key: "name",
      title: "Name",
    },
    {
      key: "city",
      title: "City",
    },
    {
      key: "email",
      title: "Email",
      render: (item: string, row: TableData) => getEmailPrefix(item),
    },
  ];

  return (
    <div className="rootWorkersTable">
      <div className="containerWorkesTable">
        <TableComponet rows={rows} columns={mockTableData} />
      </div>
    </div>
  );
};
