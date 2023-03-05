function Scott(props){
    return(
        <div className="player-card bronze">
            <div className="col-sm name">
                <h5>Scott</h5>
            </div>
            <div>
                <p className="tpoints">Total points: 430</p>
                <p className="avg-points">Average: 35.8</p>
            </div>
            <div>
                <div className="tables-container">
                    <table id="scores">
                        <tr>
                            <td>42</td>
                            <td>Week1</td>
                        </tr>
                        <tr>
                            <td>40</td>
                            <td>Week20</td>
                        </tr>
                        <tr>
                            <td>36</td>
                            <td>Week4</td>
                        </tr>
                        <tr>
                            <td>36</td>
                            <td>Week5</td>
                        </tr>
                        <tr>
                            <td>36</td>
                            <td>Week14</td>
                        </tr>
                        <tr>
                            <td>36</td>
                            <td>Week22</td>
                        </tr>
                    </table>
                    <table className="right-table" id="scores">
                        <tr>
                            <td>35</td>
                            <td>Week8</td>
                        </tr>
                        <tr>
                            <td>35</td>
                            <td>Week21</td>
                        </tr>
                        <tr>
                            <td>34</td>
                            <td>Week2</td>
                        </tr>
                        <tr>
                            <td>34</td>
                            <td>Week15</td>
                        </tr>
                        <tr>
                            <td>33</td>
                            <td>Week13</td>
                        </tr>
                        <tr>
                            <td>33</td>
                            <td>Week16</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Scott