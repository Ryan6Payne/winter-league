function Jeremy(props){

    return(
        <div className="player-card">
            <div className="col-sm name">
                <h5>Jeremy</h5>
            </div>
            <div>
                <p className="tpoints">Total points: 411</p>
                <p className="avg-points">Average: 34.25</p>
            </div>
            <div>
            <div className="tables-container">
                <table id="scores">
                    <tr>
                        <td>40</td>
                        <td>Week20</td>
                    </tr>
                    <tr>
                        <td>38</td>
                        <td>Week16</td>
                    </tr>
                    <tr>
                        <td>37</td>
                        <td>Week22</td>
                    </tr>
                    <tr>
                        <td>36</td>
                        <td>Week21</td>
                    </tr>
                    <tr>
                        <td>36</td>
                        <td>Week23</td>
                    </tr>
                    <tr>
                        <td>35</td>
                        <td>Week14</td>
                    </tr>
                </table>
                <table className="right-table" id="scores">
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
                    <tr>
                        <td>29</td>
                        <td>Week18</td>
                    </tr>
                    <tr>
                        <td>28</td>
                        <td>Week6</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    )
}

export default Jeremy