import React, { useContext } from 'react';
import { login } from '../login';
import { UserContext } from '../UserContext';

function Home() {
  const {user, setUser} = useContext(UserContext);
  return(
    <div>
      
      <div class="alert alert-secondary" role="alert">
      <h1>Home Page of useContext</h1>
      </div>
      
      <p>Welcome <strong>{JSON.stringify(user, null, 2)}</strong>.</p>

      {
        user === "To Projeck Webpro" ? <button onClick={async () => {
          const user = await login();
          setUser(user);
        }}>Login</button> : <button onClick={() => {setUser('To Projeck Webpro')}}>Logout</button>
      }
    </div>
  );
}

export default Home;