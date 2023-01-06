function Scott(props){
    return(
        <div className="player-card silver">
            <div className="col-sm name">
                <h5>Scott</h5>
            </div>
            <div>
                <p className="tpoints">Total points: 323</p>
                <p className="avg-points">Average: 32.3</p>
            </div>
            <div>
                <div className="tables-container">
                    <table id="scores">
                        
                        <tr>
                            <td>42</td>
                            <td>Week1</td>
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
                            <td>35</td>
                            <td>Week8</td>
                        </tr>
                        <tr>
                            <td>34</td>
                            <td>Week2</td>
                        </tr>
                        <tr>
                            <td>33</td>
                            <td>Week13</td>
                        </tr>
                    </table>
                    <table className="right-table" id="scores">
                        <tr>
                            <td>31</td>
                            <td>Week3</td>
                        </tr>
                        <tr>
                            <td>28</td>
                            <td>Week9</td>
                        </tr>
                        <tr>
                            <td>25</td>
                            <td>Week6</td>
                        </tr>
                        <tr>
                            <td>23</td>
                            <td>Week7</td>
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