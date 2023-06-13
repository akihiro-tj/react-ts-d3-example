import { SelectChangeEvent } from '@mui/material/Select';
import {
  MouseEventHandler,
  ReactNode,
  SyntheticEvent,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { maxYear, minYear } from '../config';
import { AppContext } from '../providers/app/AppContextProvider';

const useYearSelector = () => {
  const { data } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const [year, setYear] = useState(NaN);

  const isAutoPlaying = useMemo(() => {
    return location.pathname === '/play';
  }, [location]);

  const parsedYear = useMemo(() => {
    const parsedYear = isAutoPlaying ? year : parseFloat(params.year || '');

    if (isNaN(parsedYear) || parsedYear < minYear || maxYear < parsedYear) {
      throw new Error();
    }

    return parsedYear;
  }, [params, year, isAutoPlaying]);

  const years = useMemo(() => {
    return Array.from(new Set(data.map(d => d.year)))
      .slice()
      .sort((a, b) => a - b);
  }, [data]);

  const nextYearIndex = useMemo(() => {
    const currYearIndex = years.indexOf(parsedYear);

    return currYearIndex + 1;
  }, [years, parsedYear]);

  useEffect(() => {
    if (isAutoPlaying) return;

    setYear(nextYearIndex === years.length ? years[0] : years[nextYearIndex]);
  }, [years, nextYearIndex, isAutoPlaying]);

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
    return years.indexOf(parsedYear);
  }, [years, parsedYear]);

  const onSliderChange = useCallback(
    (event: Event, value: number | Array<number>, activeThumb: number) => {
      const index = typeof value === 'number' ? value : value[0];
      navigate(`/${years[index]}`);
    },
    [years, navigate],
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
      navigate(`/${parsedYear}`);
    },
    [navigate, parsedYear],
  );

  const play = useCallback(
    (firedByClick?: boolean) => {
      if (nextYearIndex === years.length) {
        if (firedByClick) {
          setYear(years[0]);
        } else {
          navigate(`/${parsedYear}`);
        }
      } else {
        setYear(years[nextYearIndex]);
      }
    },
    [years, parsedYear, navigate, nextYearIndex],
  );

  const onPlayButtonClick: MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      play(true);
      navigate(isAutoPlaying ? `/${parsedYear}` : '/play');
    }, [isAutoPlaying, play, navigate, parsedYear]);

  useEffect(() => {
    const intervalID = window.setInterval(() => {
      if (isAutoPlaying) play();
    }, 80);

    return () => {
      window.clearInterval(intervalID);
    };
  }, [isAutoPlaying, play]);

  return {
    year: parsedYear,
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
