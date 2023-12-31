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
  BtnWrap,
} from './EventForm.styled';
import { RiArrowDownSLine } from 'react-icons/ri';
import { VscClose } from 'react-icons/vsc';

import { validationRules } from 'common/validation';
import { categories } from 'data/categories';
import { priority } from 'data/priority';
import Button from 'components/Button/Button';
import SelectField from './SelectField';
import InputTime from './InputTime/InputTime';
import InputDate from './InputDate/InputDate';

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
      console.log(date);
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
            <InputDate
              {...register('date', { required: 'required field' })}
              fieldName="date"
              initValue={event ? event.date : null}
              onSelect={onSeletClick}
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
              {...register('category', { required: 'required field' })}
              fieldName="category"
              initValue={event ? event.category : null}
              icon={RiArrowDownSLine}
              data={categories}
              onSelect={onSeletClick}
              style={{
                outlineColor: errors.category && 'transparent',
                borderColor: errors.category && '#FF2B77',
              }}
            />
          </SelectWrap>
          {errors.category && (
            <ErrorStyled>{errors.category.message}</ErrorStyled>
          )}
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
              {...register('priority', { required: 'required field' })}
              fieldName="priority"
              initValue={event ? event.priority : null}
              icon={RiArrowDownSLine}
              data={priority}
              onSelect={onSeletClick}
              style={{
                outlineColor: errors.priority && 'transparent',
                borderColor: errors.priority && '#FF2B77',
              }}
            />
          </SelectWrap>
          {errors.priority && (
            <ErrorStyled>{errors.priority.message}</ErrorStyled>
          )}
        </LabelStyled>
        <BtnWrap>
          <Button option="button" type="submit" title={btnTitle} />
        </BtnWrap>
      </StyledForm>
    </>
  );
};

export default EventForm;
