import jsonToQueryParams from "./queries.parameters";
import client from "./client.http";

const indexInternships = (
  page: number = 1,
  limit: number = 10,
  order: string = "asc",
  field: string = "createdAt",
  searchTerm: string = "",
) => {
  const requestQuery = {
    pagination: {
      value: true,
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

  return client.get(`/api/internship/?${params}`);
};

const getInternship = (id: string) => {
  return client.get(`/api/internship/${id}`);
};

const storeInternship = (data: Record<string, any>) => {
  return client.post("/api/internship", data);
};

const updateInternship = (id: string, data: Record<string, any>) => {
  return client.put(`/api/internship/${id}`, data);
};

const deleteInternship = (id: string) => {
  return client.delete(`/api/internship/${id}`);
};

export {
  indexInternships,
  storeInternship,
  updateInternship,
  getInternship,
  deleteInternship,
};
