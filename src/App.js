import "./App.css";
import { ProfilePage } from "./pages/ProfilePage";
import { ChatPage } from "./pages/ChatPage";
import { ErrorPage } from "./pages/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<ProfilePage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
