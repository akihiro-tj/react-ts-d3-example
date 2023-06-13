import { FC } from 'react';

import { Prose } from '../Prose';

export const Footer: FC = () => {
  return (
    <>
      <hr className="mx-3 mb-10 mt-14 border-slate-200" />
      <Prose>
        <ul>
          <li>
            ソースコード:{' '}
            <a
              href="https://github.com/akihiro-tj/react-ts-d3-example"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            データの出所:{' '}
            <a
              href="https://ourworldindata.org/grapher/life-expectancy-vs-gdp-per-capita"
              target="_blank"
              rel="noreferrer"
            >
              Our World in Data
            </a>
          </li>
        </ul>
      </Prose>
    </>
  );
};
