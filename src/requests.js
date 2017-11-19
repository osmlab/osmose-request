import 'whatwg-fetch';
import { buildQueryString } from './helpers';

/**
 * @param  {String} endpoint The API endpoint
 * @param  {Object} params
 * @return {Object}
 */
export const fetchErrorsRequest = (endpoint, params) =>
  fetch(`${endpoint}/errors${buildQueryString(params)}`)
    .then(response => response.json())
    .then(response => {
      if (!response || !response.description || !response.errors) {
        throw `The data received from the Osmose API is malformed`;
      }
      return response;
    });

/**
 * @param  {String} endpoint The API endpoint
 * @param  {String} errorId The ID of the error to fetch
 * @return {Object}
 */
export const fetchErrorRequest = (endpoint, errorId) =>
  fetch(`${endpoint}/error/${errorId}`)
    .then(response => response.json())
    .then(response => {
      if (!response || !response.title || !response.lat || !response.lon) {
        throw `The data received from the Osmose API is malformed (error: ${
          errorId
        })`;
      }

      return response;
    });
