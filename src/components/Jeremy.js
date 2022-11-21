function Jeremy(props){

    return(
        <div className="player-card">
            <div className="col-sm name">
                <h5>Jeremy</h5>
            </div>
            <div>
                <p className="tpoints">Total points: 172</p>
                <p className="avg-points">Average: 28.7</p>
            </div>
            <div>
            <div className="tables-container">
                <table id="scores">
                    <tr>
                        <td>34</td>
                        <td>Week 1</td>
                    </tr>
                    <tr>
                        <td>31</td>
                        <td>Week 2</td>
                    </tr>
                    <tr>
                        <td>28</td>
                        <td>Week 6</td>
                    </tr>
                    <tr>
                        <td>27</td>
                        <td>Week 5</td>
                    </tr>
                    <tr>
                        <td>27</td>
                        <td>Week 7</td>
                    </tr>
                    <tr>
                        <td>25</td>
                        <td>Week 4</td>
                    </tr>
                </table>
                <table className="right-table" id="scores">
                    <tr>
                        <td>  </td>
                        <td>      </td>
                    </tr>
                    <tr>
                        <td>  </td>
                        <td>      </td>
                    </tr>
                    <tr>
                        <td>  </td>
                        <td>      </td>
                    </tr>
                    <tr>
                        <td>  </td>
                        <td>      </td>
                    </tr>
                    <tr>
                        <td>  </td>
                        <td>      </td>
                    </tr>
                    <tr>
                        <td>  </td>
                        <td>      </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    )
}

export default Jeremy