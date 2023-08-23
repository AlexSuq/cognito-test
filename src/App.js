import React from "react";
import { Amplify, Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


Amplify.configure({
    Auth: {
      region: 'us-east-1',
      userPoolId: 'us-east-1_Z2lFgsg2x',
      userPoolWebClientId: '4r3ihengoj0c2g1tmkmhjb4h5s',
    },
  });

function App({ signOut, user }) {
  return (
    <>
      <h1>Hello</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);




// You can get the current config object
// const currentConfig = Auth.configure();

