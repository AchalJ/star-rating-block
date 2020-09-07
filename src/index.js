import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import attributes from './attributes';
import edit from './edit';
import save from './save';
import example from './example';
import './style.scss';
import './editor.scss';

registerBlockType( 'ideabox/star-rating', {
	title: __( 'Star Rating', 'ib-star-rating' ),
	description: __( 'Star Rating Block', 'ib-star-rating' ),
	icon: 'star-empty',
	category: 'widgets',
	keywords: [
		__( 'rating', 'ib-star-rating' ),
		__( 'star rating', 'ib-star-rating' ),
	],

	attributes,
	edit,
	save,
	example,
} );
