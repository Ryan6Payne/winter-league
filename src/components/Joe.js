function Scott(props){
    const points = 386;
    const average = points / 12;
    return(
        <div className="player-card">
            <div className="col-sm name">
                <h5>Joe</h5>
            </div>
            <div>
                <p className="tpoints">Total points: {points}</p>
                <p className="avg-points">Average: {average.toFixed(2)}</p>
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
                                <td>40</td>
                                <td>Week22</td>
                            </tr>
                            <tr>
                                <td>36</td>
                                <td>Week21</td>
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
                                <td>32</td>
                                <td>Week16</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="right-table" id="scores">
                        <tbody>
                            <tr>
                                <td>32</td>
                                <td>Week18</td>
                            </tr>
                            <tr>
                                <td>30</td>
                                <td>Week14</td>
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
                                <td>27</td>
                                <td>Week22</td>
                            </tr>
                            <tr>
                                <td>26</td>
                                <td>Week10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Scott