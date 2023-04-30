function Scott(props){
    return(
        <div className="player-card gold">
            <div className="col-sm name">
                <h5>Ryan</h5>
            </div>
            <div>
                <p className="tpoints">Total points: 446</p>
                <p className="avg-points">Average: 37.17</p>
            </div>
            <div>
            <div className="tables-container">
                    <table id="scores">
                        <tbody>
                            <tr>
                                <td>42</td>
                                <td>Week1</td>
                            </tr>
                            <tr>
                                <td>41</td>
                                <td>Week15</td>
                            </tr>
                            <tr>
                                <td>40</td>
                                <td>Week23</td>
                            </tr>
                            <tr>
                                <td>38</td>
                                <td>Week19</td>
                            </tr>
                            <tr>
                                <td>38</td>
                                <td>Week21</td>
                            </tr>
                            <tr>
                                <td>38</td>
                                <td>Week22</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="right-table" id="scores">
                        <tbody>
                            <tr>
                                <td>37</td>
                                <td>Week5</td>
                            </tr>
                            <tr>
                                <td>37</td>
                                <td>Week9</td>
                            </tr>
                            <tr>
                                <td>35</td>
                                <td>Week8</td>
                            </tr>
                            <tr>
                                <td>34</td>
                                <td>Week14</td>
                            </tr>
                            <tr>
                                <td>33</td>
                                <td>Week4</td>
                            </tr>
                            <tr>
                                <td>33</td>
                                <td>Week20</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Scott