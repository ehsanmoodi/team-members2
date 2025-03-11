import { useEffect, useState } from 'react';
import { Members } from '../models/member';

export const useFetchMembers = (): Members => {
	const [ members, setMembers ] = useState< Members >( [] );

	useEffect( () => {
		async function fetchMembers() {
			const response = await fetch(
				'https://my-json-server.typicode.com/ehsanmoodi/members/items'
			);
			const result: Members = await response.json();
			setMembers( result );
		}

		fetchMembers();
	}, [] );

	return members;
};
