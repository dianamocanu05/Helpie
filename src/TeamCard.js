import React from "react"

const TeamCard = (props) => {
    const cardGenerator = () =>
        props.Members.map((item) => (
          <p>{item}</p>
        ));
    return (<div class="TeamCard">
        <h2>{props.Type}</h2>
        <div class="people">{cardGenerator()}</div>
    </div>);
}

export default TeamCard