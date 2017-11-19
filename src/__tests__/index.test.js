jest.mock('../requests');

import defaultOptions from '../defaultOptions.json';
import {
  fetchErrorsRequest,
  fetchErrorRequest,
  fetchSupportedCountriesRequest,
  fetchItemsRequest
} from '../requests';
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

describe('Get Osmose errors', () => {
  const osmose = new OsmoseRequest();
  let errors = [];

  it('Should return errors related to an Osmose item', async () => {
    const params = {
      item: 8120
    };
    errors = await osmose.fetchErrors(params);

    expect(errors).toBeDefined();
    expect(errors).toMatchSnapshot();
    expect(fetchErrorsRequest).toBeCalledWith(defaultOptions.endpoint, params);
  });

  it('Should return an Osmose error', async () => {
    const errorId = errors[0].error_id;
    const error = await osmose.fetchError(errorId);
    expect(error).toBeDefined();
    expect(error).toMatchSnapshot();
    expect(fetchErrorRequest).toBeCalledWith(defaultOptions.endpoint, errorId);
  });
});

describe('Get supported countries', () => {
  const osmose = new OsmoseRequest();

  it('Should return the list of supported countries', async () => {
    const countries = await osmose.fetchSupportedCountries();

    expect(countries).toBeDefined();
    expect(countries).toMatchSnapshot();
    expect(fetchSupportedCountriesRequest).toBeCalledWith(
      defaultOptions.endpoint
    );
  });
});

describe('Get Osmose items', () => {
  const osmose = new OsmoseRequest();

  it('Should return the list of the items and their translated name', async () => {
    const items = await osmose.fetchItems();

    expect(items).toBeDefined();
    expect(items).toMatchSnapshot();
    expect(fetchItemsRequest).toBeCalledWith(defaultOptions.endpoint);
  });

  it('Should return the list of the items and one translation of the name', async () => {
    const items = await osmose.fetchItems('fr');

    expect(items).toBeDefined();
    expect(items).toMatchSnapshot();
    expect(fetchItemsRequest).toBeCalledWith(defaultOptions.endpoint);
  });
});
