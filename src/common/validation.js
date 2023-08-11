export const validationRules = {
  title: {
    required: 'Title is required',
    minLength: {
      value: 3,
      message: 'The title must have at least 3 characters',
    },
    maxLength: {
      value: 30,
      message: 'The title must contain no more than 30 characters',
    },
    pattern: {
      value: /^(?=[a-z0-9])[a-z0-9\s]{2,30}[a-z0-9]$/i,
      message: 'Invalid input',
    },
  },

  description: {
    required: 'Description is required',
    minLength: {
      value: 10,
      message: 'Name must have at least 10 characters',
    },
    maxLength: {
      value: 200,
    },
    pattern: {
      value: /^(?=[a-z0-9\s]).*[a-z0-9\s.*+!,.?-]$/i,
      message: 'Invalid input',
    },
  },

  location: {
    required: 'Location is required',
    minLength: {
      value: 3,
      message: 'Location  must have at least 3 characters',
    },
    maxLength: {
      value: 15,
      message: 'The location must contain no more than 15 characters',
    },
    pattern: {
      value: /^(?=[a-z0-9])[a-z0-9\s]{2,15}[a-z0-9]$/i,
      message: 'Invalid input',
    },
  },
};

//   /^(?=[a-z0-9])[a-z0-9\s]{2,30}[a-z0-9]$/i

//  /^[a-zA-Z0-9]+$/
