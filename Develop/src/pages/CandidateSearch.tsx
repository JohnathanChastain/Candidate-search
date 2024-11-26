import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';

const CandidateSearch = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!search) {
      return;
    }

    searchGithub(search).then((data) => {
      setResults(data.items);
    });
  }, [search]);

  const handleSearch = (e) => {
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

const CandidateSearch = () => {
  return <h1>CandidateSearch</h1>;
};

export default CandidateSearch;
