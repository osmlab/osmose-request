import defaultOptions from './defaultOptions.json';
import { fetchErrorsRequest, fetchErrorRequest } from './requests';

/**
 * Osmose API request handler
 * @type {Object}
 */
export default class OsmoseRequest {
  /**
   * @param {Object} [options] Custom options to apply
   */
  constructor(options) {
    this._options = {
      ...defaultOptions,
      ...options
    };
  }

  /**
   * Return the API endpoint to use for the requests
   * @return {String} URL of the API endpoint
   */
  get endpoint() {
    return this._options.endpoint;
  }

  /**
   * Return an errors list
   * @param  {Object} params
   * @return {Object}
   */
  async fetchErrors(params) {
    const list = await fetchErrorsRequest(this._options.endpoint, params);

    /*
      Transform the raw list:
      {
        "description": ["lat", "lon", "error_id", "item"],
        "errors": [
          ["47.2069075", "-1.5145110", "14412894302", "8120"],
          ["47.1867600", "-1.5580475", "14412894299", "8120"]
        ]
      }

      Into an array of objects:
      [
        {
          "lat": "47.2069075",
          "lon": "-1.5145110",
          "error_id": "14412894302",
          "item": "8120"
        },
        {
          "lat": "47.1867600",
          "lon": "-1.5580475",
          "error_id": "14412894299",
          "item": "8120"
        }
      ]
     */
    return list.errors.map(error =>
      list.description.reduce((result, key, index) => {
        result[key] = error[index];
        return result;
      }, {})
    );
  }

  /**
   * Return all the informations about a specific error
   * @param  {String} errorId The error ID
   * @return {Object}
   */
  async fetchError(errorId) {
    return await fetchErrorRequest(this._options.endpoint, errorId);
  }
}
