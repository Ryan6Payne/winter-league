function Jeremy(props){

    return(
        <div className="player-card">
            <div className="col-sm name">
                <h5>Jeremy</h5>
            </div>
            <div>
                <p className="tpoints">Total points: 61</p>
                <p className="avg-points">Average: 30.5</p>
            </div>
            <div>
            <div className="tables-container">
                <table id="scores">
                <tbody>
                    <tr>
                        <td>31</td>
                        <td>Week5</td>
                    </tr>
                    <tr>
                        <td>30</td>
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

export default Jeremy