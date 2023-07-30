function Craig(props){
    return(
        <div className="player-card">
            <div className="name">
                <h5>Craig</h5>
            </div>
            <div>
                <p className="tpoints">Total points: 286</p>
                <p className="avg-points">Average: 31.78</p>
            </div>
            <div>
            <div className="tables-container">
                <table id="scores">
                <tbody>
                    <tr>
                        <td>37</td>
                        <td>Week5</td>
                    </tr>
                    <tr>
                        <td>36</td>
                        <td>Week12</td>
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
                        <td>31</td>
                        <td>Week10</td>
                    </tr>
                    </tbody>
                </table>
                <table className="right-table" id="scores">
                <tbody>
                    <tr>
                        <td>30</td>
                        <td>Week6</td>
                    </tr>
                    <tr>
                        <td>27</td>
                        <td>Week7</td>
                    </tr>
                    <tr>
                        <td>26</td>
                        <td>Week8</td>
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

export default Craig