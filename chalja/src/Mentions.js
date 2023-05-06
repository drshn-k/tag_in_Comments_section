import { Mention, MentionsInput } from "react-mentions";
import mentionStyle from "./mentionStyle";
import style from "./style";
import { useState } from "react";
// import [useState]

const users = [
    {
      id: "dronBhayya",
      display: "dronBhayya",
    },
    {
      id: "darshanDada",
      display: "darshanDada",
    },
    {
        id:"surajMayya",
        display:"surajMayya"
    },
  ];

const Mentions = () => {
    const [value , setValue] = useState("");
    console.log("value:", value);
    return(
        <div>
            <MentionsInput style={style} value={value} onChange={e => setValue(e.target.value)}>
                <Mention style={mentionStyle} data={users}/>
            </MentionsInput>
        </div>
    )
};

export default Mentions;