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
                    { week: 'Week2', score: 31 },
                    { week: 'Week4', score: 31 },
                    { week: 'Week6', score: 36 },
                    { week: 'Week7.1', score: 39 },
                    { week: 'Week7.2', score: 30 },
                    { week: 'Week9', score: 33 },
                    { week: 'Week11', score: 35 },
                    { week: '', score: 0 },
                    { week: '', score: 0 }
                  ]
                } playerName="Andy" weeksPlayed={8} cardClass={"gold"} />
              </div>
              <div className="col-sm">
                <GolfPlayerCard golfScores={
                  [
                    { week: 'Week1', score: 29 },
                    { week: 'Week2', score: 31 },
                    { week: 'Week4', score: 33 },
                    { week: 'Week7.1', score: 34 },
                    { week: 'Week7.2', score: 38 },
                    { week: 'Week9', score: 43 },
                    { week: 'Week11', score: 36 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 }
                  ]
                } playerName="Nick" weeksPlayed={6} cardClass={"silver"}/>
              </div>
              <div className="col-sm">
                <GolfPlayerCard golfScores={
                  [
                    { week: 'Week1', score: 27 },
                    { week: 'Week2', score: 26 },
                    { week: 'Week4', score: 28 },
                    { week: 'Week6', score: 35 },
                    { week: 'Week7.1', score: 39 },
                    { week: 'Week9', score: 35 },
                    { week: 'Week11', score: 38 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 }
                  ]
                } playerName="Ryan" weeksPlayed={7} cardClass={"bronze"}/>
              </div>
              {/* ROW 1 END */}
            </div>


            <div className="row">
              {/* ROW 2 */}
              <div className="col-sm">
                <GolfPlayerCard golfScores={
                  [
                    { week: 'Week1', score: 23 },
                    { week: 'Week2', score: 27 },
                    { week: 'Week6', score: 27 },
                    { week: 'Week7.1', score: 34 },
                    { week: 'Week7.2', score: 38 },
                    { week: 'Week9', score: 34 },
                    { week: 'Week11', score: 30 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 }
                  ]
                } playerName="Jez" weeksPlayed={7} />
              </div>
              <div className="col-sm">
                <GolfPlayerCard golfScores={
                  [
                    { week: 'Week1', score: 31 },
                    { week: 'Week2', score: 22 },
                    { week: 'Week7.1', score: 30 },
                    { week: 'Week7.2', score: 20 },
                    { week: 'Week9', score: 33 },
                    { week: 'Week11', score: 31 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 }
                  ]
                } playerName="Scott" weeksPlayed={6} />
              </div>
              <div className="col-sm">
                <GolfPlayerCard golfScores={

                  [
                    { week: 'Week1', score: 31 },
                    { week: 'Week2', score: 29 },
                    { week: 'Week6', score: 36 },
                    { week: 'Week9', score: 37 },
                    { week: 'Week11', score: 33 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 }
                  ]
                } playerName="Mike" weeksPlayed={5}/>
              </div>
              {/* ROW 2 END */}
            </div>

            <div className="row">
              {/* ROW 3 */}
              <div className="col-sm">
                <GolfPlayerCard golfScores={
                  [
                    { week: 'Week1', score: 29 },
                    { week: 'Week4', score: 34 },
                    { week: 'Week7.1', score: 23 },
                    { week: 'Week11', score: 25 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 }
                  ]
                } playerName="Joe" weeksPlayed={4} />
              </div>
              <div className="col-sm">
                <GolfPlayerCard golfScores={
                  [
                    { week: 'Week1', score: 31 },
                    { week: 'Week2', score: 30 },
                    { week: 'Week9', score: 23 },
                    { week: 'Week11', score: 27 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 }
                  ]
                } playerName="Craig" weeksPlayed={4} />
              </div>
              

              <div className="col-sm">
                <Information />
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