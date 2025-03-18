import Header from "./components/Header";
import ChatWindow from "./components/ChatWindow";
import MessageInput from "./components/MessageInput";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-grow">
        <main className="flex-grow flex flex-col justify-between p-4">
          <ChatWindow />
          <MessageInput />
        </main>
      </div>
    </div>
  )
}

export default App;