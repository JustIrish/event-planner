import { useState } from 'react';
import { Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './TimePicker.module.css';
import { Selected, TimePickerContainer, VisionLine } from './InputTime.styled';

export const TimePicker = ({ onSelectTime }) => {
  const [selectedHour, setSelectedHour] = useState(12);
  const [selectedMinute, setSelectedMinute] = useState(15);
  const [selectedPeriod, setSelectedPeriod] = useState('AM');

  const hours = Array.from({ length: 12 }, (_, index) => index + 1);
  const minutes = Array.from({ length: 60 }, (_, index) => index);
  const periods = ['AM', 'PM'];

  const handleHourChange = hour => {
    setSelectedHour(hour);
  };

  const handleMinuteChange = minute => {
    setSelectedMinute(minute);
  };

  const handlePeriodChange = period => {
    setSelectedPeriod(period);
  };

  const timeFormat = time => {
    return time < 10 ? `0${time}` : time;
  };

  const handleSelect = () => {
    const time = `${selectedHour}:${selectedMinute} ${selectedPeriod}`;
    onSelectTime(time);
  };

  return (
    <TimePickerContainer onClick={handleSelect}>
      <VisionLine></VisionLine>
      {/* hour */}
      <Swiper
        direction={'vertical'}
        className={styles.swiper}
        spaceBetween={0}
        mousewheel={true}
        modules={[Mousewheel]}
        initialSlide={8}
        onSlideChange={swiper =>
          handleHourChange(timeFormat(hours[swiper.activeIndex]))
        }
      >
        {hours.map(hour => (
          <SwiperSlide key={hour} className={styles.swiperSlide}>
            {({ isActive }) => (
              <Selected $isActive={isActive}>{timeFormat(hour)}</Selected>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* minute */}
      <Swiper
        direction={'vertical'}
        className={styles.swiper}
        spaceBetween={0}
        mousewheel={true}
        modules={[Mousewheel]}
        initialSlide={15}
        onSlideChange={swiper => {
          handleMinuteChange(timeFormat(minutes[swiper.activeIndex]));
        }}
      >
        {minutes.map(minute => (
          <SwiperSlide className={styles.swiperSlide} key={minute}>
            {({ isActive }) => (
              <Selected $isActive={isActive}>{timeFormat(minute)}</Selected>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* period */}
      <Swiper
        direction={'vertical'}
        className={styles.swiper}
        initialSlide={1}
        spaceBetween={0}
        mousewheel={true}
        modules={[Mousewheel]}
        onSlideChange={swiper => {
          handlePeriodChange(periods[swiper.activeIndex]);
        }}
      >
        {periods.map(period => (
          <SwiperSlide className={styles.swiperSlide} key={period}>
            {({ isActive }) => (
              <Selected $isActive={isActive}>{period}</Selected>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </TimePickerContainer>
  );
};
