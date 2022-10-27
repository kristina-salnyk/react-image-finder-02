import {
  Button,
  ButtonLabel,
  Input,
  Searchbar as SearchbarContainer,
  SearchForm,
} from './Searchbar.styled';
import { BiSearchAlt2 } from 'react-icons/bi';
import { Component } from 'react';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = { searchQuery: '' };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
  };

  render() {
    return (
      <SearchbarContainer>
        <SearchForm onSubmit={this.handleFormSubmit}>
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
            onChange={this.handleInputChange}
          />
        </SearchForm>
      </SearchbarContainer>
    );
  }
}

export default Searchbar;
