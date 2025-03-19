import React from 'react';
import { useBlockProps } from '@wordpress/block-editor';
import { Attributes } from './models/wordpress';
import { Settings } from './components/settings';
import { EditTitle } from './components/edit-title';
import { Block } from './components/block';
import { useFetchMembers } from './hooks/use-fetch-memebers';
import { GridSwitch } from './components/grid-switch';
import { Member } from './components/member';

type EditProps = {
	attributes: Attributes;
	setAttributes: ( attributes: Partial< Attributes > ) => void;
};

export default function Edit( { attributes, setAttributes }: EditProps ) {
	const blockProps = useBlockProps();
	const members = useFetchMembers();

	return (
		<div { ...blockProps }>
			<Settings>
				<EditTitle
					value={ attributes.title }
					onChange={ ( value ) => setAttributes( { title: value } ) }
				/>
				<GridSwitch
					checked={ attributes.showAsGrid }
					onChange={ ( value ) =>
						setAttributes( { showAsGrid: value } )
					}
				/>
			</Settings>
			<Block title={ attributes.title }>
				{ ! members.length ? (
					<p className="no-data">No members found!</p>
				) : (
					<div
						className={ `members ${
							attributes.showAsGrid
								? 'members--grid'
								: 'members--list'
						}` }
					>
						{ members.map( ( item, index ) => (
							<Member key={ item.name + index } { ...item } />
						) ) }
					</div>
				) }
			</Block>
		</div>
	);
}
