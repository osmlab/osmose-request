declare module 'osmose-request' {

  export interface Item {
    id: number;
    name: string;
    tags: string[];
    count: number[] | null;
    levels: number[];
  }

  export interface Category {
    id: number;
    name: string;
    items: Item[];
  }

  export interface Error {
    [key: string]: string;
  }

  export interface Options {
    language?: string;
    endpoint?: string;
  }

  export default class OsmoseRequest {
    constructor(options?: Options);

    closeError(errorId: number | string): Promise<boolean>;

    falseError(errorId: number | string): Promise<boolean>;

    fetchError(errorId: number | string): Promise<Error>;

    fetchErrors(params: {}): Promise<Error[]>;

    fetchItemCategories(): Promise<Category[]>;

    fetchItems(isoCountryCode?: string): Promise<Item[]>;

    fetchSupportedCountries(): string[];
  }
}