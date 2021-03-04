import { FadeLoader } from "react-spinners";
import React from "react";

const Spinner = props => {
 const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };;
  return (
    <div style={style}>
      <FadeLoader color={"#123abc"} loading={props.isFetching} />
    </div>
  );
};

export default Spinner;