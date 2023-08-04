import { useForm } from 'react-hook-form';

import {
  StyledForm,
  LabelStyled,
  InputStyled,
  TextareaStyled,
  SelectStyled,
  SelectWrap,
} from './AddEventForm.styled';
import { RiArrowDownSLine } from 'react-icons/ri';
import { VscClose } from 'react-icons/vsc';

import { categories } from 'data/categories';

const AddEventForm = () => {
  const { handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <LabelStyled>
          Title
          <SelectWrap>
            <VscClose size="24" color="#7b61ff" />
            <InputStyled
              placeholder="Input"
              type="text"
              name="title"
              // ref={...register('example')}
            />
          </SelectWrap>
        </LabelStyled>
        <LabelStyled>
          Description
          <TextareaStyled
            placeholder="Input"
            type="text"
            rows="5"
            name="description"
            // ref={...register('example')}
          />
        </LabelStyled>
        <LabelStyled>
          Select date
          <InputStyled
            placeholder="Input"
            type="date"
            name="date"
            // ref={...register('example')}
          />
        </LabelStyled>
        <LabelStyled>
          Select time
          <InputStyled
            placeholder="Input"
            type="time"
            name="time"
            // ref={...register('example')}
          />
        </LabelStyled>
        <LabelStyled>
          Location
          <SelectWrap>
            <VscClose size="24" color="#7b61ff" />
            <InputStyled
              placeholder="Input"
              type="text"
              name="location"
              // ref={...register('example')}
            />
          </SelectWrap>
        </LabelStyled>
        <LabelStyled>
          Category
          <SelectWrap>
            <RiArrowDownSLine size="24" color="#7b61ff" />
            <SelectStyled
              placeholder="Select"
              name="category"
              // ref={...register('example')}
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
          <InputStyled
            placeholder="Input"
            disabled
            name="ticture"
            // ref={...register('example')}
          />
        </LabelStyled>
        <LabelStyled>
          Priority
          <SelectWrap>
            <RiArrowDownSLine size="24" color="#7b61ff" />
            <SelectStyled
              placeholder="Select"
              name="priority"
              selected
              // ref={...register('example')}
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
