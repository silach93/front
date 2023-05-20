import { Button } from "@mui/material";

const Btn = (props) => {
  return (
    <Button className="btn active"
      style={{
        borderRadius: "50%",
        border: "2px solid #000000",
        color: "rgba(0, 0, 0, 0.87)"
      }} href={props.hf}>{props.descr}</Button>
  );
}

export default Btn;