import metadata from '../block.json';

export type Attributes = {
	[ K in keyof typeof metadata.attributes ]: ( typeof metadata.attributes )[ K ][ 'default' ];
};
