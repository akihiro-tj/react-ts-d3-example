import { MouseEventHandler, useCallback, useContext, useMemo } from 'react';

import { continentNames } from '../constant';
import {
  AppContext,
  AppUpdateContext,
} from '../providers/app/AppContextProvider';
import { updateCheckBoxGroup } from '../providers/app/appReducer';
import { Continent } from '../types';

import useColors from './useColors';

export const useCheckBoxGroup = () => {
  const { data, checkBoxGroup } = useContext(AppContext);
  const dispatch = useContext(AppUpdateContext);

  const colors = useColors();

  const items = useMemo(() => {
    const continents = Array.from(new Set(data.map(d => d.continent)));

    return continents
      .map(continent => ({
        id: continent,
        label: continentNames[continent as keyof typeof continentNames],
        color: colors[continent],
        checked: checkBoxGroup[continent],
      }))
      .sort((a, b) => {
        return (
          continents.indexOf(a.id as typeof continents[number]) -
          continents.indexOf(b.id as typeof continents[number])
        );
      });
  }, [data, colors, checkBoxGroup]);

  const handleCheckBoxClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    e => {
      const id = e.currentTarget.getAttribute('data-id') as Continent;
      const checked = e.currentTarget.getAttribute('data-checked') !== null;
      dispatch(updateCheckBoxGroup(id, !checked));
    },
    [dispatch],
  );

  return { items, handleCheckBoxClick };
};
