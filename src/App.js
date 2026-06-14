import React, { useEffect, useState } from 'react';
import './App.css';
import GolfPlayerCard from './components/GolfPlayerCard';
import Information from './components/Information';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = `https://docs.google.com/spreadsheets/d/1muR149PlBVl57T3dR2z2y3QH8GTOGzo2EMe6dknx1xM/gviz/tq?tqx=out:json&sheet=Sheet1`;

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const text = await res.text();
        const jsonText = text.replace(/^[^\(]*\(|\);?$/g, "");
        const table = JSON.parse(jsonText).table;
        // Build rows aligned with table.columns so empty cells don't shift indexes
        const rows = table.rows.map(r =>
          table.cols.map((col, i) => (r.c && r.c[i] && r.c[i].v != null ? r.c[i].v : ""))
        );
        // Prepend header labels so existing header-based logic continues to work
        const headers = table.cols.map(c => c.label || "");
        const rowsWithHeader = [headers, ...rows];
        setData(rowsWithHeader);
      } catch (error) {
        console.error('Error fetching published sheet:', error);
      }
    };

    fetchData();
  }, []);

  const processScores = (scores, headers = []) => {
    // Map scores to objects using header names (fallback to WeekN), filter empties
    const validScores = scores
      .map((score, i) => {
        if (score === '' || score == null) return null;
        const weekLabel = headers[i] || `Week${i + 1}`;
        return { week: weekLabel, score: parseInt(score, 10) };
      })
      .filter(item => item !== null && !Number.isNaN(item.score));

    // Sort scores in descending order and take the top 10
    const bestScores = validScores.sort((a, b) => b.score - a.score).slice(0, 10);

    // Pad with empty entries if there are fewer than 10 scores
    while (bestScores.length < 10) {
      bestScores.push({ week: '', score: '' });
    }
    return bestScores;
  };

  const calculateTotalPoints = (scores) => {
    return scores.reduce((total, score) => total + (score.score || 0), 0);
  };

  const headers = data && data.length > 0 ? data[0] : [];

  const players = data.slice(1).map((row, index) => {
    const golfScores = processScores(row.slice(1), headers.slice(1));
    const totalPoints = calculateTotalPoints(golfScores);
    return {
      playerName: row[0],
      golfScores,
      totalPoints,
      weeksPlayed: row.slice(1).filter(score => score !== '').length,
    };
  });

  // Sort players by total points in descending order
  players.sort((a, b) => b.totalPoints - a.totalPoints);

  // Assign cardClass based on ranking
  players.forEach((player, index) => {
    if (index === 0) {
      player.cardClass = 'gold';
    } else if (index === 1) {
      player.cardClass = 'silver';
    } else if (index === 2) {
      player.cardClass = 'bronze';
    } else {
      player.cardClass = '';
    }
  });

  return (
    <div className="application">
      <main>
        <div>
          <div className="container">
            <div className="row">
						  {players.map((player, index) => (
                <div className={`col-sm position-${index}`} key={index}>
                  <GolfPlayerCard
                    golfScores={player.golfScores}
                    playerName={player.playerName}
                    weeksPlayed={player.weeksPlayed}
                    cardClass={player.cardClass}
                  />
                </div>
              ))}
              <Information/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;

//   return (
//     <div className="application">
//       <main>
//         <div>
//           <div className="container">
//             <div className="row">
//             <div className="col-sm">
//                 <GolfPlayerCard golfScores={
//                   [
//                     { week: 'Week1', score: 36 },
//                     { week: 'Week2', score: 23 },
//                     { week: 'Week5', score: 26 },
//                     { week: 'Week7', score: 26 },
//                     { week: 'Week8', score: 40 },
//                     { week: 'Week9', score: 36 },
//                     { week: 'Week10', score: 34 },
//                     { week: '', score: 0 }
//                   ]
//                 } playerName="Andy" weeksPlayed={7} cardClass={"gold"}/>
//               </div>
//             <div className="col-sm">
//               <GolfPlayerCard golfScores={
//                   [
//                     { week: 'Week1', score: 31 },
//                     { week: 'Week2', score: 29 },
//                     { week: 'Week4', score: 32 },
//                     { week: 'Week5', score: 27 },
//                     { week: 'Week7', score: 26 },
//                     { week: 'Week9', score: 27 },
//                     { week: 'Week10', score: 38 },
//                     { week: '', score: 0 }
//                   ]
//                 } playerName="Ryan" weeksPlayed={7} cardClass={"silver"}/>
//               </div>
//               <div className="col-sm">
//                 <GolfPlayerCard golfScores={
//                   [
//                     { week: 'Week1', score: 44 },
//                     { week: 'Week4', score: 26 },
//                     { week: 'Week7', score: 33 },
//                     { week: 'Week8', score: 31 },
//                     { week: 'Week9', score: 30 },
//                     { week: 'Week10', score: 34 },
//                     { week: '', score: 0 },
//                     { week: '', score: 0 }
//                   ]
//                 } playerName="Scott" weeksPlayed={6} cardClass={"bronze"}/>
//               </div>


//             </div>
//             <div className="row">
//             <div className="col-sm">
//               <GolfPlayerCard golfScores={
//                 [
//                   { week: 'Week1', score: 36 },
//                   { week: 'Week4', score: 30 },
//                   { week: 'Week5', score: 35 },
//                   { week: 'Week7', score: 36 },
//                   { week: 'Week10', score: 35 },
//                   { week: '', score: 0 },
//                   { week: '', score: 0 },
//                   { week: '', score: 0 }
//                 ]
//                 } playerName="Nick" weeksPlayed={5} />
//               </div>
//               <div className="col-sm">
//               <GolfPlayerCard golfScores={
//                   [
//                     { week: 'Week7', score: 40 },
//                     { week: 'Week8', score: 31 },
//                     { week: 'Week9', score: 33 },
//                     { week: 'Week10', score: 37 },
//                     { week: '', score: 0 },
//                     { week: '', score: 0 },
//                     { week: '', score: 0 },
//                     { week: '', score: 0 }
//                   ]
//                 } playerName="Mike" weeksPlayed={4} />
//               </div>
//             <div className="col-sm">
//                 <GolfPlayerCard golfScores={
//                     [
//                       { week: 'Week1', score: 38 },
//                       { week: 'Week2', score: 22 },
//                       { week: 'Week5', score: 29 },
//                       { week: 'Week7', score: 25 },
//                       { week: 'Week10', score: 27 },
//                       { week: '', score: 0 },
//                       { week: '', score: 0 },
//                       { week: '', score: 0 }
//                     ]
//                   } playerName="Joe" weeksPlayed={5}/>
//               </div>
//             </div>
//             <div className="row">
//             <div className="col-sm">
//                 <GolfPlayerCard golfScores={
//                   [
//                     { week: 'Week1', score: 23 },
//                     { week: 'Week8', score: 28 },
//                     { week: 'Week9', score: 28 },
//                     { week: 'Week10', score: 37 },
//                     { week: '', score: 0 },
//                     { week: '', score: 0 },
//                     { week: '', score: 0 },
//                     { week: '', score: 0 }
//                   ]
//                 } playerName="Craig" weeksPlayed={4} />
//               </div>
//             <div className="col-sm">
//               <GolfPlayerCard golfScores={
//                   [
//                     { week: 'Week1', score: 29 },
//                     { week: '', score: 0 },
//                     { week: '', score: 0 },
//                     { week: '', score: 0 },
//                     { week: '', score: 0 },
//                     { week: '', score: 0 },
//                     { week: '', score: 0 },
//                     { week: '', score: 0 }
//                   ]
//                 } playerName="Jez" weeksPlayed={1} />
//               </div>
//             </div>
//             <Information></Information>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };