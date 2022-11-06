function Andy(){
    return(
        <div className="player-card">
            <div className="col-sm name">
                <h5>Andy</h5>
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
                    <td>28</td>
                    <td>Week 4</td>
                </tr>
                <tr>
                    <td>28</td>
                    <td>Week 5</td>
                </tr>
            </table>
            </div>
        </div>
    )
}

export default Andy