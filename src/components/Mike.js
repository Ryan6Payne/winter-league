function Mike(){
    return(
        <div className="player-card mike">
            <div className="col-sm name">
                <h5>Mike</h5>
            </div>
            <div>
                <p className="tpoints">Total points: 34</p>
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

export default Mike