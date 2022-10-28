/*
 * Project Name: To Do List App
 * Author: Taylor Lee
 * Last modified: October 28th, 2022
 * Desc: You will build a simple to-do app where users can add different types of notes. 
 * In addition, users can approve or delete notes from the list.
 */

import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({
	notes,
	handleAddNote,
	handleDeleteNote,
}) => {
	return (
		<div className='notes-list'>
			{notes.map((note) => (
				<Note
					id={note.id}
					text={note.text}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
				/>
			))}
			<AddNote handleAddNote={handleAddNote} />
		</div>
	);
};

export default NotesList;
