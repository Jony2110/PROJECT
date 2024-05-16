import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';


function SignUpPage({ setUsers }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    setUsers(prev => [...prev, { username, password }]);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <TextField
        label="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button onClick={handleSignUp}>Sign Up</Button>
    </div>
  );
}

export default SignUpPage;