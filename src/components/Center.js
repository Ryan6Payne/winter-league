import Jeremy from "./Jeremy";
import Scott from "./Scott";
import Ryan from "./Ryan";
import Information from "./Information";
import Andy from "./Andy";
import Mike from "./Mike";
import Nick from "./Nick";
import Craig from "./Craig";
import Blank from "./Blank";
import '../App.css'

function Center(){
        return(
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            <Ryan/>
                        </div>
                        <div className="col-sm">
                            <Craig/>
                        </div>
                        <div class="col-sm">
                            <Scott/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm">
                            <Andy/>
                        </div>
                        <div className="col-sm">
                            <Jeremy/>
                        </div>
                        <div className="col-sm">
                            <Nick/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm">
                            <Mike/>
                        </div>
                        <div className="col-sm">
                            <Information/>
                        </div>
                        {/* <div className="col-sm">
                            <Blank/>
                        </div>
                        <div className="col-sm">
                            <Blank/>
                        </div> */}
                    </div>
                </div>
            </div>
                
        )
}

export default Center