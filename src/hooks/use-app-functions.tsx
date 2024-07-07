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
  //   body: any,
  //   exactFilters: string[]
  // ): Promise<Pagination> => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       const filters = Object.keys(body).reduce((acc, key) => {
  //         acc[key] =
  //           typeof body[key] === "number"
  //             ? body[key]
  //             : body[key]?.toLowerCase();
  //         return acc;
  //       }, {} as Record<string, string | number | undefined>);

  //       console.log("Filters:", filters);

  //       let filteredData = mockPaginationData?.products?.filter((item: any) => {
  //         return Object.keys(filters).every((key) => {
  //           const filterValue = filters[key];
  //           const itemValue = item[key]?.toString().toLowerCase();
  //           if (typeof filterValue === "number") {
  //             return itemValue.includes(filterValue.toString());
  //           } else {
  //             return !filterValue || itemValue.includes(filterValue);
  //           }
  //         });
  //       });

  //       if (exactFilters && exactFilters.length > 0) {
  //         exactFilters.forEach((filterKey) => {
  //           const exactValue = body[filterKey];
  //           if (
  //             exactValue !== undefined &&
  //             exactValue !== null &&
  //             exactValue !== ""
  //           ) {
  //             filteredData = filteredData?.filter(
  //               (item: any) =>
  //                 item[filterKey]?.toString().toLowerCase() ===
  //                 exactValue.toString().toLowerCase()
  //             );
  //           }
  //         });
  //       }

  //       if (!filteredData || !filteredData.length) {
  //         filteredData = [];
  //       }

  //       const start = (page - 1) * pageSize;
  //       const end = start + pageSize;
  //       const paginatedData = filteredData.slice(start, end);

  //       resolve({
  //         products: paginatedData || [],
  //         totalProducts: (filteredData && filteredData?.length) || 0,
  //       });
  //     }, 100);
  //   });
  // };

  // Version 2
  // const fetchPaginatedData = (
  //   page: number,
  //   pageSize: number,
  //   body: any,
  //   exactFilters: string[],
  //   rangeFilters: string[]
  // ): Promise<Pagination> => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       const filters = Object.keys(body).reduce((acc, key) => {
  //         if (rangeFilters.includes(key)) {
  //           if (body[key]?.min !== undefined && body[key]?.max !== undefined) {
  //             acc[key] = body[key];
  //           }
  //         } else if (typeof body[key] === "string") {
  //           acc[key] = body[key].toLowerCase();
  //         } else {
  //           acc[key] = body[key];
  //         }
  //         return acc;
  //       }, {} as Record<string, any>);

  //       console.log("Filters:", filters);

  //       let filteredData = mockPaginationData?.products?.filter((item: any) => {
  //         return Object.keys(filters).every((key) => {
  //           const filterValue = filters[key];
  //           if (
  //             typeof filterValue === "object" &&
  //             filterValue.min !== undefined &&
  //             filterValue.max !== undefined
  //           ) {
  //             const itemNumber = Number(item[key]);
  //             return (
  //               itemNumber >= filterValue.min && itemNumber <= filterValue.max
  //             );
  //           } else if (typeof filterValue === "string") {
  //             const itemValue = item[key]?.toString().toLowerCase();
  //             return !filterValue || itemValue.includes(filterValue);
  //           } else {
  //             return true;
  //           }
  //         });
  //       });

  //       if (exactFilters && exactFilters.length > 0) {
  //         exactFilters.forEach((filterKey) => {
  //           const exactValue = body[filterKey];
  //           if (
  //             exactValue !== undefined &&
  //             exactValue !== null &&
  //             exactValue !== ""
  //           ) {
  //             filteredData = filteredData?.filter(
  //               (item: any) =>
  //                 item[filterKey]?.toString().toLowerCase() ===
  //                 exactValue.toString().toLowerCase()
  //             );
  //           }
  //         });
  //       }

  //       if (!filteredData || !filteredData.length) {
  //         filteredData = [];
  //       }

  //       const start = (page - 1) * pageSize;
  //       const end = start + pageSize;
  //       const paginatedData = filteredData.slice(start, end);

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
    exactFilters: string[],
    rangeFilters: string[]
  ): Promise<Pagination> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filters = Object.keys(body).reduce((acc, key) => {
          if (rangeFilters.includes(key)) {
            if (body[key]?.min !== undefined && body[key]?.max !== undefined) {
              acc[key] = body[key];
            }
          } else if (typeof body[key] === "string") {
            acc[key] = body[key].toLowerCase();
          } else {
            acc[key] = body[key];
          }
          return acc;
        }, {} as Record<string, any>);

        console.log("Filters:", filters);

        let filteredData = mockPaginationData?.products?.filter((item: any) => {
          return Object.keys(filters).every((key) => {
            const filterValue = filters[key];

            if (
              typeof filterValue === "object" &&
              filterValue.min &&
              filterValue.min !== undefined &&
              filterValue.max &&
              filterValue.max !== undefined
            ) {
              if (
                typeof item[key] === "string" &&
                !isNaN(Date.parse(item[key]))
              ) {
                const itemDate = new Date(item[key]);
                const minDate = new Date(filterValue.min);
                const maxDate = new Date(filterValue.max);
                return itemDate >= minDate && itemDate <= maxDate;
              } else if (typeof item[key] === "number") {
                // range numbers
                const itemNumber = item[key];
                return (
                  itemNumber >= Number(filterValue.min) &&
                  itemNumber <= Number(filterValue.max)
                );
              }
            } else if (typeof filterValue === "string") {
              const itemValue = item[key]?.toString().toLowerCase();
              return !filterValue || itemValue.includes(filterValue);
            } else {
              return true;
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
