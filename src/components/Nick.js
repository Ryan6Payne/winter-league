function Nick(props){
    
    return(
        <div className="player-card">
            <div className="col-sm name">
                <h5>Nick</h5>
            </div>
            <div>
                <p className="tpoints">Total points: 157</p>
                <p className="avg-points">Average: 31.4</p>
            </div>
            <div>
            <div className="tables-container">
                <table id="scores">
                <tbody>
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
                        <td>29</td>
                        <td>Week9</td>
                    </tr>
                    <tr>
                        <td>20</td>
                        <td>Week1</td>
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

export default Nick