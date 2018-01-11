jest.mock('../requests');

import defaultOptions from '../defaultOptions.json';
import {
  fetchErrorsRequest,
  fetchErrorRequest,
  closeErrorRequest,
  falseErrorRequest,
  fetchSupportedCountriesRequest,
  fetchItemCategoriesRequest,
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

  it('Should return a default language', () => {
    const osmose = new OsmoseRequest();
    expect(osmose.language).toBe(defaultOptions.language);
  });

  it('Should return a custom language', () => {
    const customLanguage = 'fr';
    const osmose = new OsmoseRequest({ language: customLanguage });
    expect(osmose.language).toBe(customLanguage);
  });
});

describe('Get Osmose errors', () => {
  const language = 'fr';
  const osmose = new OsmoseRequest({ language });
  let errors = [];

  it('Should return errors related to an Osmose item', async () => {
    const params = {
      item: 8120
    };
    errors = await osmose.fetchErrors(params);

    expect(errors).toBeDefined();
    expect(errors).toMatchSnapshot();
    expect(fetchErrorsRequest).toBeCalledWith(
      defaultOptions.endpoint,
      language,
      params
    );
  });

  it('Should return an Osmose error', async () => {
    const errorId = errors[0].error_id;
    const error = await osmose.fetchError(errorId);
    expect(error).toBeDefined();
    expect(error).toMatchSnapshot();
    expect(fetchErrorRequest).toBeCalledWith(
      defaultOptions.endpoint,
      language,
      errorId
    );
  });
});

describe('Update Osmose errors', async () => {
  const language = 'fr';
  const osmose = new OsmoseRequest({ language });
  let errors = await osmose.fetchErrors({ item: 8120 });

  it('Should close error related to an Osmose item', async () => {
    const errorId = errors[0].error_id;
    const result = await osmose.closeError(errorId);

    expect(result).toBeDefined();
    expect(result).toBeTrue();
    expect(closeErrorRequest).toBeCalledWith(
      defaultOptions.endpoint,
      language,
      errorId
    );
  });

  it('Should mark as false positive error related to an Osmose item', async () => {
    const errorId = errors[1].error_id;
    const result = await osmose.falseError(errorId);

    expect(result).toBeDefined();
    expect(result).toBeTrue();
    defaultOptions.endpoint,
      expect(falseErrorRequest).toBeCalledWith(language, errorId);
  });
});

describe('Get supported countries', () => {
  const osmose = new OsmoseRequest();

  it('Should return the list of supported countries', async () => {
    const countries = await osmose.fetchSupportedCountries();

    expect(countries).toBeDefined();
    expect(countries).toMatchSnapshot();
    expect(fetchSupportedCountriesRequest).toBeCalledWith(
      defaultOptions.endpoint,
      defaultOptions.language
    );
  });
});

describe('Get Osmose item categories', () => {
  const osmose = new OsmoseRequest();

  it('Should return the list of the item categories', async () => {
    const categories = await osmose.fetchItemCategories();

    expect(categories).toBeDefined();
    expect(categories).toMatchSnapshot();
    expect(fetchItemCategoriesRequest).toBeCalledWith(
      defaultOptions.endpoint,
      defaultOptions.language
    );
  });
});

describe('Get Osmose items', () => {
  const osmose = new OsmoseRequest();

  it('Should return the list of the items and their translated name', async () => {
    const items = await osmose.fetchItems();

    expect(items).toBeDefined();
    expect(items).toMatchSnapshot();
    expect(fetchItemsRequest).toBeCalledWith(
      defaultOptions.endpoint,
      defaultOptions.language
    );
  });

  it('Should return the list of the items and one translation of the name', async () => {
    const items = await osmose.fetchItems('fr');

    expect(items).toBeDefined();
    expect(items).toMatchSnapshot();
    expect(fetchItemsRequest).toBeCalledWith(
      defaultOptions.endpoint,
      defaultOptions.language
    );
  });
});
