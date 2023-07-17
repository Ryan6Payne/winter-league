function Scott(props){
    return(
        <div className="player-card">
            <div className="col-sm name">
                <h5>Scott</h5>
            </div>
            <div>
                <p className="tpoints">Total points: 224</p>
                <p className="avg-points">Average: 32</p>
            </div>
            <div>
                <div className="tables-container">
                    <table id="scores">
                    <tbody>
                        <tr>
                            <td>41</td>
                            <td>Week8</td>
                        </tr>
                        <tr>
                            <td>34</td>
                            <td>Week6</td>
                        </tr>
                        <tr>
                            <td>33</td>
                            <td>Week10</td>
                        </tr>
                        <tr>
                            <td>32</td>
                            <td>Week7</td>
                        </tr>
                        <tr>
                            <td>30</td>
                            <td>Week1</td>
                        </tr>
                        <tr>
                            <td>30</td>
                            <td>Week12</td>
                        </tr>
                        </tbody>
                    </table>
                    <table className="right-table" id="scores">
                    <tbody>
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