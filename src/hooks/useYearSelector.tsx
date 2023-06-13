import { SelectChangeEvent } from '@mui/material/Select';
import {
  MouseEventHandler,
  ReactNode,
  SyntheticEvent,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  AppContext,
  AppUpdateContext,
} from '../providers/app/AppContextProvider';
import { updateIsAutoPlaying } from '../providers/app/appReducer';

const useYearSelector = () => {
  const { data, isAutoPlaying } = useContext(AppContext);
  const dispatch = useContext(AppUpdateContext);
  const params = useParams();
  const navigate = useNavigate();

  const year = useMemo(() => {
    return parseFloat(params.year || '');
  }, [params]);

  const years = useMemo(() => {
    return Array.from(new Set(data.map(d => d.year)))
      .slice()
      .sort((a, b) => a - b);
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
      dispatch(updateIsAutoPlaying(false));
      navigate(`/${years[index]}`);
    },
    [dispatch, years, navigate],
  );

  const onSelectChange = useCallback(
    (event: SelectChangeEvent<number>, child: ReactNode) => {
      const index = event.target.value;
      navigate(
        `/${years[typeof index === 'string' ? parseFloat(index) : index]}`,
      );
    },
    [years, navigate],
  );

  const onSelectOpen = useCallback(
    (event: SyntheticEvent<Element, Event>) => {
      dispatch(updateIsAutoPlaying(false));
    },
    [dispatch],
  );

  const play = useCallback(
    (firedByClick?: boolean) => {
      const currYearIndex = years.indexOf(year);
      const nextYearIndex = currYearIndex + 1;

      if (nextYearIndex === years.length) {
        if (firedByClick) {
          navigate(`/${years[0]}`);
        } else {
          dispatch(updateIsAutoPlaying(false));
        }
      } else {
        navigate(`/${years[nextYearIndex]}`);
      }
    },
    [years, year, dispatch, navigate],
  );

  const onPlayButtonClick: MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      play(true);
      dispatch(updateIsAutoPlaying(!isAutoPlaying));
    }, [dispatch, isAutoPlaying, play]);

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
      onOpen: onSelectOpen,
    },
    playButtonProps: {
      isPlaying: isAutoPlaying,
      onClick: onPlayButtonClick,
    },
  };
};

export default useYearSelector;
