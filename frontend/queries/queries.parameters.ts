const jsonToQueryParams = (data: Record<string, any>): string => {
  const params = new URLSearchParams();

  Object.keys(data).forEach((key) => {
    const value = data[key];

    if (typeof value === "object") {
      params.append(key, JSON.stringify(value));
    } else {
      params.append(key, value);
    }
  });

  return params.toString();
};

export default jsonToQueryParams;
