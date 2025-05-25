
export const getErrorMessage = (error) => {
  if (error.response) {
    return error.response.data?.message || 'Something went wrong';
  } else if (error.request) {
    return 'No response from server';
  } else if (error.message === 'Network Error') {
    return 'Please check your internet connection';
  } else {
    return 'An unexpected error occurred';
  }
};
