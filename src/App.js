import "./App.css";
import FloatingButtons from "./components/FloatingButtons/FloatingButtons";
import JourneyBoard from "./components/JourneyBoard/JourneyBoard";
import MainScreen from "./components/MainScreen/MainScreen";
import Navbar from "./components/Navbar/Navbar";
import NoticeBoard from "./components/NoticeBoard/NoticeBoard";

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="main-container">
				<MainScreen />
				<JourneyBoard />
				<NoticeBoard />
				<FloatingButtons />
			</div>
		</div>
	);
}

export default App;
