import { useState } from "react";
import Loading from "./components/common/Loading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Notes from "./components/Notes";
import ajax from "./controllers/ajax";


function App() {
	const BASE_URL = "http://bpakhi.cf/note_keeper_api/index.php";

	let defaultNotes = [
		{
			title: "Note 3",
			content: "Demo note content 3"
		},
		{
			title: "Note 2",
			content: "Demo note content 2"
		},
		{
			title: "Note 1",
			content: "Demo note content 1"
		}
	];
	const [notes, setNotes] = useState(defaultNotes);
	const [isLoading, setIsLoading] = useState(true);

	ajax.get(BASE_URL + '?get_notes', function (data, status, resp_code) {
		if (status === 'success') {
			setNotes(JSON.parse(data));
			setIsLoading(false);
		}
	});

	return (
		<>
			{(isLoading) ? <Loading /> : ''}
			<Header notes={notes} setNotes={setNotes} BASE_URL={BASE_URL} />
			<Notes notes={notes} setNotes={setNotes} BASE_URL={BASE_URL} setIsLoading={setIsLoading} />
			<Footer />
		</>
	);
}

export default App;