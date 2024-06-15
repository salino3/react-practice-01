import React, { useEffect, useState } from "react";
import "./home.styles.scss";
import { RotateImage } from "./components";

export const HomePage: React.FC = () => {
  interface Products {
    id: string;
    name: string;
    code: string;
    price: number;
    quantity: number;
    company: string;
  }

  const [data, setData] = useState<Products[]>([]);

  async function apiCall() {
    const response = await fetch("http://localhost:3000/products");
    setData(await response.json());
    console.log(data);
  }

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div className="rootHomePage">
      <h1>Home Page</h1>
      {/*  */}
      {/* <h3>This is the list of home page</h3>
      <div className="listhomePage">
        {data &&
          data?.length > 0 &&
          data.map((item) => <p key={item?.id}>{item?.name}</p>)}
      </div> */}
      <div>
        <RotateImage />
      </div>
    </div>
  );
};
