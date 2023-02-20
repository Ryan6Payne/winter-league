function Scott(props){
    return(
        <div className="player-card gold">
            <div className="col-sm name">
                <h5>Ryan</h5>
            </div>
            <div>
                <p className="tpoints">Total points: 426</p>
                <p className="avg-points">Average: 35.5</p>
            </div>
            <div>
            <div className="tables-container">
                    <table id="scores">
                        <tr>
                            <td>42</td>
                            <td>Week1</td>
                        </tr>
                        <tr>
                            <td>41</td>
                            <td>Week15</td>
                        </tr>
                        <tr>
                            <td>38</td>
                            <td>Week19</td>
                        </tr>
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
                    </table>
                    <table className="right-table" id="scores">
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
                        <tr>
                            <td>32</td>
                            <td>Week3</td>
                        </tr>
                        <tr>
                            <td>32</td>
                            <td>Week6</td>
                        </tr>
                        <tr>
                            <td>32</td>
                            <td>Week18</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Scott