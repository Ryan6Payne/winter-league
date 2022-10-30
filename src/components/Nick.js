function Nick(props){
    
    return(
        <div className="player-card">
            <div className="col-sm name">
                <h5>Nick</h5>
            </div>
            <div>
                <p className="tpoints">Total points: 99</p>
            </div>
            <div>
            <table id="scores">
                <tr>
                    <th>Score</th>
                    <th>Date</th>
                </tr>
                <tr>
                    <td>36</td>
                    <td>Week 2</td>
                </tr>
                <tr>
                    <td>33</td>
                    <td>Week 4</td>
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

export default Nick