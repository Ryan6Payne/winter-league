function Scott(props){
    return(
        <div className="player-card gold">
            <div className="col-sm name">
                <h5>Scott</h5>
            </div>
            <div>
                <p className="tpoints">Total points: 143</p>
            </div>
            <div>
            <table id="scores">
                <tr>
                    <th>Score</th>
                    <th>Date</th>
                </tr>
                <tr>
                    <td>42</td>
                    <td>Week 1</td>
                </tr>
                <tr>
                    <td>36</td>
                    <td>Week 4</td>
                </tr>
                <tr>
                    <td>34</td>
                    <td>Week 2</td>
                </tr>
                <tr>
                    <td>31</td>
                    <td>Week 3</td>
                </tr>
            </table>
            </div>
        </div>
    )
}

export default Scott