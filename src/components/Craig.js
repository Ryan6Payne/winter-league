function Craig(props){
    return(
        <div className="player-card gold">
            <div className="name">
                <h5>Craig</h5>
            </div>
            <div>
                <p className="tpoints">Total points: 265</p>
                <p className="avg-points">Average: 33.1</p>
            </div>
            <div>
            <div className="tables-container">
                <table id="scores">
                    <tr>
                        <td>37</td>
                        <td>Week 5</td>
                    </tr>
                    <tr>
                        <td>37</td>
                        <td>Week 6</td>
                    </tr>
                    <tr>
                        <td>34</td>
                        <td>Week 1</td>
                    </tr>
                    <tr>
                        <td>34</td>
                        <td>Week 3</td>
                    </tr>
                    <tr>
                        <td>33</td>
                        <td>Week 2</td>
                    </tr>
                    <tr>
                        <td>32</td>
                        <td>Week 4</td>
                    </tr>
                </table>
                <table className="right-table" id="scores">
                    <tr>
                        <td>31</td>
                        <td>Week 8</td>
                    </tr>
                    <tr>
                        <td>27</td>
                        <td>Week 7</td>
                    </tr>
                    <tr>
                        <td>  </td>
                        <td>       </td>
                    </tr>
                    <tr>
                        <td>  </td>
                        <td>       </td>
                    </tr>
                    <tr>
                        <td>  </td>
                        <td>       </td>
                    </tr>
                    <tr>
                        <td>  </td>
                        <td>       </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    )
}

export default Craig