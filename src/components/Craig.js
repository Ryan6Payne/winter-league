function Craig(props){
    return(
        <div className="player-card">
            <div className="row">
                <div className="col-sm name">
                    <h3>Craig Biggs</h3>
                </div>
                <div>
                    <p>Total points: 34</p>
                </div>
            </div>
            <div>
            <table id="scores">
                <tr>
                    <th>Score</th>
                    <th>Date</th>
                </tr>
                <tr>
                    <td>34</td>
                    <td>Week 1</td>
                </tr>
            </table>
            </div>
        </div>
    )
}

export default Craig