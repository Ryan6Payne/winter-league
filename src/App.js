import './App.css';
import GolfPlayerCard from './components/GolfPlayerCard';
import Information from './components/Information';

const App = () => {
  return (
    <div className="application">
      <main>
        <div>
          <div className="container">
            <div className="row">
            <div className="col-sm">
              <GolfPlayerCard golfScores={
                [
                  { week: 'Week1', score: 25 },
                  { week: 'Week2', score: 34 },
                  { week: 'Week3', score: 32 },
                  { week: 'Week4', score: 26 },
                  { week: 'Week6', score: 30 },
                  { week: 'Week7', score: 34 },
                  { week: 'Week8', score: 39 },
                  { week: 'Week9', score: 39 },
                  { week: '', score: 0 },
                  { week: '', score: 0 },
                  { week: '', score: 0 },
                  { week: '', score: 0 }
                ]
                } playerName="Scott" weeksPlayed={8} cardClass={"gold"}/>
              </div>
              <div className="col-sm">
                <GolfPlayerCard golfScores={
                  [
                    { week: 'Week1', score: 32 },
                    { week: 'Week2', score: 31 },
                    { week: 'Week3', score: 31 },
                    { week: 'Week4', score: 38 },
                    { week: 'Week6', score: 26 },
                    { week: 'Week7', score: 21 },
                    { week: 'Week8', score: 32 },
                    { week: 'Week9', score: 33 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 }
                  ]
                } playerName="Craig" weeksPlayed={8} cardClass={"silver"} />
              </div>
              <div className="col-sm">
                <GolfPlayerCard golfScores={
                  [
                    { week: 'Week1', score: 35 },
                    { week: 'Week2', score: 27 },
                    { week: 'Week3', score: 30 },
                    { week: 'Week4', score: 27 },
                    { week: 'Week6', score: 27 },
                    { week: 'Week7', score: 32 },
                    { week: 'Week8', score: 34 },
                    { week: 'Week9', score: 27 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 }
                  ]
                } playerName="Gonz" weeksPlayed={8} cardClass={"bronze"}/>
              </div>
            </div>
            <div className="row">
            <div className="col-sm">
                <GolfPlayerCard golfScores={
                  [
                    { week: 'Week1', score: 28 },
                    { week: 'Week2', score: 32 },
                    { week: 'Week3', score: 36 },
                    { week: 'Week4', score: 27 },
                    { week: 'Week7', score: 35 },
                    { week: 'Week8', score: 33 },
                    { week: 'Week9', score: 30 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 }
                  ]
                } playerName="Andy" weeksPlayed={7} />
              </div>
              <div className="col-sm">
                <GolfPlayerCard golfScores={
                  [
                    { week: 'Week1', score: 27 },
                    { week: 'Week2', score: 27 },
                    { week: 'Week3', score: 36 },
                    { week: 'Week4', score: 35 },
                    { week: 'Week7', score: 36 },
                    { week: 'Week8', score: 20 },
                    { week: 'Week9', score: 36 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 }
                  ]
                } playerName="Joe" weeksPlayed={7}/>
              </div>
              <div className="col-sm">
                <GolfPlayerCard golfScores={
                    [
                      { week: 'Week1', score: 20 },
                      { week: 'Week2', score: 36 },
                      { week: 'Week3', score: 31 },
                      { week: 'Week4', score: 30 },
                      { week: 'Week6', score: 27 },
                      { week: 'Week7', score: 31 },
                      { week: 'Week8', score: 21 },
                      { week: '', score: 0 },
                      { week: '', score: 0 },
                      { week: '', score: 0 },
                      { week: '', score: 0 },
                      { week: '', score: 0 }
                    ]
                  } playerName="Ryan" weeksPlayed={7} />
              </div>
            </div>
            <div className="row">
            <div className="col-sm">
              <GolfPlayerCard golfScores={
                  [
                    { week: 'Week1', score: 28 },
                    { week: 'Week3', score: 33 },
                    { week: 'Week6', score: 35 },
                    { week: 'Week7', score: 31 },
                    { week: 'Week8', score: 33 },
                    { week: 'Week9', score: 34 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 }
                  ]
                } playerName="Jez" weeksPlayed={6} />
              </div>
            <div className="col-sm">
              <GolfPlayerCard golfScores={
                  [
                    { week: 'Week1', score: 26 },
                    { week: 'Week2', score: 14 },
                    { week: 'Week3', score: 19 },
                    { week: 'Week4', score: 38 },
                    { week: 'Week7', score: 31 },
                    { week: 'Week8', score: 26 },
                    { week: 'Week9', score: 36 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 }
                  ]
                } playerName="Nick" weeksPlayed={7} />
              </div>
              <div className="col-sm">
              <GolfPlayerCard golfScores={
                  [
                    { week: 'Week1', score: 22 },
                    { week: 'Week2', score: 22 },
                    { week: 'Week3', score: 26 },
                    { week: 'Week6', score: 29 },
                    { week: 'Week8', score: 30 },
                    { week: 'Week9', score: 35 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 }
                  ]
                } playerName="Mike" weeksPlayed={6} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;