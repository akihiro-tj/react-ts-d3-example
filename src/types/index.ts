export type Action = {
  type: string;
  payload: any;
};

export type Datum = {
  country: string;
  continent: string;
  showLabel?: boolean;
  year: number;
  life: number;
  gdp: number;
  population: number;
};

export type Country = {
  [key: string]: {
    continent: string;
    showLabel?: boolean;
  };
};
