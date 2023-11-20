import './App.css';
import GolfPlayerCard from './components/GolfPlayerCard';
import Information from './components/Information';

const App = () => {
  const weeksPlayed = 1;
  return (
    <div className="application">
      <main>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <GolfPlayerCard golfScores={
                  [
                    { week: 'Week1', score: 35 },
                    { week: 'Week2', score: 0 },
                    { week: 'Week3', score: 0 },
                    { week: 'Week4', score: 0 },
                    { week: 'Week5', score: 0 },
                    { week: 'Week6', score: 0 },
                    { week: 'Week7', score: 0 },
                    { week: 'Week8', score: 0 },
                    { week: 'Week9', score: 0 },
                    { week: 'Week10', score: 0 }
                  ]
                } playerName="Andy" weeksPlayed={weeksPlayed} cardClass={"gold"} />
              </div>
              <div className="col-sm">
                <GolfPlayerCard golfScores={
                  [
                    { week: 'Week1', score: 31 },
                    { week: 'Week2', score: 0 },
                    { week: 'Week3', score: 0 },
                    { week: 'Week4', score: 0 },
                    { week: 'Week5', score: 0 },
                    { week: 'Week6', score: 0 },
                    { week: 'Week7', score: 0 },
                    { week: 'Week8', score: 0 },
                    { week: 'Week9', score: 0 },
                    { week: 'Week10', score: 0 }
                  ]
                } playerName="Mike" weeksPlayed={weeksPlayed} cardClass={"silver"} />
              </div>
              <div className="col-sm">
                <GolfPlayerCard golfScores={
                  [
                    { week: 'Week1', score: 31 },
                    { week: 'Week2', score: 0 },
                    { week: 'Week3', score: 0 },
                    { week: 'Week4', score: 0 },
                    { week: 'Week5', score: 0 },
                    { week: 'Week6', score: 0 },
                    { week: 'Week7', score: 0 },
                    { week: 'Week8', score: 0 },
                    { week: 'Week9', score: 0 },
                    { week: 'Week10', score: 0 }
                  ]
                } playerName="Craig" weeksPlayed={weeksPlayed} cardClass={"bronze"} />
              </div>

            </div>

            <div className="row">
              <div className="col-sm">
                <GolfPlayerCard golfScores={
                  [
                    { week: 'Week1', score: 31 },
                    { week: 'Week2', score: 0 },
                    { week: 'Week3', score: 0 },
                    { week: 'Week4', score: 0 },
                    { week: 'Week5', score: 0 },
                    { week: 'Week6', score: 0 },
                    { week: 'Week7', score: 0 },
                    { week: 'Week8', score: 0 },
                    { week: 'Week9', score: 0 },
                    { week: 'Week10', score: 0 }
                  ]
                } playerName="Scott" weeksPlayed={weeksPlayed} />
              </div>
              <div className="col-sm">
                <GolfPlayerCard golfScores={
                  [
                    { week: 'Week1', score: 29 },
                    { week: 'Week2', score: 0 },
                    { week: 'Week3', score: 0 },
                    { week: 'Week4', score: 0 },
                    { week: 'Week5', score: 0 },
                    { week: 'Week6', score: 0 },
                    { week: 'Week7', score: 0 },
                    { week: 'Week8', score: 0 },
                    { week: 'Week9', score: 0 },
                    { week: 'Week10', score: 0 }
                  ]
                } playerName="Joe" weeksPlayed={weeksPlayed} />
              </div>
              <div className="col-sm">
                <GolfPlayerCard golfScores={
                  [
                    { week: 'Week1', score: 29 },
                    { week: 'Week2', score: 0 },
                    { week: 'Week3', score: 0 },
                    { week: 'Week4', score: 0 },
                    { week: 'Week5', score: 0 },
                    { week: 'Week6', score: 0 },
                    { week: 'Week7', score: 0 },
                    { week: 'Week8', score: 0 },
                    { week: 'Week9', score: 0 },
                    { week: 'Week10', score: 0 }
                  ]
                } playerName="Nick" weeksPlayed={weeksPlayed} />
              </div>
            </div>

            <div className="row">
              <div className="col-sm">
                <GolfPlayerCard golfScores={
                  [
                    { week: 'Week1', score: 27 },
                    { week: 'Week2', score: 0 },
                    { week: 'Week3', score: 0 },
                    { week: 'Week4', score: 0 },
                    { week: 'Week5', score: 0 },
                    { week: 'Week6', score: 0 },
                    { week: 'Week7', score: 0 },
                    { week: 'Week8', score: 0 },
                    { week: 'Week9', score: 0 },
                    { week: 'Week10', score: 0 }
                  ]
                } playerName="Ryan" weeksPlayed={weeksPlayed} />
              </div>
              <div className="col-sm">
                <GolfPlayerCard golfScores={
                  [
                    { week: 'Week1', score: 23 },
                    { week: 'Week2', score: 0 },
                    { week: 'Week3', score: 0 },
                    { week: 'Week4', score: 0 },
                    { week: 'Week5', score: 0 },
                    { week: 'Week6', score: 0 },
                    { week: 'Week7', score: 0 },
                    { week: 'Week8', score: 0 },
                    { week: 'Week9', score: 0 },
                    { week: 'Week10', score: 0 }
                  ]
                } playerName="Jez" weeksPlayed={weeksPlayed} />
              </div>
              <div className="col-sm">
                <Information />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;