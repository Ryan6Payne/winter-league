import './App.css';
import GolfPlayerCard from './components/GolfPlayerCard';
import Information from './components/Information';

const App = () => {
  return (
    <div className="application">
      <main>
        <div>
          <div className="container">
            {/* ROW 1 */}
            <div className="row">
            <div className="col-sm">
                <GolfPlayerCard golfScores={
                  [
                    { week: 'Week1', score: 35 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 }
                  ]
                } playerName="Gonz" weeksPlayed={1} cardClass={"gold"}/>
              </div>
              <div className="col-sm">
                <GolfPlayerCard golfScores={
                  [
                    { week: 'Week1', score: 32 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 }
                  ]
                } playerName="Craig" weeksPlayed={1} cardClass={"silver"} />
              </div>
              <div className="col-sm">
                <GolfPlayerCard golfScores={
                  [
                    { week: 'Week1', score: 28 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 }
                  ]
                } playerName="Andy" weeksPlayed={1} cardClass={"bronze"}/>
              </div>
              {/* ROW 1 END */}
            </div>


            <div className="row">
              {/* ROW 2 */}
              <div className="col-sm">
                <GolfPlayerCard golfScores={
                  [
                    { week: 'Week1', score: 28 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 }
                  ]
                } playerName="Jez" weeksPlayed={1} />
              </div>
              <div className="col-sm">
                <GolfPlayerCard golfScores={
                  [
                    { week: 'Week1', score: 27 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 }
                  ]
                } playerName="Joe" weeksPlayed={1} />
              </div>
              <div className="col-sm">
              <GolfPlayerCard golfScores={
                  [
                    { week: 'Week1', score: 26 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 }
                  ]
                } playerName="Nick" weeksPlayed={1} />
              </div>
              {/* ROW 2 END */}
            </div>

            <div className="row">
              {/* ROW 3 */}
              <div className="col-sm">
              <GolfPlayerCard golfScores={
                [
                  { week: 'Week1', score: 25 },
                  { week: '', score: 0 },
                  { week: '', score: 0 },
                  { week: '', score: 0 },
                  { week: '', score: 0 },
                  { week: '', score: 0 },
                  { week: '', score: 0 },
                  { week: '', score: 0 },
                  { week: '', score: 0 },
                  { week: '', score: 0 }
                ]
                } playerName="Scott" weeksPlayed={1}/>

              </div>
              <div className="col-sm">
              <GolfPlayerCard golfScores={
                  [
                    { week: 'Week1', score: 22 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 }
                  ]
                } playerName="Mike" weeksPlayed={1} />
              </div>
              <div className="col-sm">
              <GolfPlayerCard golfScores={
                  [
                    { week: 'Week1', score: 20 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 }
                  ]
                } playerName="Ryan" weeksPlayed={1} />
                {/* <Information /> */}
              </div>
              {/* ROW 3 END */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;