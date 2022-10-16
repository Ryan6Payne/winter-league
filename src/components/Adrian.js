function Adrian(){
    return(
        <div className="player-card">
            <div className="row">
                <div className="col-sm name">
                    <h5>Adrian</h5>
                </div>
                <div>
                    <p className="tpoints">Total points: 30</p>
                </div>
            </div>
            <div>
            <table id="scores">
                <tr>
                    <th>Score</th>
                    <th>Date</th>
                </tr>
                <tr>
                    <td>30</td>
                    <td>Week 1</td>
                </tr>
            </table>
            </div>
        </div>
    )
}

export default Adrian