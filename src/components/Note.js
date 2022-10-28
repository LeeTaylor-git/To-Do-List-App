/*
 * Project Name: To Do List App
 * Author: Taylor Lee
 * Last modified: October 28th, 2022
 * Desc: You will build a simple to-do app where users can add different types of notes. 
 * In addition, users can approve or delete notes from the list.
 */

import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
	);
};

export default Note;
