import React, { PropsWithChildren } from 'react';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

type SettingsProps = PropsWithChildren;

export function Settings( { children }: SettingsProps ) {
	return (
		<InspectorControls>
			<PanelBody title={ __( 'Settings', 'team-members2' ) }>
				{ children }
			</PanelBody>
		</InspectorControls>
	);
}
