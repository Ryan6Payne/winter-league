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
                    { week: 'Week24', score: 38 },
                    { week: 'Week22', score: 36 },
                    { week: 'Week4', score: 38 },
                    { week: 'Week18', score: 39 },
                    { week: 'Week19', score: 37 },
                    { week: 'Week8', score: 32 },
                    { week: 'Week9', score: 33 },
                    { week: 'Week20', score: 38 },
                    { week: 'Week12', score: 36 },
                    { week: 'Week14', score: 35 },
                    { week: 'Week15', score: 38 }
                  ]
                } playerName="Craig" weeksPlayed={12} cardClass={"gold"} />
              </div>
              <div className="col-sm">
                <GolfPlayerCard golfScores={
                  [
                    { week: 'Week20', score: 34 },
                    { week: 'Week24', score: 33 },
                    { week: 'Week3', score: 36 },
                    { week: 'Week19', score: 38 },
                    { week: 'Week7', score: 35 },
                    { week: 'Week8', score: 33 },
                    { week: 'Week22', score: 33 },
                    { week: 'Week11', score: 38 },
                    { week: 'Week12', score: 34 },
                    { week: 'Week15', score: 36 },
                    { week: 'Week16', score: 39 },
                    { week: 'Week18', score: 40 }
                  ]
                } playerName="Andy" weeksPlayed={12} cardClass={"silver"}/>
              </div>

              <div className="col-sm">
              <GolfPlayerCard golfScores={
                [
                  { week: 'Week17', score: 38 },
                  { week: 'Week2', score: 34 },
                  { week: 'Week3', score: 32 },
                  { week: 'Week18', score: 35 },
                  { week: 'Week24', score: 38 },
                  { week: 'Week7', score: 34 },
                  { week: 'Week8', score: 39 },
                  { week: 'Week9', score: 39 },
                  { week: 'Week11', score: 34 },
                  { week: 'Week22', score: 35 },
                  { week: 'Week15', score: 34 },
                  { week: 'Week16', score: 35 }
                ]
                } playerName="Scott" weeksPlayed={12} cardClass={"bronze"}/>
              </div>
              
            </div>
            <div className="row">
            <div className="col-sm">
              <GolfPlayerCard golfScores={
                  [
                    { week: 'Week24', score: 29 },
                    { week: 'Week18', score: 32 },
                    { week: 'Week19', score: 40 },
                    { week: 'Week4', score: 38 },
                    { week: 'Week7', score: 31 },
                    { week: 'Week20', score: 39 },
                    { week: 'Week9', score: 36 },
                    { week: 'Week11', score: 43 },
                    { week: 'Week12', score: 30 },
                    { week: 'Week15', score: 30 },
                    { week: 'Week16', score: 35 },
                    { week: 'Week17', score: 34 }
                  ]
                } playerName="Nick" weeksPlayed={12} />
              </div>

              <div className="col-sm">
                <GolfPlayerCard golfScores={
                    [
                      { week: 'Week18', score: 38 },
                      { week: 'Week2', score: 36 },
                      { week: 'Week3', score: 31 },
                      { week: 'Week24', score: 38 },
                      { week: 'Week22', score: 39 },
                      { week: 'Week7', score: 31 },
                      { week: 'Week20', score: 31 },
                      { week: 'Week11', score: 32 },
                      { week: 'Week12', score: 32 },
                      { week: 'Week15', score: 31 },
                      { week: 'Week16', score: 36 },
                      { week: 'Week17', score: 36 }
                    ]
                  } playerName="Ryan" weeksPlayed={12} />
              </div>
            <div className="col-sm">
              <GolfPlayerCard golfScores={
                  [
                    { week: 'Week24', score: 30 },
                    { week: 'Week3', score: 33 },
                    { week: 'Week6', score: 35 },
                    { week: 'Week7', score: 31 },
                    { week: 'Week8', score: 33 },
                    { week: 'Week9', score: 34 },
                    { week: 'Week11', score: 40 },
                    { week: 'Week12', score: 35 },
                    { week: 'Week15', score: 34 },
                    { week: 'Week16', score: 32 },
                    { week: 'Week20', score: 42 },
                    { week: 'Week18', score: 30 }
                  ]
                } playerName="Jez" weeksPlayed={12} />
              </div>

            </div>
            <div className="row">
            <div className="col-sm">
                <GolfPlayerCard golfScores={
                  [
                    { week: 'Week1', score: 35 },
                    { week: 'Week2', score: 27 },
                    { week: 'Week3', score: 30 },
                    { week: 'Week24', score: 27 },
                    { week: 'Week22', score: 32 },
                    { week: 'Week7', score: 32 },
                    { week: 'Week8', score: 34 },
                    { week: 'Week20', score: 37 },
                    { week: 'Week11', score: 29 },
                    { week: 'Week12', score: 32 },
                    { week: 'Week19', score: 36 },
                    { week: 'Week17', score: 32 }
                  ]
                } playerName="Gonz" weeksPlayed={12} />
              </div>
              <div className="col-sm">
              <GolfPlayerCard golfScores={
                  [
                    { week: 'Week24', score: 31 },
                    { week: 'Week20', score: 34 },
                    { week: 'Week3', score: 26 },
                    { week: 'Week6', score: 29 },
                    { week: 'Week8', score: 30 },
                    { week: 'Week9', score: 35 },
                    { week: 'Week12', score: 25 },
                    { week: 'Week15', score: 32 },
                    { week: 'Week16', score: 33 },
                    { week: 'Week17', score: 28 },
                    { week: 'Week18', score: 33 },
                    { week: 'Week19', score: 35 }
                  ]
                } playerName="Mike" weeksPlayed={12} />
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
                    { week: 'Week17', score: 28 },
                    { week: 'Week18', score: 32 },
                    { week: 'Week22', score: 31 }
                  ]
                } playerName="Joe" weeksPlayed={12}/>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;