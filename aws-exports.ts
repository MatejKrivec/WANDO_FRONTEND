

const awsconfig = {
  Auth: {
    Cognito: {
      userPoolClientId: '73cnfoioukc5bltp8if5nh5ii', // Your Cognito App Client ID
      userPoolId: 'eu-north-1_9MWHSClRO', // Your User Pool ID
      loginWith: { 
        oauth: {
          domain: 'your-cognito-domain.auth.eu-north-1.amazoncognito.com',
          scopes: ['openid', 'email', 'phone', 'profile', 'aws.cognito.signin.user.admin'],
          redirectSignIn: ['http://localhost:3000/', 'https://example.com/'],
          redirectSignOut: ['http://localhost:3000/', 'https://example.com/'],
          responseType: 'code', // OAuth response type, can be 'code' or 'token'
        }
      }
    }
  }
};

  
  export default awsconfig;
  