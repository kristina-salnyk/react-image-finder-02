import messages from './messages';

const getMessage = ({ count, query, error }) => {
  if (error) {
    return messages.error;
  }
  if (count === 0 && query === '') {
    return messages.emptyQuery;
  }
  if (count === 0 && query !== '') {
    return messages.noResults;
  }
  return null;
};

export default getMessage;
