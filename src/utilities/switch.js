export const varSwitch = (search, value, SEARCH_QUERY, STARS_QUERY) => {
  let variables, query;
  let key = '';
  if (search.length > 0) {
    key = value === 1 ? 'user' : 'repository';
  }
  if (value === 0) {
    query = STARS_QUERY;
    variables = {};
    return [query, variables];
  } else {
    query = SEARCH_QUERY;
    variables = { queryString: `${key}:${search}` };
    return [query, variables];
  }
};
