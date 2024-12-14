const paginate = (resultsQuery: any, pagination: any) => {
  if (!pagination.value) return resultsQuery;
  const page = pagination.page || 1;
  const limit = pagination.limit || 10;
  const skip = (page - 1) * limit;
  const sortOrder = pagination.order || "asc";
  const field = pagination.field || "createdAt";

  return resultsQuery
    .skip(skip)
    .limit(limit)
    .sort({ [field]: sortOrder });
};

export default paginate;
