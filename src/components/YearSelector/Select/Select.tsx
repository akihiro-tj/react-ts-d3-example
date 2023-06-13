import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import MUISelect from '@mui/material/Select';
import clsx from 'clsx';
import { FC } from 'react';

import useSlider from '../../../hooks/useYearSelector';
import { PlayButton } from '../PlayButton';

import style from './Select.module.scss';

type SelectProps = {
  className?: string;
};

export const Select: FC<SelectProps> = ({ className }) => {
  const {
    selectProps: { menuItems, value, onChange, onOpen },
  } = useSlider();

  return (
    <div
      className={clsx(
        className,
        'flex w-48 items-center justify-between gap-2 py-4',
        style.select,
      )}
    >
      <FormControl fullWidth>
        <MUISelect
          className="bg-white"
          value={value}
          onChange={onChange}
          onOpen={onOpen}
        >
          {menuItems.map(item => (
            <MenuItem key={item.label} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </MUISelect>
      </FormControl>
      <PlayButton />
    </div>
  );
};
