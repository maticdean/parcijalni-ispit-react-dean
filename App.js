import React, { useState } from 'react';
import UserData from './UserData.jsx';
import UserForm from './UserForm.jsx';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState([]);

  const handleUsernameChange = (newUsername) => {
    setUsername(newUsername);
  };

  const handleReset = () => {
    setUsername('');
    setUserData([]);
  }

  const fetchUserData = async () => {
    if (username) {
      try {
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        const userRes = await userResponse.json();
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const reposRes = await response.json();
        const userData = {
          avatar_url: userRes.avatar_url,
          name: userRes.name,
          location: userRes.location,
          bio: userRes.bio,
          repos: reposRes?.map((repo) => ({
            id: repo.id,
            name: repo.name,
          })),
        }
        setUserData(userData);
      } catch (error) {
        console.error('Error fetching user and his data:', error);
      }
    }
  };

  return (
    <div>
      {userData.repos && userData.repos.length > 0 ? (
        <UserData userData={userData} onReset={handleReset} />
      ) : (
        <UserForm onUsernameChange={handleUsernameChange} onFetchUserData={fetchUserData} />
      )}
    </div>
  );
}

export default App;
