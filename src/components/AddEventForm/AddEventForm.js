import { useForm } from 'react-hook-form';

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

const AddEventForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const handleFormSubmit = data => {
    console.log(data);
    //  onSubmit(formData, reset);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(handleFormSubmit)}>
        <LabelStyled>
          Title
          <SelectWrap>
            <VscClose size="24" color="#7b61ff" />
            <InputStyled
              {...register('title', validationRules.title)}
              placeholder="Input"
              type="text"
              name="title"
              style={{
                outlineColor: errors.title && '#FF2B77',
                borderColor: errors.title && 'transparent',
              }}
            />
          </SelectWrap>
          {errors.title && <ErrorStyled>{errors.title.message}</ErrorStyled>}
        </LabelStyled>
        <LabelStyled>
          Description
          <TextareaStyled
            {...register('description', validationRules.description)}
            placeholder="Input"
            type="text"
            rows="5"
            name="description"
          />
          {errors.description && (
            <ErrorStyled>{errors.description.message}</ErrorStyled>
          )}
        </LabelStyled>
        <LabelStyled>
          Select date
          <InputStyled
            {...register('date', { required: 'required field' })}
            placeholder="Input"
            type="date"
            name="date"
          />
          {errors.date && <ErrorStyled>{errors.date.message}</ErrorStyled>}
        </LabelStyled>
        <LabelStyled>
          Select time
          <InputStyled
            {...register('time', { required: 'required field' })}
            placeholder="Input"
            type="time"
            name="time"
          />
          {errors.time && <ErrorStyled>{errors.time.message}</ErrorStyled>}
        </LabelStyled>
        <LabelStyled>
          Location
          <SelectWrap>
            <VscClose size="24" color="#7b61ff" />
            <InputStyled
              {...register('location', validationRules.location)}
              placeholder="Input"
              type="text"
              name="location"
              style={{
                outlineColor: errors.location && '#FF2B77',
                borderColor: errors.location && 'transparent',
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
        <LabelStyled>
          Add picture
          <InputStyled placeholder="Input" disabled name="ticture" />
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
              <option disabled>Select Priority</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </SelectStyled>
          </SelectWrap>
        </LabelStyled>
        <button type="submit">Submit</button>
      </StyledForm>
    </>
  );
};

export default AddEventForm;
