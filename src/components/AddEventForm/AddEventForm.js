import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { useForm } from 'react-hook-form';

import { addEvent } from 'redux/events/eventsSlice';

import {
  StyledForm,
  LabelStyled,
  InputStyled,
  TextareaStyled,
  SelectStyled,
  ErrorStyled,
  SelectWrap,
} from './AddEventForm.styled';
import { RiArrowDownSLine } from 'react-icons/ri';
import { VscClose } from 'react-icons/vsc';

import { validationRules } from 'common/validation';
import { categories } from 'data/categories';
import Button from 'components/Buttons/Button';

const defaultPic = 'images/default-image.png';

const AddEventForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const handleFormSubmit = data => {
    const { title, description, date, time, location, category, priority } =
      data;

    const formatDate = date.slice(5).split('-').reverse().join('.');

    dispatch(
      addEvent({
        title,
        description,
        date: formatDate,
        time,
        location,
        category,
        picture: defaultPic,
        priority,
      })
    );
    reset();
    toast.success('New event has been added!');
    navigate('/', { replace: true });
  };

  const onCloseClick = () => {};

  return (
    <>
      <StyledForm onSubmit={handleSubmit(handleFormSubmit)}>
        <LabelStyled>
          Title
          <SelectWrap>
            <VscClose
              onClick={onCloseClick}
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
          </SelectWrap>
          {errors.title && <ErrorStyled>{errors.title.message}</ErrorStyled>}
        </LabelStyled>
        <LabelStyled style={{ gridRowStart: 2, gridRowEnd: 4 }}>
          Description
          <SelectWrap>
            <VscClose
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
          </SelectWrap>
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
            <InputStyled
              {...register('time', { required: 'required field' })}
              placeholder="Input"
              type="time"
              name="time"
            />
          </SelectWrap>
          {errors.time && <ErrorStyled>{errors.time.message}</ErrorStyled>}
        </LabelStyled>

        <LabelStyled>
          Location
          <SelectWrap>
            <VscClose
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
          </SelectWrap>
          {errors.location && (
            <ErrorStyled>{errors.location.message}</ErrorStyled>
          )}
        </LabelStyled>
        <LabelStyled>
          Category
          <SelectWrap>
            <RiArrowDownSLine size="24" color="#7b61ff" />
            <SelectStyled
              {...register('category')}
              placeholder="Select"
              name="category"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </SelectStyled>
          </SelectWrap>
        </LabelStyled>
        <LabelStyled style={{ color: '#ACA7C3' }}>
          Add picture
          <SelectWrap>
            <VscClose size="24" color="#ACA7C3" />
            <InputStyled
              placeholder="Input"
              disabled
              name="picture"
              style={{ borderColor: '#ACA7C3', outlineColor: 'transparent' }}
            />
          </SelectWrap>
        </LabelStyled>
        <LabelStyled>
          Priority
          <SelectWrap>
            <RiArrowDownSLine size="24" color="#7b61ff" />
            <SelectStyled
              {...register('priority')}
              placeholder="Select"
              name="priority"
              selected
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </SelectStyled>
          </SelectWrap>
        </LabelStyled>
        <Button option="button" type="submit" title="Add event" />
      </StyledForm>
    </>
  );
};

export default AddEventForm;
