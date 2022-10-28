/*
 * Project Name: To Do List App
 * Author: Taylor Lee
 * Last modified: October 28th, 2022
 * Desc: You will build a simple to-do app where users can add different types of notes. 
 * In addition, users can approve or delete notes from the list.
 */

import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = ({ handleSearchNote }) => {
	return (
		<div className='search'>
			<MdSearch className='search-icons' size='1.3em' />
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='search tasks...'
			/>
		</div>
	);
};

export default Search;
