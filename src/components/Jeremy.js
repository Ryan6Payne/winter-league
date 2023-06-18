function Jeremy(props){

    return(
        <div className="player-card gold">
            <div className="col-sm name">
                <h5>Jeremy</h5>
            </div>
            <div>
                <p className="tpoints">Total points: 164</p>
                <p className="avg-points">Average: 32.8</p>
            </div>
            <div>
            <div className="tables-container">
                <table id="scores">
                <tbody>
                    <tr>
                        <td>37</td>
                        <td>Week7</td>
                    </tr>
                    <tr>
                        <td>34</td>
                        <td>Week8</td>
                    </tr>
                    <tr>
                        <td>32</td>
                        <td>Week6</td>
                    </tr>
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