import { Amplify, Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


Amplify.configure({
    Auth: {
      region: 'us-east-1',
      userPoolId: '{USER_POOL_ID}',
      userPoolWebClientId: '{USER_POOL_WEB_CLIENT_ID}',
    },
  });

function App({ signOut, user }) {
  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);




// You can get the current config object
// const currentConfig = Auth.configure();

