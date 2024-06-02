import React, { useEffect, useState } from "react";
import "./home.styles.scss";

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
      <h1>Home</h1>
      <p>This is the home page</p>
      <div className="listhomePage">
        {data && data?.length > 0 && data.map((item) => <p>{item?.name}</p>)}
      </div>
    </div>
  );
};
