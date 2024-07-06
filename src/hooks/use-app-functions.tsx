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

  // const fetchPaginatedData = (
  //   page: number,
  //   pageSize: number,
  //   body: any
  // ): Promise<Pagination> => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       const filters = Object.keys(body).reduce((acc, key) => {
  //         acc[key] = body[key]?.toLowerCase();
  //         return acc;
  //       }, {} as Record<string, any | undefined>);
  //       console.log("body1", body);
  //       let filteredData = mockPaginationData?.products?.filter((item: any) => {
  //         return Object.keys(filters).every((key) => {
  //           const filterValue = filters[key];
  //           return (
  //             !filterValue || item[key]?.toLowerCase().includes(filterValue)
  //           );
  //         });
  //       });
  //       if (!filteredData || !filteredData.length) {
  //         filteredData = mockPaginationData?.products;
  //       }

  //       const start = (page - 1) * pageSize;
  //       const end = start + pageSize;
  //       const paginatedData = filteredData && filteredData.slice(start, end);

  //       resolve({
  //         products: paginatedData || [],
  //         totalProducts: (filteredData && filteredData?.length) || 0,
  //       });
  //     }, 100);
  //   });
  // };

  const fetchPaginatedData = (
    page: number,
    pageSize: number,
    body: any,
    exactFilters: string[]
  ): Promise<Pagination> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filters = Object.keys(body).reduce((acc, key) => {
          acc[key] =
            typeof body[key] === "number"
              ? body[key]
              : body[key]?.toLowerCase();
          return acc;
        }, {} as Record<string, string | number | undefined>);

        console.log("Filters:", filters);

        let filteredData = mockPaginationData?.products?.filter((item: any) => {
          return Object.keys(filters).every((key) => {
            const filterValue = filters[key];
            const itemValue = item[key]?.toString().toLowerCase();
            if (typeof filterValue === "number") {
              return itemValue.includes(filterValue.toString());
            } else {
              return !filterValue || itemValue.includes(filterValue);
            }
          });
        });

        if (exactFilters && exactFilters.length > 0) {
          exactFilters.forEach((filterKey) => {
            const exactValue = body[filterKey];
            if (
              exactValue !== undefined &&
              exactValue !== null &&
              exactValue !== ""
            ) {
              filteredData = filteredData?.filter(
                (item: any) =>
                  item[filterKey]?.toString().toLowerCase() ===
                  exactValue.toString().toLowerCase()
              );
            }
          });
        }

        if (!filteredData || !filteredData.length) {
          filteredData = [];
        }

        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        const paginatedData = filteredData.slice(start, end);

        resolve({
          products: paginatedData || [],
          totalProducts: (filteredData && filteredData?.length) || 0,
        });
      }, 100);
    });
  };

  return { getEmailPrefix, fetchPaginatedData };
};
