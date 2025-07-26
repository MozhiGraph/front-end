import ChainMessages from "./ChainMessages";

export default function Messages({currentDialog}) {
  return (
    <div style={{ padding: '10px', overflowY: 'scroll', height: '100%' }}>
        {currentDialog}
    </div>
  );
}
