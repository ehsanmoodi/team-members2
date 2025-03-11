import { ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

type GridSwitchProps = {
	checked: boolean;
	onChange: ( newValue: boolean ) => void;
};

export function GridSwitch( { checked, onChange }: GridSwitchProps ) {
	return (
		<ToggleControl
			__nextHasNoMarginBottom
			label={ __( 'Show As Grid', 'team-members2' ) }
			checked={ checked }
			onChange={ onChange }
		/>
	);
}
