import { FormControl, Select as MUISelect, MenuItem } from '@mui/material';
import { FC } from 'react';

import useSlider from '../../hooks/useSlider';
import PlayButton from '../PlayButton/PlayButton';

type Select = {
  className?: string;
};

const Select: FC<Select> = ({ className }) => {
  const {
    selectProps: { menuItems, value, onChange },
    playButtonProps,
  } = useSlider();

  return (
    <div className={className}>
      <PlayButton {...playButtonProps} />
      <FormControl fullWidth>
        <MUISelect value={value} onChange={onChange}>
          {menuItems.map(item => (
            <MenuItem key={item.label} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </MUISelect>
      </FormControl>
    </div>
  );
};

export default Select;
