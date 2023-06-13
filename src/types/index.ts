import { continents } from '../config';

export type Action = {
  type: string;
  payload: any;
};

export type Continent = typeof continents[number];

export type Datum = {
  country: string;
  continent: Continent;
  showLabel?: boolean;
  year: number;
  life: number;
  gdp: number;
  population: number;
};

export type Country = {
  continent: Continent;
  showLabel?: boolean;
};

export type Countries = {
  [key: string]: Country;
};

export type CheckBoxGroup = {
  [key in Continent]: boolean;
};
