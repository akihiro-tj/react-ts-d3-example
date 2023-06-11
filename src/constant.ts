import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

import { Countries } from './types';

export const continentNames = {
  Asia: 'アジア',
  Oceania: 'オセアニア',
  Africa: 'アフリカ',
  Europe: '欧州',
  'North America': '北米',
  'South America': '南米',
} as const;

export const continents = [
  'Asia',
  'Oceania',
  'Africa',
  'Europe',
  'North America',
  'South America',
] as const;

const colorScale = scaleOrdinal(schemeCategory10);
export const colors = continents.reduce(
  (acc, cur, index) => ({
    ...acc,
    [cur]: colorScale(index.toString()),
  }),
  {} as { [key: string]: string },
);

export const countries: Countries = {
  Afghanistan: {
    continent: 'Asia',
  },
  Albania: {
    continent: 'Europe',
  },
  Algeria: {
    continent: 'Africa',
  },
  Angola: {
    continent: 'Africa',
  },
  Argentina: {
    continent: 'South America',
  },
  Armenia: {
    continent: 'Asia',
  },
  Australia: {
    continent: 'Oceania',
  },
  Austria: {
    continent: 'Europe',
  },
  Azerbaijan: {
    continent: 'Asia',
  },
  Bahrain: {
    continent: 'Asia',
  },
  Bangladesh: {
    continent: 'Asia',
  },
  Barbados: {
    continent: 'North America',
  },
  Belarus: {
    continent: 'Europe',
  },
  Belgium: {
    continent: 'Europe',
  },
  Benin: {
    continent: 'Africa',
  },
  Bolivia: {
    continent: 'South America',
  },
  'Bosnia and Herzegovina': {
    continent: 'Europe',
  },
  Botswana: {
    continent: 'Africa',
  },
  Brazil: {
    continent: 'South America',
    showLabel: true,
  },
  Bulgaria: {
    continent: 'Europe',
  },
  'Burkina Faso': {
    continent: 'Africa',
  },
  Burundi: {
    continent: 'Africa',
  },
  Cambodia: {
    continent: 'Asia',
  },
  Cameroon: {
    continent: 'Africa',
  },
  Canada: {
    continent: 'North America',
  },
  'Cape Verde': {
    continent: 'Africa',
  },
  'Central African Republic': {
    continent: 'Africa',
  },
  Chad: {
    continent: 'Africa',
  },
  Chile: {
    continent: 'South America',
  },
  China: {
    continent: 'Asia',
    showLabel: true,
  },
  Colombia: {
    continent: 'South America',
  },
  Comoros: {
    continent: 'Africa',
  },
  Congo: {
    continent: 'Africa',
  },
  'Costa Rica': {
    continent: 'North America',
  },
  "Cote d'Ivoire": {
    continent: 'Africa',
  },
  Croatia: {
    continent: 'Europe',
  },
  Cuba: {
    continent: 'North America',
  },
  Cyprus: {
    continent: 'Europe',
  },
  Czechia: {
    continent: 'Europe',
  },
  'Democratic Republic of Congo': {
    continent: 'Africa',
  },
  Denmark: {
    continent: 'Europe',
  },
  Djibouti: {
    continent: 'Africa',
  },
  Dominica: {
    continent: 'North America',
  },
  'Dominican Republic': {
    continent: 'North America',
  },
  Ecuador: {
    continent: 'South America',
  },
  Egypt: {
    continent: 'Africa',
  },
  'El Salvador': {
    continent: 'North America',
  },
  'Equatorial Guinea': {
    continent: 'Africa',
  },
  Estonia: {
    continent: 'Europe',
  },
  Eswatini: {
    continent: 'Africa',
  },
  Ethiopia: {
    continent: 'Africa',
  },
  Finland: {
    continent: 'Europe',
  },
  France: {
    continent: 'Europe',
  },
  Gabon: {
    continent: 'Africa',
  },
  Gambia: {
    continent: 'Africa',
  },
  Georgia: {
    continent: 'Asia',
  },
  Germany: {
    continent: 'Europe',
  },
  Ghana: {
    continent: 'Africa',
  },
  Greece: {
    continent: 'Europe',
  },
  Guatemala: {
    continent: 'North America',
  },
  Guinea: {
    continent: 'Africa',
  },
  'Guinea-Bissau': {
    continent: 'Africa',
  },
  Haiti: {
    continent: 'North America',
  },
  Honduras: {
    continent: 'North America',
  },
  'Hong Kong': {
    continent: 'Asia',
  },
  Hungary: {
    continent: 'Europe',
  },
  Iceland: {
    continent: 'Europe',
  },
  India: {
    continent: 'Asia',
    showLabel: true,
  },
  Indonesia: {
    continent: 'Asia',
  },
  Iran: {
    continent: 'Asia',
  },
  Iraq: {
    continent: 'Asia',
  },
  Ireland: {
    continent: 'Europe',
  },
  Israel: {
    continent: 'Asia',
  },
  Italy: {
    continent: 'Europe',
  },
  Jamaica: {
    continent: 'North America',
  },
  Japan: {
    continent: 'Asia',
    showLabel: true,
  },
  Jordan: {
    continent: 'Asia',
  },
  Kazakhstan: {
    continent: 'Asia',
  },
  Kenya: {
    continent: 'Africa',
  },
  Kuwait: {
    continent: 'Asia',
  },
  Kyrgyzstan: {
    continent: 'Asia',
  },
  Laos: {
    continent: 'Asia',
  },
  Latvia: {
    continent: 'Europe',
  },
  Lebanon: {
    continent: 'Asia',
  },
  Lesotho: {
    continent: 'Africa',
  },
  Liberia: {
    continent: 'Africa',
  },
  Libya: {
    continent: 'Africa',
  },
  Lithuania: {
    continent: 'Europe',
  },
  Luxembourg: {
    continent: 'Europe',
  },
  Madagascar: {
    continent: 'Africa',
  },
  Malawi: {
    continent: 'Africa',
  },
  Malaysia: {
    continent: 'Asia',
  },
  Mali: {
    continent: 'Africa',
  },
  Malta: {
    continent: 'Europe',
  },
  Mauritania: {
    continent: 'Africa',
  },
  Mauritius: {
    continent: 'Africa',
  },
  Mexico: {
    continent: 'North America',
  },
  Moldova: {
    continent: 'Europe',
  },
  Mongolia: {
    continent: 'Asia',
  },
  Montenegro: {
    continent: 'Europe',
  },
  Morocco: {
    continent: 'Africa',
  },
  Mozambique: {
    continent: 'Africa',
  },
  Myanmar: {
    continent: 'Asia',
  },
  Namibia: {
    continent: 'Africa',
  },
  Nepal: {
    continent: 'Asia',
  },
  Netherlands: {
    continent: 'Europe',
  },
  'New Zealand': {
    continent: 'Oceania',
  },
  Nicaragua: {
    continent: 'North America',
  },
  Niger: {
    continent: 'Africa',
  },
  Nigeria: {
    continent: 'Africa',
    showLabel: true,
  },
  'North Korea': {
    continent: 'Asia',
    showLabel: true,
  },
  'North Macedonia': {
    continent: 'Europe',
  },
  Norway: {
    continent: 'Europe',
  },
  Oman: {
    continent: 'Asia',
  },
  Pakistan: {
    continent: 'Asia',
  },
  Palestine: {
    continent: 'Asia',
  },
  Panama: {
    continent: 'North America',
  },
  Paraguay: {
    continent: 'South America',
  },
  Peru: {
    continent: 'South America',
  },
  Philippines: {
    continent: 'Asia',
  },
  Poland: {
    continent: 'Europe',
  },
  Portugal: {
    continent: 'Europe',
  },
  'Puerto Rico': {
    continent: 'North America',
  },
  Qatar: {
    continent: 'Asia',
  },
  Romania: {
    continent: 'Europe',
  },
  Russia: {
    continent: 'Europe',
    showLabel: true,
  },
  Rwanda: {
    continent: 'Africa',
  },
  'Saint Lucia': {
    continent: 'North America',
  },
  'Sao Tome and Principe': {
    continent: 'Africa',
  },
  'Saudi Arabia': {
    continent: 'Asia',
  },
  Senegal: {
    continent: 'Africa',
  },
  Serbia: {
    continent: 'Europe',
  },
  Seychelles: {
    continent: 'Africa',
  },
  'Sierra Leone': {
    continent: 'Africa',
  },
  Singapore: {
    continent: 'Asia',
  },
  Slovakia: {
    continent: 'Europe',
  },
  Slovenia: {
    continent: 'Europe',
  },
  'South Africa': {
    continent: 'Africa',
    showLabel: true,
  },
  'South Korea': {
    continent: 'Asia',
  },
  Spain: {
    continent: 'Europe',
  },
  'Sri Lanka': {
    continent: 'Asia',
  },
  Sweden: {
    continent: 'Europe',
  },
  Switzerland: {
    continent: 'Europe',
    showLabel: true,
  },
  Syria: {
    continent: 'Asia',
  },
  Taiwan: {
    continent: 'Asia',
  },
  Tajikistan: {
    continent: 'Asia',
  },
  Tanzania: {
    continent: 'Africa',
  },
  Thailand: {
    continent: 'Asia',
  },
  Togo: {
    continent: 'Africa',
  },
  'Trinidad and Tobago': {
    continent: 'North America',
  },
  Tunisia: {
    continent: 'Africa',
  },
  Turkey: {
    continent: 'Asia',
  },
  Turkmenistan: {
    continent: 'Asia',
  },
  Uganda: {
    continent: 'Africa',
  },
  Ukraine: {
    continent: 'Europe',
  },
  'United Arab Emirates': {
    continent: 'Asia',
  },
  'United Kingdom': {
    continent: 'Europe',
  },
  'United States': {
    continent: 'North America',
    showLabel: true,
  },
  Uruguay: {
    continent: 'South America',
  },
  Uzbekistan: {
    continent: 'Asia',
  },
  Venezuela: {
    continent: 'South America',
  },
  Vietnam: {
    continent: 'Asia',
  },
  Yemen: {
    continent: 'Asia',
  },
  Zambia: {
    continent: 'Africa',
  },
  Zimbabwe: {
    continent: 'Africa',
  },
} as const;
