function Jeremy(props){

    return(
        <div className="player-card">
            <div className="col-sm name">
                <h5>Jeremy</h5>
            </div>
            <div>
                <p className="tpoints">Total points: 90</p>
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
                    <td>31</td>
                    <td>Week 2</td>
                </tr>
                <tr>
                    <td>25</td>
                    <td>Week 4</td>
                </tr>
            </table>
            </div>
        </div>
    )
}

export default Jeremy