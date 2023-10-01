function Mike(){
    const points = 385;
    const average = points / 12;
    return(
        <div className="player-card mike">
            <div className="col-sm name">
                <h5>Mike</h5>
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
                        <td>41</td>
                        <td>Week21</td>
                    </tr>
                    <tr>
                        <td>36</td>
                        <td>Week20</td>
                    </tr>
                    <tr>
                        <td>35</td>
                        <td>Week7</td>
                    </tr>
                    <tr>
                        <td>33</td>
                        <td>Week3</td>
                    </tr>
                    <tr>
                        <td>33</td>
                        <td>Week18</td>
                    </tr>
                    <tr>
                        <td>32</td>
                        <td>Week14</td>
                    </tr>
                    </tbody>
                </table>
                <table className="right-table" id="scores">
                <tbody>
                    <tr>
                        <td>31</td>
                        <td>Week17</td>
                    </tr>
                    <tr>
                        <td>31</td>
                        <td>Week19</td>
                    </tr>
                    <tr>
                        <td>31</td>
                        <td>Week22</td>
                    </tr>
                    <tr>
                        <td>29</td>
                        <td>Week1</td>
                    </tr>
                    <tr>
                        <td>28</td>
                        <td>Week6</td>
                    </tr>
                    <tr>
                        <td>25</td>
                        <td>Week10</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}

export default Mike