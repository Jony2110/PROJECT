import { Button, List, ListItem, ListItemText } from '@mui/material';
import React from 'react';


function HomePage({ users, setUsers, loggedInUser, setLoggedInUser }) {
  const handleDelete = username => {
    setUsers(prevUsers => prevUsers.filter(u => u.username !== username));
    if (loggedInUser.username === username) {
      setLoggedInUser(null);
    }
  };

  return (
    <div>
      <h2>Welcome, {loggedInUser.username}!</h2>
      <List>
        {users.map(user => (
          <ListItem key={user.username}>
            <ListItemText primary={user.username} />
            <Button onClick={() => handleDelete(user.username)}>Delete</Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default HomePage;