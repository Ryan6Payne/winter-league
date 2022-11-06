function Craig(props){
    return(
        <div className="player-card bronze">
            <div className="name">
                <h5>Craig</h5>
            </div>
            <div>
                <p className="tpoints">Total points: 170</p>
            </div>
            <div>
            <table id="scores">
                <tr>
                    <th>Score</th>
                    <th>Date</th>
                </tr>
                <tr>
                    <td>37</td>
                    <td>Week 5</td>
                </tr>
                <tr>
                    <td>34</td>
                    <td>Week 1</td>
                </tr>
                <tr>
                    <td>34</td>
                    <td>Week 3</td>
                </tr>
                <tr>
                    <td>33</td>
                    <td>Week 2</td>
                </tr>
                <tr>
                    <td>32</td>
                    <td>Week 4</td>
                </tr>
            </table>
            </div>
        </div>
    )
}

export default Craig