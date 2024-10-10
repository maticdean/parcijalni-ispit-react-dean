import React, { useState } from 'react';
import PropTypes from 'prop-types';

function UserForm({ onUsernameChange, onFetchUserData }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onUsernameChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFetchUserData();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">GitHub Username:</label>
      <input 
        type="text" 
        id="username"
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="e.g. facebook"
      />
      <button type="submit">GO!</button>
    </form>
  );
}

UserForm.propTypes = {
  onUsernameChange: PropTypes.func.isRequired,
  onFetchUserData: PropTypes.func.isRequired,
};

export default UserForm;
