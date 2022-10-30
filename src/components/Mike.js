function Mike(){
    return(
        <div className="player-card mike">
            <div className="col-sm name">
                <h5>Mike</h5>
            </div>
            <div>
                <p className="tpoints">Total points: 60</p>
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
                <tr>
                    <td>26</td>
                    <td>Week 4</td>
                </tr>
            </table>
            </div>
        </div>
    )
}

export default Mike