import React from "react";
import "./table.styles.scss";

export const TableComponet: React.FC = () => {
  enum Gender {
    Male = "male",
    Female = "female",
    PreferNotSay = "prefer_not_say",
  }

  interface TableData {
    id: number;
    name: string;
    city: string;
    email: string;
    age: number;
    gender: Gender;
    employee: boolean;
  }

  const mockTableData: TableData[] = [
    {
      id: 1,
      name: "Arianna",
      city: "Berlin",
      email: "arianna@gmail.com",
      age: 32,
      gender: Gender?.Female,
      employee: true,
    },
    {
      id: 2,
      name: "Jacob",
      city: "Madrid",
      email: "jacob@gmail.com",
      age: 39,
      gender: Gender?.PreferNotSay,
      employee: false,
    },
    {
      id: 3,
      name: "Larry",
      city: "London",
      email: "larry@gmail.com",
      age: 50,
      gender: Gender?.Male,
      employee: true,
    },
  ];

  const getEmailPrefix = (email: string) => {
    const atIndex = email.indexOf("@");
    if (atIndex === -1) return email;
    return email.substring(0, atIndex + 1) + "...";
  };
  return (
    <div className="rootCustomTooltip">
      <div className="containerTitle">
        <h2>Custom Tooltip</h2>
      </div>
      <div className="containerTable">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">City</th>
              <th className="lastThTitle" scope="col">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {mockTableData &&
              mockTableData?.length > 0 &&
              mockTableData.map((item) => (
                <tr className="trTable" key={item?.id}>
                  <th scope="row">{item?.id}</th>
                  <th scope="row">
                    {item?.name}
                    <span>{item?.name}</span>
                  </th>
                  <th scope="row">
                    {item?.city}

                    <span>{item?.city}</span>
                  </th>
                  <th scope="row">
                    {getEmailPrefix(item.email)}
                    <span>{item?.email}</span>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
