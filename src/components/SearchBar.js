import {useState} from 'react';

const SearchBar = (props) => {
  const [term, setTerm] = useState('');

  const onSearchHandler = (event) => {
    setTerm(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onTermSubmit(term)
  }

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit} >
        <div className="field" >
          <label>Video Search</label>
          <input type="text" value={term} onChange={onSearchHandler} />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;