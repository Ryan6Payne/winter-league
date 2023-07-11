function Andy(){
    return(
        <div className="player-card">
            <div className="col-sm name">
                <h5>Andy</h5>
            </div>
            <div>
                <p className="tpoints">Total points: 153</p>
                <p className="avg-points">Average: 38.25</p>
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
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
                <table className="right-table" id="scores">
                <tbody>
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