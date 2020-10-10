import Input from '@Components/Input/Input';
import ButtonSc from '@StyledComponents/Button/Button';
import React from 'react';

const SearchBox = () =>
	<div>
		<h1>Find your movie</h1>
		<form action=''>
			<Input placeholder='What do you want to search?' name='search'/>
			<ButtonSc type='submit'>Search</ButtonSc>
		</form>
	</div>

export default SearchBox;
