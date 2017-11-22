import fetch from 'cross-fetch';
import defaultOptions from './defaultOptions.json';
import { buildQueryString } from './helpers';

/**
 * @param  {String} endpoint The API endpoint
 * @param  {String} language Accept-Language HTTP header value
 * @param  {Object} params
 * @return {Object}
 */
export const fetchErrorsRequest = (endpoint, language, params) => {
  const uri = `${endpoint}/errors${buildQueryString(params)}`;
  const headers = { 'Accept-Language': language || defaultOptions.language };

  return fetch(uri, { headers })
    .then(response => response.json())
    .then(response => {
      if (!response || !response.description || !response.errors) {
        throw `The data received from the Osmose API is malformed (${uri})`;
      }
      return response;
    });
};

/**
 * @param  {String} endpoint The API endpoint
 * @param  {String} language Accept-Language HTTP header value
 * @param  {String} errorId The ID of the error to fetch
 * @return {Object}
 */
export const fetchErrorRequest = (endpoint, language, errorId) => {
  const uri = `${endpoint}/error/${errorId}`;
  const headers = { 'Accept-Language': language || defaultOptions.language };

  return fetch(uri, { headers })
    .then(response => response.json())
    .then(response => {
      if (!response || !response.title || !response.lat || !response.lon) {
        throw `The data received from the Osmose API is malformed (${uri})`;
      }
      return response;
    });
};

/**
 * @param  {String} endpoint The API endpoint
 * @param  {String} language Accept-Language HTTP header value
 * @return {Object}
 */
export const fetchSupportedCountriesRequest = (endpoint, language) => {
  const uri = `${endpoint}/meta/countries`;
  const headers = { 'Accept-Language': language || defaultOptions.language };

  return fetch(uri, { headers })
    .then(response => response.json())
    .then(response => {
      if (!response || !response.countries) {
        throw `The data received from the Osmose API is malformed (${uri})`;
      }
      return response;
    });
};

/**
 * @param  {String} endpoint The API endpoint
 * @param  {String} language Accept-Language HTTP header value
 * @return {Object}
 */
export const fetchItemCategoriesRequest = (endpoint, language) => {
  const uri = `${endpoint}/meta/categories`;
  const headers = { 'Accept-Language': language || defaultOptions.language };

  return fetch(uri, { headers })
    .then(response => response.json())
    .then(response => {
      if (!response || !response.categories) {
        throw `The data received from the Osmose API is malformed (${uri})`;
      }
      return response;
    });
};

/**
 * @param  {String} endpoint The API endpoint
 * @param  {String} language Accept-Language HTTP header value
 * @return {Object}
 */
export const fetchItemsRequest = (endpoint, language) => {
  const uri = `${endpoint}/meta/items`;
  const headers = { 'Accept-Language': language || defaultOptions.language };

  return fetch(uri, { headers })
    .then(response => response.json())
    .then(response => {
      if (!response || !response.items) {
        throw `The data received from the Osmose API is malformed (${uri})`;
      }
      return response;
    });
};
