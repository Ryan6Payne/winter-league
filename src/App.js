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
                    { week: 'Week1', score: 32 },
                    { week: 'Week2', score: 31 },
                    { week: 'Week3', score: 31 },
                    { week: 'Week4', score: 38 },
                    { week: 'Week6', score: 26 },
                    { week: 'Week16', score: 29 },
                    { week: 'Week8', score: 32 },
                    { week: 'Week9', score: 33 },
                    { week: 'Week11', score: 30 },
                    { week: 'Week12', score: 36 },
                    { week: 'Week14', score: 35 },
                    { week: 'Week15', score: 38 }
                  ]
                } playerName="Craig" weeksPlayed={12} cardClass={"gold"} />
              </div>
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
                  { week: 'Week11', score: 34 },
                  { week: 'Week12', score: 29 },
                  { week: 'Week15', score: 34 },
                  { week: 'Week16', score: 35 }
                ]
                } playerName="Scott" weeksPlayed={12} cardClass={"gold"}/>
              </div>
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
                    { week: 'Week11', score: 38 },
                    { week: 'Week12', score: 34 },
                    { week: 'Week15', score: 36 },
                    { week: 'Week16', score: 39 },
                    { week: '', score: 0 }
                  ]
                } playerName="Andy" weeksPlayed={11} cardClass={"silver"}/>
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
                    { week: 'Week11', score: 40 },
                    { week: 'Week12', score: 35 },
                    { week: 'Week15', score: 34 },
                    { week: 'Week16', score: 32 },
                    { week: '', score: 0 },
                    { week: '', score: 0 }
                  ]
                } playerName="Jez" weeksPlayed={10} />
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
                    { week: 'Week11', score: 43 },
                    { week: 'Week12', score: 30 },
                    { week: 'Week15', score: 30 },
                    { week: 'Week16', score: 35 },
                    { week: '', score: 0 }
                  ]
                } playerName="Nick" weeksPlayed={11} />
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
                    { week: 'Week11', score: 29 },
                    { week: 'Week12', score: 32 },
                    { week: 'Week15', score: 27 },
                    { week: '', score: 0 }
                  ]
                } playerName="Gonz" weeksPlayed={11} />
              </div>
            </div>
            <div className="row">
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
                      { week: 'Week11', score: 32 },
                      { week: 'Week12', score: 32 },
                      { week: 'Week15', score: 31 },
                      { week: 'Week16', score: 36 },
                      { week: '', score: 0 }
                    ]
                  } playerName="Ryan" weeksPlayed={11} />
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
                    { week: 'Week12', score: 20 },
                    { week: 'Week16', score: 36 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 }
                  ]
                } playerName="Joe" weeksPlayed={9}/>
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
                    { week: 'Week12', score: 25 },
                    { week: 'Week15', score: 32 },
                    { week: 'Week16', score: 33 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 }
                  ]
                } playerName="Mike" weeksPlayed={9} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;