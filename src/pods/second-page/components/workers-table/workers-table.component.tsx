import React from "react";
import { TableComponet } from "@/common";
import { mockTableData, TableData } from "@/core";
import { useAppFunctions } from "@/hooks";
import "./workers-table.styles.scss";

export const WorkersTable: React.FC = () => {
  const { getEmailPrefix } = useAppFunctions();

  //     <th scope="row">
  //       {item?.name}
  //       <span>{item?.name}</span>
  //     </th>
  //     <th scope="row">
  //       {item?.city}

  //       <span>{item?.city}</span>
  //     </th>
  //     <th scope="row">
  //       {getEmailPrefix(item.email)}
  //       <span>{item?.email}</span>
  //       </th>

  const rows = [
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
        <TableComponet columns={mockTableData} />
      </div>
    </div>
  );
};
