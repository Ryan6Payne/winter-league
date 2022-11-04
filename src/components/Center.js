import Jeremy from "./Jeremy";
import Scott from "./Scott";
import Ryan from "./Ryan";
import Adrian from "./Adrian";
import Andy from "./Andy";
import Mike from "./Mike";
import Nick from "./Nick";
import Craig from "./Craig";
import Blank from "./Blank";
import '../App.css'

function Center(){
        return(
            <div>
                {/* <div class="information">
                    <h1 class="title">Winter League</h1>
                    <div class="breakdown">
                        <p className="tpoints">First Place: £120</p>
                        <p className="tpoints">Second Place: £80</p>
                        <p className="tpoints">Third Place: £40</p>
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
                        <div className="col-sm">
                            <Craig/>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-sm">
                            <Nick/>
                        </div>
                        <div className="col-sm">
                            <Jeremy/>
                        </div>
                        <div className="col-sm">
                            <Andy/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm">
                            <Mike/>
                        </div>
                        <div className="col-sm">
                            <Blank/>
                        </div>
                        <div className="col-sm">
                            <Blank/>
                        </div>
                    </div>
                </div>
            </div>
                
        )
}

export default Center