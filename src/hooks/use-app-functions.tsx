import { mockPaginationData, Pagination, TableData } from "@/core";

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
    body: Partial<TableData> = {}
  ): Promise<Pagination> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const nameFilter = body.name?.toLowerCase() || "";
        let filteredData;
        if (nameFilter) {
          filteredData = mockPaginationData?.products?.filter(
            (item: TableData) =>
              item?.name
                .toLowerCase()
                .includes(nameFilter && nameFilter.toLowerCase())
          );
        } else {
          filteredData = mockPaginationData?.products;
        }
        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        const paginatedData = filteredData && filteredData.slice(start, end);

        resolve({
          products: paginatedData || [],
          totalProducts: filteredData?.length || 0,
        });
      }, 100);
    });
  };

  return { getEmailPrefix, fetchPaginatedData };
};
