import { SelectChangeEvent } from '@mui/material';
import {
  MouseEventHandler,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react';

import { playButtonTypes } from '../components/PlayButton/PlayButton';
import {
  AppContext,
  AppUpdateContext,
} from '../providers/app/AppContextProvider';
import { updateIsAutoPlaying, updateYear } from '../providers/app/appReducer';

const useSlider = () => {
  const { data, year, isAutoPlaying } = useContext(AppContext);
  const dispatch = useContext(AppUpdateContext);

  const years = useMemo(() => {
    return Array.from(new Set(data.map(d => d.year))).sort((a, b) => a - b);
  }, [data]);

  const marks = useMemo(() => {
    return years.map((_, index) => ({
      value: index,
    }));
  }, [years]);

  const menuItems = useMemo(() => {
    return years.map((year, index) => ({
      label: year,
      value: index,
    }));
  }, [years]);

  const range = useMemo(() => {
    return {
      min: 0,
      max: marks.length - 1,
    };
  }, [marks]);

  const value = useMemo(() => {
    return years.indexOf(year);
  }, [years, year]);

  const onSliderChange = useCallback(
    (event: Event, value: number | Array<number>, activeThumb: number) => {
      const index = typeof value === 'number' ? value : value[0];
      dispatch(updateYear(years[index]));
    },
    [dispatch, years],
  );

  const onSelectChange = useCallback(
    (event: SelectChangeEvent<number>, child: ReactNode) => {
      const index = event.target.value;
      dispatch(
        updateYear(
          years[typeof index === 'string' ? parseFloat(index) : index],
        ),
      );
    },
    [dispatch, years],
  );

  const onPlayButtonClick: MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      dispatch(updateIsAutoPlaying(!isAutoPlaying));
    }, [dispatch, isAutoPlaying]);

  const play = useCallback(() => {
    const currYearIndex = years.indexOf(year);
    const nextYearIndex = currYearIndex + 1;
    const targetIndex = nextYearIndex < years.length ? nextYearIndex : 0;

    dispatch(updateYear(years[targetIndex]));
  }, [years, year, dispatch]);

  useEffect(() => {
    const intervalID = window.setInterval(() => {
      if (isAutoPlaying) play();
    }, 80);

    return () => {
      window.clearInterval(intervalID);
    };
  }, [isAutoPlaying, play]);

  return {
    sliderProps: {
      marks,
      value,
      ...range,
      onChange: onSliderChange,
    },
    selectProps: {
      menuItems,
      value,
      onChange: onSelectChange,
    },
    playButtonProps: {
      type: isAutoPlaying ? playButtonTypes.pause : playButtonTypes.play,
      onClick: onPlayButtonClick,
    },
  };
};

export default useSlider;