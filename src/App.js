import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import HintsPage from './pages/HintsPage'
import Header from './components/Header'
import PlayerHints from './pages/PlayerHints'
import CurrentGamesPage from './pages/CurrentGamesPage'

function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
          <Route component={LoginPage} path="/login"/>
          <Route exect path="/current" component={CurrentGamesPage} />
          <Route path="/games/:gameId" component={HintsPage} />
          <Route component={HomePage} exact path="/"/>
          <Route exact path="/player/hints" component={PlayerHints} />
      </Router>
    </div>
  );
}

export default App;
