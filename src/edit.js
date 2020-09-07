import {
	InspectorControls,
	ColorPalette,
	RichText,
} from '@wordpress/block-editor';
import { PanelBody, TextControl, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import {
	faStar as faStarFull,
	faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';

const edit = ( { attributes, setAttributes } ) => {
	const {
		ratingScale,
		rating,
		size,
		color,
		iconSpaceRight,
		title,
		titleColor,
		titileSpaceRight,
	} = attributes;
	const iconStyle = {
		fontSize: size + 'px',
		marginRight: iconSpaceRight + 'px',
	};

	const fullStar = Math.floor( rating );
	const halfStar = rating % 1 === 0 ? 0 : 1;
	const emptyStar = ratingScale - ( fullStar + halfStar );

	const ratingMax = ratingScale;

	return [
		<InspectorControls>
			<PanelBody title={ __( 'Rating Settings', 'ib-star-rating' ) }>
				<RangeControl
					label={ __( 'Rating Scale', 'ib-star-rating' ) }
					value={ ratingScale }
					onChange={ ( ratingScale ) =>
						setAttributes( { ratingScale } )
					}
					min={ 5 }
					max={ 10 }
					step={ 1 }
				/>

				<RangeControl
					label={ __( 'Rating', 'ib-star-rating' ) }
					value={ rating }
					onChange={ ( rating ) => setAttributes( { rating } ) }
					min={ 0 }
					max={ ratingMax }
					step={ 0.5 }
				/>

				<p>
					<strong>{ __( 'Icon Color', 'ib-star-rating' ) }</strong>
				</p>
				<ColorPalette
					value={ color }
					onChange={ ( color ) => setAttributes( { color } ) }
				/>

				<RangeControl
					label={ __( 'Icon Size', 'ib-star-rating' ) }
					value={ size }
					onChange={ ( size ) => setAttributes( { size } ) }
					min={ 1 }
					max={ 100 }
					step={ 0.5 }
				/>

				<RangeControl
					label={ __( 'Icon Space', 'ib-star-rating' ) }
					value={ iconSpaceRight }
					onChange={ ( iconSpaceRight ) =>
						setAttributes( { iconSpaceRight } )
					}
					min={ 1 }
					max={ 30 }
					step={ 1 }
				/>

				<TextControl
					label={ __( 'Title', 'ib-star-rating' ) }
					value={ title }
					onChange={ ( title ) => setAttributes( { title } ) }
				/>

				<p>
					<strong>{ __( 'Title Color', 'ib-star-rating' ) }</strong>
				</p>

				<ColorPalette
					value={ titleColor }
					onChange={ ( titleColor ) =>
						setAttributes( { titleColor } )
					}
				/>

				<RangeControl
					label={ __( 'Title Space', 'ib-star-rating' ) }
					value={ titileSpaceRight }
					onChange={ ( titileSpaceRight ) =>
						setAttributes( { titileSpaceRight } )
					}
					min={ 1 }
					max={ 50 }
					step={ 1 }
				/>
			</PanelBody>
		</InspectorControls>,
		<div className="ib-star-rating-block">
			<RichText
				tagName="div"
				className="ib-star-rating--title"
				value={ title }
				onChange={ ( title ) => setAttributes( { title } ) }
				placeholder={ __( 'Secondary Label', 'ib-star-rating' ) }
				style={ {
					color: titleColor,
					marginRight: titileSpaceRight + 'px',
				} }
			/>
			<div className="ib-star-rating--icon">
				{ fullStar
					? [ ...Array( fullStar ).keys() ].map( ( item, index ) => (
							<FontAwesomeIcon
								key={ index }
								icon={ faStarFull }
								style={ iconStyle }
								color={ color }
							/>
					  ) )
					: null }
				{ halfStar ? (
					<FontAwesomeIcon
						icon={ faStarHalfAlt }
						style={ iconStyle }
						color={ color }
					/>
				) : null }
				{ emptyStar
					? [ ...Array( emptyStar ).keys() ].map( ( item, index ) => (
							<FontAwesomeIcon
								key={ index }
								icon={ faStarEmpty }
								style={ iconStyle }
								color={ color }
							/>
					  ) )
					: null }
			</div>
		</div>,
	];
};

export default edit;
