import { useState, useEffect, SetStateAction } from 'react';
import { searchGithub } from '../api/API';

const CandidateSearch = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<{ id: number; html_url: string; login: string }[]>([]);

  useEffect(() => {
    if (!search) {
      console.log('No search term');
      return;
    }
    console.log(search);

    searchGithub().then((data) => {
      console.log(data);
      setResults(data);
    });
  }, [search]);

  const handleSearch = (e: { preventDefault: () => void; target: { value: SetStateAction<string>; }; }) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <div>
      <h1>Candidate Search</h1>
      <input type="text" value={search} onChange={handleSearch} />
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            <a href={result.html_url}>{result.login}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default CandidateSearch;
