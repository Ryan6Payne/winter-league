function Nick(props){
    
    return(
        <div className="player-card">
            <div className="col-sm name">
                <h5>Nick</h5>
            </div>
            <div>
                <p className="tpoints">Total points: 134</p>
            </div>
            <div>
            <div className="tables-container">
                <table id="scores">
                    <tr>
                        <td>36</td>
                        <td>Week 2</td>
                    </tr>
                    <tr>
                        <td>35</td>
                        <td>Week 5</td>
                    </tr>
                    <tr>
                        <td>33</td>
                        <td>Week 4</td>
                    </tr>
                    <tr>
                        <td>30</td>
                        <td>Week 1</td>
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

export default Nick