import { mockPaginationData, Pagination } from "@/core";

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
    body: any
  ): Promise<Pagination> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filters = Object.keys(body).reduce((acc, key) => {
          acc[key] = body[key]?.toLowerCase();
          return acc;
        }, {} as Record<string, any | undefined>);
        console.log("body1", body);
        let filteredData = mockPaginationData?.products?.filter((item: any) => {
          return Object.keys(filters).every((key) => {
            const filterValue = filters[key];
            return (
              !filterValue || item[key]?.toLowerCase().includes(filterValue)
            );
          });
        });
        if (!filteredData || !filteredData.length) {
          filteredData = mockPaginationData?.products;
        }

        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        const paginatedData = filteredData && filteredData.slice(start, end);

        resolve({
          products: paginatedData || [],
          totalProducts: (filteredData && filteredData?.length) || 0,
        });
      }, 100);
    });
  };

  return { getEmailPrefix, fetchPaginatedData };
};
