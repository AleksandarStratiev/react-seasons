import React from 'react';

const Loading = props => {
       return (
        <div className="ui segment">
            <div className="ui active dimmer">
            <div className="ui huge text loader">{props.message}</div>
            </div>
            <p></p>
            <p></p>
            <p></p>
        </div>
    ) 
};

//Ако не е зададен props от парънт компонента, по дефоут слага "Loading..."
Loading.defaultProps = {
    message : "Loading..."
};

export default Loading;

