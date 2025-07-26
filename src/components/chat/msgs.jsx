import ChainMessages from "./ChainMessages";
import pfp from "../groups-and-dms/pfp.jpg";

export default function Messages() {
  return (
    <div style={{ padding: '10px', overflowY: 'scroll', height: '100%' }}>
        <ChainMessages
            name="Jothin Kumar"
            image={pfp}
            messages={['namaste\naapka naam kya hai?']}
        />
    </div>
  );
}
