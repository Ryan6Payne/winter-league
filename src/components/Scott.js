function Scott(props){
    return(
        <div className="player-card gold">
            <div className="row">
                <div className="col-sm name">
                    <h3>Scott Jacquest</h3>
                </div>
                <div>
                    <p>Total points: 76</p>
                </div>
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
                    <td>34</td>
                    <td>Week 2</td>
                </tr>
            </table>
            </div>
        </div>
    )
}

export default Scott