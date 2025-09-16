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
                <GolfPlayerCard
                  golfScores={[
                    { week: "Week2", score: 31 },
                    { week: "Week5", score: 36 },
                    { week: "Week7", score: 32 },
                    { week: "Week8", score: 38 },
                    { week: "Week9", score: 36 },
                    { week: "Week11", score: 40 },
                    { week: "Week12", score: 38 },
                    { week: "Week13", score: 33 },
                  ]}
                  playerName="Andy"
                  weeksPlayed={8}
                  cardClass={"gold"}
                />
              </div>
              <div className="col-sm">
                <GolfPlayerCard
                  golfScores={[
                    { week: "Week1", score: 31 },
                    { week: "Week2", score: 33 },
                    { week: "Week5", score: 39 },
                    { week: "Week7", score: 27 },
                    { week: "Week8", score: 31 },
                    { week: "Week11", score: 35 },
                    { week: "Week12", score: 36 },
                    { week: "Week13", score: 37 },
                  ]}
                  playerName="Ryan"
                  weeksPlayed={8}
                  cardClass={"silver"}
                />
              </div>
              <div className="col-sm">
                <GolfPlayerCard
                  golfScores={[
                    { week: "Week12", score: 30 },
                    { week: "Week2", score: 33 },
                    { week: "Week4", score: 32 },
                    { week: "Week5", score: 39 },
                    { week: "Week7", score: 27 },
                    { week: "Week8", score: 32 },
                    { week: "Week9", score: 37 },
                    { week: "Week13", score: 37 },
                  ]}
                  playerName="Craig"
                  weeksPlayed={8}
                  cardClass={"bronze"}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                <GolfPlayerCard
                  golfScores={[
                    { week: "Week1", score: 32 },
                    { week: "Week4", score: 31 },
                    { week: "Week5", score: 35 },
                    { week: "Week7", score: 30 },
                    { week: "Week13", score: 37 },
                    { week: "Week9", score: 36 },
                    { week: "Week11", score: 29 },
                    { week: "Week12", score: 33 },
                  ]}
                  playerName="Nick"
                  weeksPlayed={8}
                />
              </div>
              <div className="col-sm">
                <GolfPlayerCard
                  golfScores={[
                    { week: "Week1", score: 36 },
                    { week: "Week2", score: 33 },
                    { week: "Week4", score: 32 },
                    { week: "Week5", score: 32 },
                    { week: "Week8", score: 30 },
                    { week: "Week9", score: 35 },
                    { week: "Week11", score: 33 },
                    { week: "Week12", score: 29 },
                  ]}
                  playerName="Jez"
                  weeksPlayed={8}
                />
              </div>

              <div className="col-sm">
                <GolfPlayerCard
                  golfScores={[
                    { week: "Week1", score: 32 },
                    { week: "Week2", score: 25 },
                    { week: "Week5", score: 37 },
                    { week: "Week7", score: 30 },
                    { week: "Week8", score: 31 },
                    { week: "Week9", score: 28 },
                    { week: "Week11", score: 35 },
                    { week: "Week12", score: 34 },
                  ]}
                  playerName="Scott"
                  weeksPlayed={8}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                <GolfPlayerCard
                  golfScores={[
                    { week: "Week1", score: 33 },
                    { week: "Week2", score: 35 },
                    { week: "Week5", score: 34 },
                    { week: "Week7", score: 32 },
                    { week: "Week8", score: 30 },
                    { week: "Week9", score: 30 },
                    { week: "Week12", score: 23 },
                    { week: "Week13", score: 33 },
                  ]}
                  playerName="Gonz"
                  weeksPlayed={8}
                />
              </div>

              <div className="col-sm">
                <GolfPlayerCard
                  golfScores={[
                    { week: "Week2", score: 36 },
                    { week: "Week5", score: 33 },
                    { week: "Week7", score: 22 },
                    { week: "Week8", score: 39 },
                    { week: "Week9", score: 29 },
                    { week: "Week12", score: 33 },
                    { week: "Week13", score: 32 },
                    { week: "", score: 0 },
                  ]}
                  playerName="Mike"
                  weeksPlayed={7}
                />
              </div>
              <div className="col-sm">
                <GolfPlayerCard
                  golfScores={[
                    { week: "Week1", score: 23 },
                    { week: "Week7", score: 22 },
                    { week: "Week8", score: 37 },
                    { week: "Week9", score: 25 },
                    { week: "Week11", score: 33 },
                    { week: "Week12", score: 37 },
                    { week: "Week13", score: 38 },
                    { week: "", score: 0 },
                  ]}
                  playerName="Joe"
                  weeksPlayed={7}
                />
              </div>
            </div>

            <Information></Information>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;