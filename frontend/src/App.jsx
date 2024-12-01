
import { Route, Switch } from 'wouter';
import Home from './pages/home';
import Analytics from './components/Analytics';
import Ads from './components/Ads';
import SearchConsole from './components/SearchConsole';
import Login from './components/Login';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  console.log(import.meta.env.VITE_CLIENT_ID);
  const googleAuth = () => {
    return (
      <GoogleOAuthProvider clientId={clientId}>
        <Login />
      </GoogleOAuthProvider>
    )
  }

  return (
    <div>

      <Switch>
        <Route path="/" component={googleAuth} />
        <Route path="/login" component={googleAuth} />
        <Route path="/home" component={Home} />
        <Route path="/analytics" component={Analytics} />
        <Route path="/ads" component={Ads} />
        <Route path="/search-console" component={SearchConsole} />
        <Route path='*' component={() => <h1>404: Not Found</h1>} />

      </Switch>
    </div>
  );
}

export default App;
