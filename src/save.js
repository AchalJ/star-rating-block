import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import {
	faStar as faStarFull,
	faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';

const save = ( { attributes } ) => {
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

	return (
		<div className="ib-star-rating-block">
			<div
				className="ib-star-rating--title"
				style={ {
					color: titleColor,
					marginRight: titileSpaceRight + 'px',
				} }
			>
				{ title }
			</div>
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
		</div>
	);
};
export default save;
