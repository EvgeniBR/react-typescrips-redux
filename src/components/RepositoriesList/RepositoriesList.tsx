import React, {useState} from 'react';
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import './RepositoriesList.styles.scss'

const RepositoriesList: React.FC = () => {
const [term, setTerm] = useState('');

const { searchRepositpries } = useActions();
const {data, error, loading} = useTypedSelector((state) => state.repositories);
const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  searchRepositpries(term);
}
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={term} onChange={e => setTerm(e.target.value)}/>
        <input type="submit" value="SEARCH" />
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && 
      data.map((name)=>{
        return <div key={name}>{name}</div>  
      })}
    </div>
  )
}
export default RepositoriesList;