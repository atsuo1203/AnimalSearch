import React from 'react';

const SearchResult = (props) => (
  <div>
    <p>name</p>
    <p>{props.name}</p>
    <p>resultText</p>
    <ul>{props.resultText.map((line, i) => (<li key={i}>{line}</li>))}</ul>
  </div>
);

export default SearchResult;
