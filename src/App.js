import './global.styles.css';
import Main from './components/Main/main.component'
import Theme from './theme'

function App() {
  return (
    <Theme>
      <div id='app'>
        <h1>Top 100 Coins</h1>
        <Main />
      </div>
    </Theme>
  );
}

export default App;
