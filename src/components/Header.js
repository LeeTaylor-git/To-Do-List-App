/*
 * Project Name: To Do List App
 * Author: Taylor Lee
 * Last modified: October 28th, 2022
 * Desc: You will build a simple to-do app where users can add different types of notes. 
 * In addition, users can approve or delete notes from the list.
 */

import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			<h1>To-Do</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			>
				Toggle Mode
			</button>
		</div>
	);
};

export default Header;
