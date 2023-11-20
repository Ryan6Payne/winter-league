function GolfPlayerCard({ playerName, golfScores, weeksPlayed, cardClass }) {
    const sortedGolfScores = [...golfScores].sort((a, b) => b.score - a.score);
    const totalScore = golfScores.reduce((total, score) => total + score.score, 0);
    const average = totalScore / weeksPlayed;

    const firstHalf = sortedGolfScores.slice(0, Math.ceil(sortedGolfScores.length / 2));
    const secondHalf = sortedGolfScores.slice(Math.ceil(sortedGolfScores.length / 2));

    const GolfScoresTable = ({ golfScores }) => {
        return (
            <table id="scores">
                <tbody>
                    {golfScores.map((score, index) => (
                        <tr key={index}>
                            <td>{score.week}</td>
                            <td>{score.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    const PlayerCard = ({ name, golfScores }) => {
        return (
            <div className={`player-card ${cardClass}`}>
                <div className="col-sm name">
                    <h5>{name}</h5>
                </div>
                <div>
                    <p className="tpoints">Total points: {totalScore}</p>
                    <p className="avg-points">Average: {average.toFixed(2)}</p>
                </div>
                <div className="tables-container">
                    <GolfScoresTable golfScores={firstHalf} />
                    <GolfScoresTable golfScores={secondHalf} />
                </div>
            </div>
        );
    };

    return (
        <div>
            <PlayerCard name={playerName} golfScores={golfScores} />
        </div>
    );

}

export default GolfPlayerCard