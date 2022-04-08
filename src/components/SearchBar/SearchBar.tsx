import React from 'react';

type SearchBarProps = {
    searchHandler : (key: string) => void,
}

function SearchBar(props: SearchBarProps): React.ReactElement {
  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    props.searchHandler(event.target.value);
  }
  return <input
    type='text'
    placeholder="Search Question..."
    onChange={handleSearch}/>;
}

export default SearchBar;
