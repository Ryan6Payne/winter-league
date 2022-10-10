function Nick(props){
    
    return(
        <div className="player-card">
            <div className="row">
                <div className="col-sm name">
                    <h3>Nick Howell</h3>
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
                    <td>09/10/2022</td>
                </tr>
            </table>
            </div>
        </div>
    )
}

export default Nick