import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { FC } from 'react';

import { useCheckBoxGroup } from '../../hooks/useCheckBoxGroup';
import CheckBoxIcon from '../CheckBoxIcon/CheckBoxIcon';
import CheckBoxLabel from '../CheckBoxLabel/CheckBoxLabel';

type CheckBoxGroup = {
  className?: string;
};

const CheckBoxGroup: FC<CheckBoxGroup> = ({ className }) => {
  const { items, onClick } = useCheckBoxGroup();

  return (
    <div className={className}>
      <FormGroup className="!flex-row justify-start gap-2">
        {items.map(item => (
          <FormControlLabel
            key={item.id}
            className="!mx-0 w-40 grow bg-white p-2 hover:opacity-80"
            label={<CheckBoxLabel label={item.label} color={item.color} />}
            control={
              <Checkbox
                className="!p-0"
                icon={<CheckBoxIcon checked={false} />}
                checkedIcon={<CheckBoxIcon checked />}
                checked={item.checked}
                data-id={item.id}
                data-checked={item.checked || null}
                onClick={onClick}
              />
            }
          />
        ))}
      </FormGroup>
    </div>
  );
};

export default CheckBoxGroup;
