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
                    { week: 'Week1', score: 36 },
                    { week: 'Week2', score: 33 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 }
                  ]
                } playerName="Jez" weeksPlayed={2} cardClass={"gold"}/>
              </div>
              <div className="col-sm">
              <GolfPlayerCard golfScores={
                  [
                    { week: 'Week1', score: 33 },
                    { week: 'Week2', score: 35 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 }
                  ]
                } playerName="Gonz" weeksPlayed={2} cardClass={"silver"}/>
              </div>
              <div className="col-sm">
              <GolfPlayerCard golfScores={
                  [
                    { week: 'Week1', score: 31 },
                    { week: 'Week2', score: 33 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 }
                  ]
                } playerName="Ryan" weeksPlayed={2} cardClass={"bronze"}/>
              </div>


            </div>
            <div className="row">
            <div className="col-sm">
                <GolfPlayerCard golfScores={
                  [
                    { week: 'Week1', score: 26 },
                    { week: 'Week2', score: 33 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 }
                  ]
                } playerName="Craig" weeksPlayed={2} />
              </div>
            <div className="col-sm">
                <GolfPlayerCard golfScores={
                  [
                    { week: 'Week1', score: 32 },
                    { week: 'Week2', score: 25 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 }
                  ]
                } playerName="Scott" weeksPlayed={2}/>
              </div>

              <div className="col-sm">
              <GolfPlayerCard golfScores={
                  [
                    { week: 'Week2', score: 36 },
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

            </div>
            <div className="row">
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
                  { week: '', score: 0 }
                ]
                } playerName="Nick" weeksPlayed={1} />
              </div>
              <div className="col-sm">
                <GolfPlayerCard golfScores={
                  [
                    { week: 'Week2', score: 31 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 },
                    { week: '', score: 0 }
                  ]
                } playerName="Andy" weeksPlayed={1}/>
              </div>
              <div className="col-sm">
                <GolfPlayerCard golfScores={
                    [
                      { week: 'Week1', score: 23 },
                      { week: '', score: 0 },
                      { week: '', score: 0 },
                      { week: '', score: 0 },
                      { week: '', score: 0 },
                      { week: '', score: 0 },
                      { week: '', score: 0 },
                      { week: '', score: 0 }
                    ]
                  } playerName="Joe" weeksPlayed={1}/>
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