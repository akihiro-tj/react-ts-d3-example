import { continents, countries } from '../constant';

export type Action = {
  type: string;
  payload: any;
};

export type Continent = typeof continents[number];

export type Datum = {
  country: keyof typeof countries;
  continent: Continent;
  showLabel?: boolean;
  year: number;
  life: number;
  gdp: number;
  population: number;
};

export type Country = {
  [key: string]: {
    continent: Continent;
    showLabel?: boolean;
  };
};

export type CheckBoxGroup = {
  [key in Continent]: boolean;
};
