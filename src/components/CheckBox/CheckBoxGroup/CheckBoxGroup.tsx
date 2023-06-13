import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { FC } from 'react';

import { useCheckBox } from '../../../hooks/useCheckBox';
import { CheckBoxIcon } from '../CheckBoxIcon';
import { CheckBoxLabel } from '../CheckBoxLabel';

type CheckBoxGroupProps = {
  className?: string;
};

export const CheckBoxGroup: FC<CheckBoxGroupProps> = ({ className }) => {
  const { items, onClick } = useCheckBox();

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
