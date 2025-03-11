import { TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

type EditTitleProps = {
	value: string;
	onChange: ( newValue: string ) => void;
};
export function EditTitle( { value, onChange }: EditTitleProps ) {
	return (
		<TextControl
			__nextHasNoMarginBottom
			__next40pxDefaultSize
			label={ __( 'Title', 'team-members2' ) }
			value={ value }
			onChange={ onChange }
		/>
	);
}
