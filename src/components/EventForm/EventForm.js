import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { useForm } from 'react-hook-form';

import { addEvent, editEvent } from 'redux/events/eventsSlice';

import {
  StyledForm,
  LabelStyled,
  InputStyled,
  TextareaStyled,
  ErrorStyled,
  InputWrap,
  SelectWrap,
} from './EventForm.styled';
import { RiArrowDownSLine } from 'react-icons/ri';
import { VscClose } from 'react-icons/vsc';

import { validationRules } from 'common/validation';
import { categories } from 'data/categories';
import { priority } from 'data/priority';
import Button from 'components/Button/Button';
import SelectField from './SelectField';
import InputTime from './InputTime/InputTime';

const defaultPic = 'images/default-image.png';

const EventForm = ({ event, btnTitle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  useEffect(() => {
    if (event) {
      Object.keys(event).forEach(fieldName => {
        setValue(fieldName, event[fieldName]);
      });
    }
  }, [event, setValue]);

  const handleFormSubmit = data => {
    const { title, description, date, time, location, category, priority } =
      data;

    if (btnTitle === 'Add event') {
      dispatch(
        addEvent({
          title,
          description,
          date,
          time,
          location,
          category,
          picture: defaultPic,
          priority,
        })
      );
      toast.success('New event has been added!');
    } else {
      dispatch(
        editEvent({
          id: event.id,
          title,
          description,
          date,
          time,
          location,
          category,
          picture: event.picture,
          priority,
        })
      );
      toast.success('Changes made successfully');
    }
    reset();
    navigate('/', { replace: true });
  };

  const onCloseClick = fieldName => {
    setValue(fieldName, '');
  };

  const onSeletClick = (fieldName, value) => {
    setValue(fieldName, value);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(handleFormSubmit)}>
        <LabelStyled>
          Title
          <InputWrap>
            <VscClose
              onClick={() => onCloseClick('title')}
              size="24"
              color={errors.title ? '#FF2B77' : '#7b61ff'}
            />
            <InputStyled
              {...register('title', validationRules.title)}
              placeholder="Input"
              type="text"
              name="title"
              style={{
                outlineColor: errors.title && 'transparent',
                borderColor: errors.title && '#FF2B77',
              }}
            />
          </InputWrap>
          {errors.title && <ErrorStyled>{errors.title.message}</ErrorStyled>}
        </LabelStyled>
        <LabelStyled style={{ gridRowStart: 2, gridRowEnd: 4 }}>
          Description
          <InputWrap>
            <VscClose
              onClick={() => onCloseClick('description')}
              size="24"
              color={errors.description ? '#FF2B77' : '#7b61ff'}
            />
            <TextareaStyled
              {...register('description', validationRules.description)}
              placeholder="Input"
              type="text"
              rows="5"
              name="description"
              style={{
                outlineColor: errors.description && 'transparent',
                borderColor: errors.description && '#FF2B77',
              }}
            />
          </InputWrap>
          {errors.description && (
            <ErrorStyled>{errors.description.message}</ErrorStyled>
          )}
        </LabelStyled>
        <LabelStyled>
          Select date
          <SelectWrap>
            <InputStyled
              {...register('date', { required: 'required field' })}
              placeholder="Input"
              type="date"
              name="date"
            />
          </SelectWrap>
          {errors.date && <ErrorStyled>{errors.date.message}</ErrorStyled>}
        </LabelStyled>
        <LabelStyled>
          Select time
          <SelectWrap>
            <InputTime
              {...register('time', { required: 'required field' })}
              fieldName="time"
              initValue={event ? event.time : null}
              onSelect={onSeletClick}
              style={{
                outlineColor: errors.time && 'transparent',
                borderColor: errors.time && '#FF2B77',
              }}
            />
          </SelectWrap>
          {errors.time && <ErrorStyled>{errors.time.message}</ErrorStyled>}
        </LabelStyled>

        <LabelStyled>
          Location
          <InputWrap>
            <VscClose
              onClick={() => onCloseClick('location')}
              size="24"
              color={errors.location ? '#FF2B77' : '#7b61ff'}
            />
            <InputStyled
              {...register('location', validationRules.location)}
              placeholder="Input"
              type="text"
              name="location"
              style={{
                outlineColor: errors.location && 'transparent',
                borderColor: errors.location && '#FF2B77',
              }}
            />
          </InputWrap>
          {errors.location && (
            <ErrorStyled>{errors.location.message}</ErrorStyled>
          )}
        </LabelStyled>
        <LabelStyled>
          Category
          <SelectWrap>
            <SelectField
              {...register('category')}
              fieldName="category"
              initValue={event ? event.category : null}
              icon={RiArrowDownSLine}
              data={categories}
              onSelect={onSeletClick}
            />
          </SelectWrap>
        </LabelStyled>
        <LabelStyled style={{ color: '#ACA7C3' }}>
          Add picture
          <InputWrap>
            <VscClose size="24" color="#ACA7C3" />
            <InputStyled
              placeholder="Input"
              disabled
              name="picture"
              style={{ borderColor: '#ACA7C3', outlineColor: 'transparent' }}
            />
          </InputWrap>
        </LabelStyled>
        <LabelStyled>
          Priority
          <SelectWrap>
            <SelectField
              {...register('priority')}
              fieldName="priority"
              initValue={event ? event.priority : null}
              icon={RiArrowDownSLine}
              data={priority}
              onSelect={onSeletClick}
            />
          </SelectWrap>
        </LabelStyled>
        <Button option="button" type="submit" title={btnTitle} />
      </StyledForm>
    </>
  );
};

export default EventForm;
