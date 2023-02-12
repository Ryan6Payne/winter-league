function Jeremy(props){

    return(
        <div className="player-card">
            <div className="col-sm name">
                <h5>Jeremy</h5>
            </div>
            <div>
                <p className="tpoints">Total points: 365</p>
                <p className="avg-points">Average: 30.42</p>
            </div>
            <div>
            <div className="tables-container">
                <table id="scores">
                    <tr>
                        <td>38</td>
                        <td>Week16</td>
                    </tr>
                    <tr>
                        <td>35</td>
                        <td>Week14</td>
                    </tr>
                    <tr>
                        <td>34</td>
                        <td>Week1</td>
                    </tr>
                    <tr>
                        <td>34</td>
                        <td>Week15</td>
                    </tr>
                    <tr>
                        <td>33</td>
                        <td>Week19</td>
                    </tr>
                    <tr>
                        <td>31</td>
                        <td>Week2</td>
                    </tr>
                </table>
                <table className="right-table" id="scores">
                    <tr>
                        <td>29</td>
                        <td>Week18</td>
                    </tr>
                    <tr>
                        <td>28</td>
                        <td>Week6</td>
                    </tr>
                    <tr>
                        <td>27</td>
                        <td>Week5</td>
                    </tr>
                    <tr>
                        <td>27</td>
                        <td>Week7</td>
                    </tr>
                    <tr>
                        <td>25</td>
                        <td>Week4</td>
                    </tr>
                    <tr>
                        <td>24</td>
                        <td>Week8</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    )
}

export default Jeremy