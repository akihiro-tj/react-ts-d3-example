import { FC } from 'react';

import useData from '../../../hooks/useData';
import { Chart } from '../../Chart';
import { CheckBoxGroup } from '../../CheckBox';
import { Footer } from '../../Footer';
import { Heading } from '../../Heading';
import { Select, Slider } from '../../YearSelector';
import { BackGround } from '../BackGround';
import { Card } from '../Card';
import { Rail } from '../Rail';

export const MainLayout: FC = () => {
  useData();

  return (
    <BackGround className="py-10">
      <Rail className="mb-6">
        <Heading />
        <CheckBoxGroup className="mx-3 sm:mx-auto" />
      </Rail>

      <Card className="mx-3 mb-6 max-w-screen-md md:mx-auto">
        <Chart />
      </Card>

      <Rail>
        <Slider className="mx-auto hidden pr-6 sm:flex" />
        <Select className="mx-auto flex sm:hidden" />
        <Footer />
      </Rail>
    </BackGround>
  );
};
