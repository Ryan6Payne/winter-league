function Andy(){
    return(
        <div className="player-card">
            <div className="col-sm name">
                <h5>Andy</h5>
            </div>
            <div>
                <p className="tpoints">Total points: 254</p>
                <p className="avg-points">Average: 36.29</p>
            </div>
            <div>
            <div className="tables-container">
                <table id="scores">
                <tbody>
                    <tr>
                        <td>40</td>
                        <td>Week1</td>
                    </tr>
                    <tr>
                        <td>39</td>
                        <td>Week11</td>
                    </tr>
                    <tr>
                        <td>38</td>
                        <td>Week10</td>
                    </tr>
                    <tr>
                        <td>36</td>
                        <td>Week5</td>
                    </tr>
                    <tr>
                        <td>36</td>
                        <td>Week14</td>
                    </tr>
                    <tr>
                        <td>35</td>
                        <td>Week16</td>
                    </tr>
                    </tbody>
                </table>
                <table className="right-table" id="scores">
                <tbody>
                    <tr>
                        <td>30</td>
                        <td>Week12</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}

export default Andy