import './App.css';
import Center from './components/Center';

function App() {
  return (
    <div className="application">
      <main>
        <div className="snowflakes" aria-hidden="true">
          <div className="snowflake">
          ❅
          </div>
          <div className="snowflake">
          ❅
          </div>
          <div className="snowflake">
          ❆
          </div>
          <div className="snowflake">
          ❄
          </div>
          <div className="snowflake">
          ❅
          </div>
          <div className="snowflake">
          ❆
          </div>
          <div className="snowflake">
          ❄
          </div>
          <div className="snowflake">
          ❅
          </div>
          <div className="snowflake">
          ❆
          </div>
          <div className="snowflake">
          ❄
          </div>
        </div>
        <Center/>
      </main>
    </div>
  );
}

export default App;
