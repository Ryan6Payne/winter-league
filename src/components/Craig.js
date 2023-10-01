function Craig(props){
    const points = 417;
    const average = points / 12;
    return(
        <div className="player-card bronze">
            <div className="name">
                <h5>Craig</h5>
            </div>
            <div>
                <p className="tpoints">Total points: {points}</p>
                <p className="avg-points">Average: {average.toFixed(2)}</p>
            </div>
            <div>
            <div className="tables-container">
                <table id="scores">
                <tbody>
                    <tr>
                        <td>38</td>
                        <td>Week21</td>
                    </tr>
                    <tr>
                        <td>38</td>
                        <td>Week22</td>
                    </tr>
                    <tr>
                        <td>37</td>
                        <td>Week5</td>
                    </tr>
                    <tr>
                        <td>36</td>
                        <td>Week12</td>
                    </tr>
                    <tr>
                        <td>36</td>
                        <td>Week16</td>
                    </tr>
                    <tr>
                        <td>36</td>
                        <td>Week20</td>
                    </tr>
                    </tbody>
                </table>
                <table className="right-table" id="scores">
                <tbody>
                    <tr>
                        <td>34</td>
                        <td>Week19</td>
                    </tr>
                    <tr>
                        <td>33</td>
                        <td>Week1</td>
                    </tr>
                    <tr>
                        <td>33</td>
                        <td>Week11</td>
                    </tr>
                    <tr>
                        <td>33</td>
                        <td>Week14</td>
                    </tr>
                    <tr>
                        <td>32</td>
                        <td>Week18</td>
                    </tr>
                    <tr>
                        <td>31</td>
                        <td>Week10</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}

export default Craig