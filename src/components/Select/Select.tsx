import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import MUISelect from '@mui/material/Select';
import clsx from 'clsx';
import { FC } from 'react';

import useSlider from '../../hooks/useSlider';
import PlayButton from '../PlayButton/PlayButton';

import style from './Select.module.scss';

type Select = {
  className?: string;
};

const Select: FC<Select> = ({ className }) => {
  const {
    selectProps: { menuItems, value, onChange },
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
        <MUISelect className="bg-white" value={value} onChange={onChange}>
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

export default Select;
