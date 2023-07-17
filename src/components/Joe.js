function Scott(props){
    return(
        <div className="player-card">
            <div className="col-sm name">
                <h5>Joe</h5>
            </div>
            <div>
                <p className="tpoints">Total points: 210</p>
                <p className="avg-points">Average: 30</p>
            </div>
            <div>
            <div className="tables-container">
                    <table id="scores">
                        <tbody>
                            <tr>
                                <td>40</td>
                                <td>Week6</td>
                            </tr>
                            <tr>
                                <td>34</td>
                                <td>Week1</td>
                            </tr>
                            <tr>
                                <td>33</td>
                                <td>Week7</td>
                            </tr>
                            <tr>
                                <td>28</td>
                                <td>Week3</td>
                            </tr>
                            <tr>
                                <td>28</td>
                                <td>Week12</td>
                            </tr>
                            <tr>
                                <td>26</td>
                                <td>Week10</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="right-table" id="scores">
                        <tbody>
                            <tr>
                                <td>21</td>
                                <td>Week9</td>
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