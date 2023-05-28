function Scott(props){
    return(
        <div className="player-card">
            <div className="col-sm name">
                <h5>Scott</h5>
            </div>
            <div>
                <p className="tpoints">Total points: 54</p>
                <p className="avg-points">Average: 27</p>
            </div>
            <div>
                <div className="tables-container">
                    <table id="scores">
                    <tbody>
                        <tr>
                            <td>30</td>
                            <td>Week1</td>
                        </tr>
                        <tr>
                            <td>24</td>
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

export default Scott