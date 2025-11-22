import { useSocket } from "../../context/SocketContext";

const ConnectionStatus = () => {
  const { socket, isConnected } = useSocket();
  return (
    <>
      <div>
        <strong>Socket Status:</strong>{" "}
        <span style={{ color: isConnected ? "green" : "red" }}>
          {isConnected ? "Connected" : "Disconnected"}
        </span>
        {isConnected && <div>Socket ID: {socket?.id}</div>}
      </div>
    </>
  );
};

export default ConnectionStatus;
