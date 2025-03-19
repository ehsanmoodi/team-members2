import './styles/style.scss';

import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import metadata from './block.json';

registerBlockType( metadata.name, {
	title: metadata.title,
	attributes: metadata.attributes,
	category: metadata.category,
	edit: Edit,
} );
