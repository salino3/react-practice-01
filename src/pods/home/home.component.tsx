import React from "react";
import { RotateImage } from "./components";
import "./home.styles.scss";

export const HomePage: React.FC = () => {
  // interface Products {
  //   id: string;
  //   name: string;
  //   code: string;
  //   price: number;
  //   quantity: number;
  //   company: string;
  // }

  // const [data, setData] = useState<Products[]>([]);

  // async function apiCall() {
  //   const response = await fetch("http://localhost:3000/products");
  //   setData(await response.json());
  //   console.log(data);
  // }

  // useEffect(() => {
  //   apiCall();
  // }, []);

  return (
    <div className="rootHomePage">
      <div className="containerHome">
        <h1>Home Page</h1>
        {/*  */}
        {/* <h3>This is the list of home page</h3>
      <div className="listhomePage">
        {data &&
          data?.length > 0 &&
          data.map((item) => <p key={item?.id}>{item?.name}</p>)}
      </div> */}
        <div className="containerRotate">
          <RotateImage />
        </div>
      </div>
    </div>
  );
};