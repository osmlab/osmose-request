export const buildQueryString = params => {
  const builtParams = [];

  for (const paramName of Object.keys(params)) {
    const encodedName = encodeURIComponent(paramName);
    const encodedvalue = encodeURIComponent(params[paramName]);

    builtParams.push(`${encodedName}=${encodedvalue}`);
  }

  const questionMark = builtParams.length > 0 ? '?' : '';
  const queryString = builtParams.join('&');

  return `${questionMark}${queryString}`;
};
