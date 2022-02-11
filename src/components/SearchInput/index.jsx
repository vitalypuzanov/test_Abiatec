import {useCallback, useState} from 'react';
import Button from '../Button';
import './index.css';

const SearchInput = ({onSearch}) => {
  const [value, setValue] = useState('');

  const onSearchChange = useCallback((e) => setValue(e.target.value), []);
  const onSubmit = useCallback(() => onSearch(value), [value, onSearch]);
  console.log(value);
  return (
    <div className="SearchInput">
      <input value={value} onChange={onSearchChange} />
      <Button onClick={onSubmit}>Submit</Button>
    </div>
  );
};

export default SearchInput;
