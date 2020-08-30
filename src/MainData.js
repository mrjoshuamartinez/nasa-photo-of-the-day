import React from "react";

function MainData (props) {

    return (
        <div>
            <div>
                <h2>
                    {props.data.title}
                    <br></br>
                    {props.data.date}
                </h2>
                <img src ={props.data.url} alt="nasa daily"></img>
            </div>
        <p>{props.data.explanation}</p>
        </div>
    )
}

export default MainData;