function Scott(props){
    return(
        <div className="player-card ryan">
            <div className="row">
                <div className="col-sm name">
                    <h3>Ryan Payne</h3>
                </div>
                <div>
                    <p>Total points: 42</p>
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
            </table>
            </div>
        </div>
    )
}

export default Scott