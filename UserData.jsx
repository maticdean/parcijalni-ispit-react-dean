import React from 'react';
import PropTypes from 'prop-types';
import RepoList from './RepoList.jsx';

function UserData({ userData, onReset }) {
  return (
    <div className="user-data-container">
        <div className="title-container">
            <img src={userData.avatar_url} alt="User avatar" />
            <h1>{userData.name}</h1>
        </div>
        <div className="content-container">
            <div className="content">
              <strong>BIO: </strong>
              <span>{userData.bio}</span>
            </div>
            <div className="content">
              <strong>LOCATION: </strong>
              <span>{userData.location}</span>
            </div>
            <RepoList repos={userData.repos} />
        </div>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

UserData.propTypes = {
  userData: PropTypes.object.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default UserData;
