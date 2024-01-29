import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Timer() {
const [timerMin, setTimerMin] = useState(0);
const [timerSec, setTimerSec] = useState(0);

const navigate = useNavigate();
function save() {

    navigate("/",{state : {min:timerMin,sec:timerSec}});
}
    return ( <main>
        <div>
            <h2>
                Customise Timer
            </h2>
            <input type="Number" placeholder='Give the Min' onChange={(e)=>setTimerMin(e.target.value)}/>
            <input type='Number' placeholder='Give the Sec' onChange={(e)=>setTimerSec(e.target.value)}/>
            <button><Link to="/">Cancel</Link></button>
            <button onClick={save}>Save</button>
            
        </div>
    </main>
    );
}

export default Timer;