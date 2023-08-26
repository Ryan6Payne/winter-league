function Nick(props){
    
    return(
        <div className="player-card">
            <div className="col-sm name">
                <h5>Nick</h5>
            </div>
            <div>
                <p className="tpoints">Total points: 311</p>
                <p className="avg-points">Average: 31.1</p>
            </div>
            <div>
            <div className="tables-container">
                <table id="scores">
                <tbody>
                    <tr>
                        <td>42</td>
                        <td>Week11</td>
                    </tr>
                    <tr>
                        <td>41</td>
                        <td>Week7</td>
                    </tr>
                    <tr>
                        <td>36</td>
                        <td>Week6</td>
                    </tr>
                    <tr>
                        <td>31</td>
                        <td>Week3</td>
                    </tr>
                    <tr>
                        <td>31</td>
                        <td>Week10</td>
                    </tr>
                    <tr>
                        <td>31</td>
                        <td>Week12</td>
                    </tr>
                    </tbody>
                </table>
                <table className="right-table" id="scores">
                <tbody>
                    <tr>
                        <td>29</td>
                        <td>Week9</td>
                    </tr>
                    <tr>
                        <td>28</td>
                        <td>Week14</td>
                    </tr>
                    <tr>
                        <td>22</td>
                        <td>Week16</td>
                    </tr>
                    <tr>
                        <td>20</td>
                        <td>Week1</td>
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

export default Nick