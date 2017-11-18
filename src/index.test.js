import defaultOptions from './defaultOptions.json';
import OsmoseRequest from './index';

describe('Main class', () => {
  it('Should return a default endpoint', () => {
    const instance = new OsmoseRequest();
    expect(instance.endpoint).toBe(defaultOptions.endpoint);
  });

  it('Should return a custom endpoint', () => {
    const customEndpoint = 'https://my-custom-endpoint/api/0.2/';
    const instance = new OsmoseRequest({ endpoint: customEndpoint });
    expect(instance.endpoint).toBe(customEndpoint);
  });
});
