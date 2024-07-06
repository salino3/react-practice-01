import React, { useEffect, useState } from "react";
import { TableComponet, typesFilter } from "@/common";
import { Pagination, TableData } from "@/core";
import { useAppFunctions } from "@/hooks";
import "./workers-table.styles.scss";

interface Row {
  key?: string;
  title: string;
  tooltip?: (item: any, row: TableData) => any | string | undefined;
  render?: (item: any, row: TableData) => any | string | undefined;
  typeFilter?: any;
  valuesFilter?: string[] | [];
  filter?: any;
  setFilter?: any;
}

export const WorkersTable: React.FC = () => {
  const { getEmailPrefix, fetchPaginatedData } = useAppFunctions();

  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);
  const [flag, setFlag] = useState<boolean>(false);

  const [tableData, setTableData] = useState<Pagination | undefined>();
  const [filterId, setFilterId] = useState<number | null>(null);
  const [filterName, setFilterName] = useState<string>("");
  const [filterCity, setFilterCity] = useState<string>("");
  const [filterEmail, setFilterEmail] = useState<string>("");
  const [filterGender, setFilterGender] = useState<string>("");

  const array: Row[] = [
    {
      key: "id",
      title: "Id",
      typeFilter: typesFilter?.number,
      setFilter: setFilterId,
      filter: filterId,
    },
    {
      key: "name",
      title: "Name",
      tooltip: (item: string) => item,
      typeFilter: typesFilter?.text,
      setFilter: setFilterName,
      filter: filterName,
    },
    {
      key: "city",
      title: "City",
      tooltip: (item: string) => item,
      typeFilter: typesFilter?.text,
      setFilter: setFilterCity,
      filter: filterCity,
    },
    {
      key: "email",
      title: "Email",
      tooltip: (item: string) => item,
      render: (item: string) => getEmailPrefix(item),
      typeFilter: typesFilter?.text,
      setFilter: setFilterEmail,
      filter: filterEmail,
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
      typeFilter: typesFilter?.select,
      valuesFilter: ["", "female", "male", "prefer_not_say"],
      setFilter: setFilterGender,
      filter: filterGender,
    },
    {
      title: "Action",
      render: (_: any, row: TableData) => {
        return (
          <div className="boxBtnRow">
            <button className="btnRow" onClick={() => alert(row?.email)}>
              Click here
            </button>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    const body = {
      id: filterId,
      name: filterName,
      city: filterCity,
      email: filterEmail,
      gender: filterGender,
    };
    console.log("here4", body);

    fetchPaginatedData(page, pageSize, body, ["gender"])
      .then((res) => {
        setTableData(res);
        console.log("Response: ", res);
      })
      .catch((err: any) => {
        console.error("Error fetching data: ", err);
      });
  }, [page, pageSize, flag]);

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
          setFlag={setFlag}
          rowPerPages={[5, 10, 25]}
          totalData={tableData?.totalProducts || 0}
          columns={tableData?.products || []}
        />
      </div>
    </div>
  );
};
