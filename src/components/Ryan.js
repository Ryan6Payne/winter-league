function Scott(props){
    return(
        <div className="player-card silver">
            <div className="col-sm name">
                <h5>Ryan</h5>
            </div>
            <div>
                <p className="tpoints">Total points: 137</p>
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
                    <td>33</td>
                    <td>Week 4</td>
                </tr>
                <tr>
                    <td>32</td>
                    <td>Week 3</td>
                </tr>
                <tr>
                    <td>30</td>
                    <td>Week 2</td>
                </tr>
            </table>
            </div>
        </div>
    )
}

export default Scott