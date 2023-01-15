function Craig(props){
    return(
        <div className="player-card gold">
            <div className="name">
                <h5>Craig</h5>
            </div>
            <div>
                <p className="tpoints">Total points: 397</p>
                <p className="avg-points">Average: 33.1</p>
            </div>
            <div>
            <div className="tables-container">
                <table id="scores">
                    <tr>
                        <td>38</td>
                        <td>Week14</td>
                    </tr>
                    <tr>
                        <td>37</td>
                        <td>Week5</td>
                    </tr>
                    <tr>
                        <td>37</td>
                        <td>Week6</td>
                    </tr>
                    <tr>
                        <td>36</td>
                        <td>Week13</td>
                    </tr>
                    <tr>
                        <td>35</td>
                        <td>Week15</td>
                    </tr>
                    <tr>
                        <td>34</td>
                        <td>Week1</td>
                    </tr>
                </table>
                <table className="right-table" id="scores">
                    <tr>
                        <td>34</td>
                        <td>Week3</td>
                    </tr>
                    <tr>
                        <td>33</td>
                        <td>Week2</td>
                    </tr>
                    <tr>
                        <td>32</td>
                        <td>Week4</td>
                    </tr>
                    <tr>
                        <td>31</td>
                        <td>Week8</td>
                    </tr>
                    <tr>
                        <td>27</td>
                        <td>Week7</td>
                    </tr>
                    <tr>
                        <td>23</td>
                        <td>Week9</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    )
}

export default Craig