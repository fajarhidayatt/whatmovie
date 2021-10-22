import { useState } from 'react';

export default function FormSearch() {
  const [keyword, setKeyword] = useState('');

  const onSubmit = () => {
    sessionStorage.setItem('keyword', keyword);
  };

  return (
    <form action="/search">
      <div className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />
        <button
          className="btn btn-outline-purple"
          type="submit"
          onClick={onSubmit}
        >
          <i className="fa fa-search" aria-hidden />
        </button>
      </div>
    </form>
  );
}
