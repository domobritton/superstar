export const varSwitch = (search, value, SearchQuery, UserQuery) => {
  let variables, query;
  let key = '';
  if (search.length > 0) {
    key = value === 1 ? 'user' : 'repository';
  }
  if (value === 0) {
    query = UserQuery;
    variables = { user: search };
    return [query, variables];
  } else {
    query = SearchQuery;
    variables = { queryString: `${key}:${search}` };
    return [query, variables];
  }
};
