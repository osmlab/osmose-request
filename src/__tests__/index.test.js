jest.mock('../requests');

import defaultOptions from '../defaultOptions.json';
import { fetchErrorsRequest, fetchErrorRequest } from '../requests';
import OsmoseRequest from '../index';

describe('Instanciation', () => {
  it('Should return a default endpoint', () => {
    const osmose = new OsmoseRequest();
    expect(osmose.endpoint).toBe(defaultOptions.endpoint);
  });

  it('Should return a custom endpoint', () => {
    const customEndpoint = 'https://my-custom-endpoint/api/0.2';
    const osmose = new OsmoseRequest({ endpoint: customEndpoint });
    expect(osmose.endpoint).toBe(customEndpoint);
  });
});

describe('Get Osmose items and errors', () => {
  const osmose = new OsmoseRequest();
  let errors = [];

  it('Should return errors related to an Osmose item', async () => {
    const params = {
      item: 8120
    };
    errors = await osmose.fetchErrors(params);

    expect(errors).toBeDefined();
    expect(fetchErrorsRequest).toBeCalledWith(defaultOptions.endpoint, params);
  });

  it('Should return an Osmose error', async () => {
    const errorId = errors[0].error_id;
    const error = await osmose.fetchError(errorId);
    expect(error).toBeDefined();
    expect(fetchErrorRequest).toBeCalledWith(defaultOptions.endpoint, errorId);
  });
});
