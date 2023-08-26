function Ryan(props){
    return(
        <div className="player-card silver">
            <div className="col-sm name">
                <h5>Ryan</h5>
            </div>
            <div>
                <p className="tpoints">Total points: 328</p>
                <p className="avg-points">Average: 32.8</p>
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
                                <td>37</td>
                                <td>Week9</td>
                            </tr>
                            <tr>
                                <td>37</td>
                                <td>Week14</td>
                            </tr>
                            <tr>
                                <td>34</td>
                                <td>Week6</td>
                            </tr>
                            <tr>
                                <td>32</td>
                                <td>Week16</td>
                            </tr>
                            <tr>
                                <td>31</td>
                                <td>Week8</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="right-table" id="scores">
                        <tbody>
                            <tr>
                                <td>31</td>
                                <td>Week10</td>
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
                                <td>28</td>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Ryan