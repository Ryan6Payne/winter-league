function Ryan(props){
    return(
        <div className="player-card silver">
            <div className="col-sm name">
                <h5>Ryan</h5>
            </div>
            <div>
                <p className="tpoints">Total points: 132</p>
                <p className="avg-points">Average: 33</p>
            </div>
            <div>
            <div className="tables-container">
                    <table id="scores">
                        <tbody>
                            <tr>
                                <td>39</td>
                                <td>Week1</td>
                            </tr>
                            <tr>
                                <td>34</td>
                                <td>Week6</td>
                            </tr>
                            <tr>
                                <td>30</td>
                                <td>Week7</td>
                            </tr>
                            <tr>
                                <td>29</td>
                                <td>Week3</td>
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

export default Ryan