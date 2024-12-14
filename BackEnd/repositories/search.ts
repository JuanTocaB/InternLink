const Search = {
  async byTerm(query: Record<string, any>, filters: any, fields: string[]) {
    const searchTerm = filters["searchTerm"];
    const filterValue = filters["value"];
    if (!filterValue) return query;
    if (!searchTerm || fields.length === 0) return query;
    const searchRegex = new RegExp(searchTerm, "i");
    const orConditions = fields.map((field) => ({ [field]: searchRegex }));

    if (!query.$or) {
      query.$or = [];
    }
    query.$or = [...query.$or, ...orConditions];

    return query;
  },
};

export default Search;
