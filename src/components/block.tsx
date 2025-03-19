import { __experimentalVStack as VStack } from '@wordpress/components';
import React, { PropsWithChildren } from 'react';
import { Title } from './title';

type BlockProps = PropsWithChildren< {
	title: string;
} >;

export function Block( { title, children }: BlockProps ) {
	return (
		<VStack spacing={ 4 }>
			{ title.length > 0 && <Title text={ title } /> }
			{ children }
		</VStack>
	);
}
