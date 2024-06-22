export const useAppFunctions = () => {
  const getEmailPrefix = (str: string) => {
    if (str && str == typeof String) {
      const atIndex = str.indexOf("@");
      if (atIndex === -1) return str;
      return str.substring(0, atIndex + 1) + "...";
    } else {
      return;
    }
  };

  return { getEmailPrefix };
};
