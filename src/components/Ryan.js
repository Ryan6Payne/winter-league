function Scott(props){
    return(
        <div className="player-card silver">
            <div className="col-sm name">
                <h5>Ryan</h5>
            </div>
            <div>
                <p className="tpoints">Total points: 414</p>
                <p className="avg-points">Average: 34.5</p>
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
                    </table>
                    <table className="right-table" id="scores">
                        <tr>
                            <td>33</td>
                            <td>Week4</td>
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
                        <tr>
                            <td>30</td>
                            <td>Week2</td>
                        </tr>
                        <tr>
                            <td>29</td>
                            <td>Week13</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Scott