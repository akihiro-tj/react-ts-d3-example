import { MouseEventHandler, useCallback, useContext, useMemo } from 'react';

import { colors, continentNames, continents } from '../config';
import {
  AppContext,
  AppUpdateContext,
} from '../providers/app/AppContextProvider';
import { updateCheckBoxGroup } from '../providers/app/appReducer';
import { Continent } from '../types';

export const useCheckBoxGroup = () => {
  const { checkBoxGroup } = useContext(AppContext);
  const dispatch = useContext(AppUpdateContext);

  const items = useMemo(() => {
    return continents
      .map(continent => ({
        id: continent,
        label: continentNames[continent as keyof typeof continentNames],
        color: colors[continent],
        checked: checkBoxGroup[continent],
      }))
      .slice()
      .sort((a, b) => {
        return (
          continents.indexOf(a.id as typeof continents[number]) -
          continents.indexOf(b.id as typeof continents[number])
        );
      });
  }, [checkBoxGroup]);

  const onClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    e => {
      const id = e.currentTarget.getAttribute('data-id') as Continent;
      const checked = e.currentTarget.getAttribute('data-checked') !== null;
      dispatch(updateCheckBoxGroup(id, !checked));
    },
    [dispatch],
  );

  return { items, onClick };
};
