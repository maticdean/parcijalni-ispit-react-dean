import React from 'react';
import PropTypes from 'prop-types';

function RepoList({ repos }) {
  return (
    <div className="repos">
      <strong>REPOSITORIES:</strong>
      <ul>
        {repos?.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoList;
