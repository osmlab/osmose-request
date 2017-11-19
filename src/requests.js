import 'whatwg-fetch';
import { buildQueryString } from './helpers';

/**
 * @param  {String} endpoint The API endpoint
 * @param  {Object} params
 * @return {Object}
 */
export const fetchErrorsRequest = (endpoint, params) => {
  const uri = `${endpoint}/errors${buildQueryString(params)}`;

  return fetch(uri)
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
 * @param  {String} errorId The ID of the error to fetch
 * @return {Object}
 */
export const fetchErrorRequest = (endpoint, errorId) => {
  const uri = `${endpoint}/error/${errorId}`;

  return fetch(uri)
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
 * @return {Object}
 */
export const fetchSupportedCountriesRequest = endpoint => {
  const uri = `${endpoint}/meta/countries`;

  return fetch(uri)
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
 * @return {Object}
 */
export const fetchItemsRequest = endpoint => {
  const uri = `${endpoint}/meta/items`;

  return fetch(uri)
    .then(response => response.json())
    .then(response => {
      if (!response || !response.items) {
        throw `The data received from the Osmose API is malformed (${uri})`;
      }
      return response;
    });
};
