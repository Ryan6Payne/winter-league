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
                    { week: "Week1", score: 26 },
                    { week: "Week2", score: 33 },
                    { week: "Week4", score: 32 },
                    { week: "Week5", score: 39 },
                    { week: "Week7", score: 27 },
                    { week: "Week8", score: 32 },
                    { week: "Week9", score: 37 },
                    { week: "", score: 0 },
                  ]}
                  playerName="Craig"
                  weeksPlayed={7}
                  cardClass={"gold"}
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
                    { week: "", score: 0 },
                    { week: "", score: 0 },
                  ]}
                  playerName="Jez"
                  weeksPlayed={6}
                  cardClass={"silver"}
                />
              </div>
                            <div className="col-sm">
                <GolfPlayerCard
                  golfScores={[
                    { week: "Week1", score: 33 },
                    { week: "Week2", score: 35 },
                    { week: "Week5", score: 34 },
                    { week: "Week7", score: 32 },
                    { week: "Week8", score: 30 },
                    { week: "Week9", score: 30 },
                    { week: "", score: 0 },
                    { week: "", score: 0 },
                  ]}
                  playerName="Gonz"
                  weeksPlayed={6}
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
                    { week: "Week8", score: 26 },
                    { week: "Week9", score: 36 },
                    { week: "", score: 0 },
                    { week: "", score: 0 },
                  ]}
                  playerName="Nick"
                  weeksPlayed={6}
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
                    { week: "", score: 0 },
                    { week: "", score: 0 },
                  ]}
                  playerName="Scott"
                  weeksPlayed={6}
                />
              </div>
              <div className="col-sm">
                <GolfPlayerCard
                  golfScores={[
                    { week: "Week2", score: 31 },
                    { week: "Week5", score: 36 },
                    { week: "Week7", score: 32 },
                    { week: "Week8", score: 38 },
                    { week: "Week9", score: 36 },
                    { week: "", score: 0 },
                    { week: "", score: 0 },
                    { week: "", score: 0 },
                  ]}
                  playerName="Andy"
                  weeksPlayed={5}
                />
              </div>
            </div>
            <div className="row"> 
              <div className="col-sm">
                <GolfPlayerCard
                  golfScores={[
                    { week: "Week1", score: 31 },
                    { week: "Week2", score: 33 },
                    { week: "Week5", score: 39 },
                    { week: "Week7", score: 27 },
                    { week: "Week8", score: 31 },
                    { week: "", score: 0 },
                    { week: "", score: 0 },
                    { week: "", score: 0 },
                  ]}
                  playerName="Ryan"
                  weeksPlayed={5}
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
                    { week: "", score: 0 },
                    { week: "", score: 0 },
                    { week: "", score: 0 },
                  ]}
                  playerName="Mike"
                  weeksPlayed={5}
                />
              </div>
              <div className="col-sm">
                <GolfPlayerCard
                  golfScores={[
                    { week: "Week1", score: 23 },
                    { week: "Week7", score: 22 },
                    { week: "Week8", score: 37 },
                    { week: "Week9", score: 25 },
                    { week: "", score: 0 },
                    { week: "", score: 0 },
                    { week: "", score: 0 },
                    { week: "", score: 0 },
                  ]}
                  playerName="Joe"
                  weeksPlayed={4}
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