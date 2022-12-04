function Scott(props){
    return(
        <div className="player-card gold">
            <div className="col-sm name">
                <h5>Scott</h5>
            </div>
            <div>
                <p className="tpoints">Total points: 290</p>
                <p className="avg-points">Average: 32.2</p>
            </div>
            <div>
                <div className="tables-container">
                    <table id="scores">
                        
                        <tr>
                            <td>42</td>
                            <td>Week 1</td>
                        </tr>
                        <tr>
                            <td>36</td>
                            <td>Week 4</td>
                        </tr>
                        <tr>
                            <td>36</td>
                            <td>Week 5</td>
                        </tr>
                        <tr>
                            <td>35</td>
                            <td>Week 8</td>
                        </tr>
                        <tr>
                            <td>34</td>
                            <td>Week 2</td>
                        </tr>
                        <tr>
                            <td>31</td>
                            <td>Week 3</td>
                        </tr>
                    </table>
                    <table className="right-table" id="scores">
                        <tr>
                            <td>28</td>
                            <td>Week 9</td>
                        </tr>
                        <tr>
                            <td>25</td>
                            <td>Week 6</td>
                        </tr>
                        <tr>
                            <td>23</td>
                            <td>Week 7</td>
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

export default Scott