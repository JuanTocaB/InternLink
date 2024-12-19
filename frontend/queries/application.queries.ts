import jsonToQueryParams from "./queries.parameters";
import client from "./client.http";

const indexApplications = (
  page: number = 1,
  limit: number = 10,
  order: string = "asc",
  field: string = "createdAt",
  searchTerm: string = "",
) => {
  const requestQuery = {
    pagination: {
      value: false,
      page: page,
      limit: limit,
      order: order,
      field: field,
    },
    filters: {
      value: false,
    },
  };

  if (searchTerm !== "") {
    const filters = {
      value: true,
      searchTerm: searchTerm,
    };
    requestQuery.filters = filters;
  }

  const params = jsonToQueryParams(requestQuery);

  return client.get(`/api/application/?${params}`);
};

const getApplication = (id: string) => {
  return client.get(`/api/application/${id}`);
};

const storeApplication = (data: Record<string, any>) => {
  return client.post("/api/application", data);
};

const updateApplication = (id: string, data: Record<string, any>) => {
  return client.put(`/api/application/${id}`, data);
};

const deleteApplication = (id: string) => {
  return client.delete(`/api/application/${id}`);
};

export {
  indexApplications,
  getApplication,
  storeApplication,
  updateApplication,
  deleteApplication,
};
