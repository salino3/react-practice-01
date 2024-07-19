import React, { useEffect, useState } from "react";
import { TableComponet, typesFilter } from "@/common";
import { mockPaginationData, Pagination, TableData } from "@/core";
import { useAppFunctions } from "@/hooks";
import "./workers-table.styles.scss";

interface Row {
  key?: string;
  title: string;
  tooltip?: (item: any, row: TableData) => any | string | undefined;
  render?: (item: any, row: TableData) => any | string | undefined;
  typeFilter?: any;
  valuesFilter?: ValuesFilter[] | [];
  filter?: any;
  setFilter?: any;
  minDate?: string | number | undefined;
  maxDate?: string | number | undefined;
}

export interface ValuesFilter {
  text: string;
  value: any;
}

export const WorkersTable: React.FC = () => {
  const { getEmailPrefix, fetchPaginatedData } = useAppFunctions();

  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);
  const [flag, setFlag] = useState<boolean>(false);

  const [tableData, setTableData] = useState<Pagination | undefined>();
  const [filterId, setFilterId] = useState<string>("");
  const [filterName, setFilterName] = useState<string>("");
  const [filterCity, setFilterCity] = useState<string>("");
  const [filterEmail, setFilterEmail] = useState<string>("");
  const [filterAge, setFilterAge] = useState<number | null>(null);
  const [filterBirthDate, setFilterBirthDate] = useState<string>("");
  const [filterGender, setFilterGender] = useState<string>("");
  const [filterEmployee, setFilterEmployee] = useState<string>("");

  let today = new Date();
  let toISODate = today.toISOString().substr(0, 10);

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
      typeFilter: typesFilter?.multiselect,
      valuesFilter: [
        ...(mockPaginationData && mockPaginationData?.products?.length > 0
          ? Array.from(
              new Set(
                mockPaginationData?.products?.map((product) => product.city)
              )
            ).map((city) => ({ text: city, value: city }))
          : []),
      ],
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
      key: "age",
      title: "Age",
      typeFilter: typesFilter?.range,
      setFilter: setFilterAge,
      filter: filterAge,
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
      valuesFilter: [
        { text: "", value: "" },
        { text: "Female", value: "female" },
        { text: "Male", value: "male" },
        { text: "Prefer not say", value: "prefer_not_say" },
      ],
      setFilter: setFilterGender,
      filter: filterGender,
    },
    {
      key: "birthDate",
      title: "Birth Date",
      render: (dateString: string) => {
        const dateObject = new Date(dateString);
        const formattedDate = dateObject.toLocaleDateString("es-ES", {
          year: "numeric",
          month: "short",
          day: "numeric",
        });
        return formattedDate;
      },
      typeFilter: typesFilter?.date,
      setFilter: setFilterBirthDate,
      filter: filterBirthDate,
      maxDate: toISODate,
    },

    {
      key: "employee",
      title: "Employee",
      render: (item: boolean) => (item ? "Yes" : "No"),
      typeFilter: typesFilter?.select,
      valuesFilter: [
        { text: "", value: "" },
        { text: "Yes", value: true },
        { text: "No", value: false },
      ],
      setFilter: setFilterEmployee,
      filter: filterEmployee,
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
      age: filterAge,
      birthDate: filterBirthDate,
      gender: filterGender,
      employee: filterEmployee,
    };
    console.log("here4", body);
    const exactFilters = ["gender", "employee", "city"];
    const rangeFilters = ["age", "birthDate"];
    fetchPaginatedData(page, pageSize, body, exactFilters, rangeFilters)
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
