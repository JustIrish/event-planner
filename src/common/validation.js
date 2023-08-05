export const validationRules = {
  title: {
    required: 'Title is required',
    minLength: {
      value: 3,
      message: 'Name must have at least 3 characters',
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
    pattern: {
      value: /^(?=[a-z0-9])[a-z0-9\s]{9,80}[a-z0-9.]$/i,
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
      message: 'Location  must have at least 15 characters',
    },
    pattern: {
      value: /^(?=[a-z0-9])[a-z0-9\s]{2,15}[a-z0-9]$/i,
      message: 'Invalid input',
    },
  },
};

//   /^(?=[a-z0-9])[a-z0-9\s]{2,30}[a-z0-9]$/i

//  /^[a-zA-Z0-9]+$/
