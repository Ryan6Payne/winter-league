function Jeremy(props){
    const points = 401;
    const average = points / 12;
    return(
        <div className="player-card">
            <div className="col-sm name">
                <h5>Jeremy</h5>
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
                        <td>37</td>
                        <td>Week7</td>
                    </tr>
                    <tr>
                        <td>36</td>
                        <td>Week11</td>
                    </tr>
                    <tr>
                        <td>35</td>
                        <td>Week9</td>
                    </tr>
                    <tr>
                        <td>35</td>
                        <td>Week10</td>
                    </tr>
                    <tr>
                        <td>34</td>
                        <td>Week8</td>
                    </tr>
                    <tr>
                        <td>34</td>
                        <td>Week21</td>
                    </tr>
                    </tbody>
                </table>
                <table className="right-table" id="scores">
                <tbody>
                    <tr>
                        <td>33</td>
                        <td>Week18</td>
                    </tr>
                    <tr>
                        <td>32</td>
                        <td>Week6</td>
                    </tr>
                    <tr>
                        <td>32</td>
                        <td>Week20</td>
                    </tr>
                    <tr>
                        <td>32</td>
                        <td>Week22</td>
                    </tr>
                    <tr>
                        <td>31</td>
                        <td>Week5</td>
                    </tr>
                    <tr>
                        <td>30</td>
                        <td>Week1</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}

export default Jeremy