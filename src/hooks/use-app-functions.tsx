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

  return { getEmailPrefix };
};
