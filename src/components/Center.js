import Jeremy from "./Jeremy";
import Scott from "./Scott";
import Ryan from "./Ryan";
import Adrian from "./Adrian";
import Andy from "./Andy";
import Mike from "./Mike";
import Nick from "./Nick";
import Craig from "./Craig";
import '../App.css'

function Center(){
        return(
            <div>
                {/* <div class="information">
                    <h1 class="title">Winter League</h1>
                    <div class="breakdown">
                        <p>First Place: £120</p>
                        <p>Second Place: £80</p>
                        <p>Third Place: £40</p>
                    </div>
                </div> */}

                <div class="container">

                    <div class="row">
                        <div class="col-sm">
                            <Scott/>
                        </div>
                        <div class="col-sm">
                            <Ryan/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm">
                            <Craig/>
                        </div>
                        <div className="col-sm">
                            <Nick/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm">
                            <Jeremy/>
                        </div>
                        <div className="col-sm">
                            <Mike/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm">
                            <Andy/>
                        </div>
                        <div className="col-sm">
                            <Adrian/>
                        </div>
                    </div>
                </div>
            </div>
                
        )
}

export default Center