import defaultOptions from './defaultOptions.json';

export default class OsmoseRequest {
  constructor(options) {
    this._options = {
      ...defaultOptions,
      ...options
    };
  }

  get endpoint() {
    return this._options.endpoint;
  }
}
