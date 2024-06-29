import { PaginatedResponse, Pagination, TableData } from "@/core";

export const useAppFunctions = () => {
  const getEmailPrefix = (str: string) => {
    if (str && typeof str === "string") {
      const atIndex = str.indexOf("@");
      if (atIndex === -1) return str;
      return str.substring(0, atIndex) + "@...";
    } else {
      return "";
    }
  };

  const fetchPaginatedData = (
    page: number,
    pageSize: number,
    TableData: Pagination,
    nameFilter: string = ""
  ): Promise<Pagination> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredData = TableData?.products?.filter((item: TableData) =>
          item?.name.toLowerCase().includes(nameFilter.toLowerCase())
        );

        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        const paginatedData = filteredData.slice(start, end);

        resolve({
          products: paginatedData,
          totalProducts: TableData?.products?.length,
        });
      }, 100);
    });
  };

  // // Ejemplo de uso
  // fetchPaginatedData<TableData>(1, 10, "a").then((response) => {
  //   console.log(response);
  // });

  return { getEmailPrefix };
};
