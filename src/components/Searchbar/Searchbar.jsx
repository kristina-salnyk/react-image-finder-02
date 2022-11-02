import {
  Button,
  ButtonLabel,
  Input,
  Searchbar as SearchbarContainer,
  SearchForm,
} from './Searchbar.styled';
import { BiSearchAlt2 } from 'react-icons/bi';
import PropTypes from 'prop-types';
import useSearchbar from '../../hooks/useSearchbar';

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, handleInputChange, handleFormSubmit] =
    useSearchbar(onSubmit);

  return (
    <SearchbarContainer>
      <SearchForm onSubmit={handleFormSubmit}>
        <Button type="submit">
          <BiSearchAlt2 size="20" />
          <ButtonLabel>Search</ButtonLabel>
        </Button>
        <Input
          type="text"
          name="searchQuery"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleInputChange}
        />
      </SearchForm>
    </SearchbarContainer>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
