import React, { useEffect, useState } from 'react';
import './App.css';
import GolfPlayerCard from './components/GolfPlayerCard';
import Information from './components/Information';
import { gapi } from 'gapi-script';

const apiKey = process.env.REACT_APP_API_KEY;
const spreadSheetId = process.env.REACT_APP_SPREADSHEET_ID;

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await gapi.client.sheets.spreadsheets.values.get({
          spreadsheetId: spreadSheetId,
          range: 'Sheet1!A1:W10', // Adjust the range according to your sheet
        });
        const values = response.result.values;
        setData(values);
      } catch (error) {
        console.error('Error fetching data from Google Sheets:', error);
      }
    };

    const initClient = () => {
      gapi.client.init({
        apiKey: apiKey,
        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
      }).then(() => {
        fetchData();
      });
    };

    gapi.load('client', initClient);
  }, []);

  const processScores = (scores) => {
    // Filter out empty scores and convert to integers
    const validScores = scores.map((score, i) => score !== '' ? { week: `Week${i + 1}`, score: parseInt(score) } : null).filter(score => score !== null);
    // Sort scores in descending order and take the best 8
    const bestScores = validScores.sort((a, b) => b.score - a.score).slice(0, 8);
    // Pad with empty entries if there are fewer than 8 scores
    while (bestScores.length < 8) {
      bestScores.push({ week: '', score: '' });
    }
    return bestScores;
  };

  const calculateTotalPoints = (scores) => {
    return scores.reduce((total, score) => total + (score.score || 0), 0);
  };

  const players = data.slice(1).map((row, index) => {
    const golfScores = processScores(row.slice(1));
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
                <div className="col-sm" key={index}>
                  <GolfPlayerCard
                    golfScores={player.golfScores}
                    playerName={player.playerName}
                    weeksPlayed={player.weeksPlayed}
                    cardClass={player.cardClass}
                  />
                </div>
              ))}
            </div>
			<Information />
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