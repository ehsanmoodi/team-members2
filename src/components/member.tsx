import { AVATAR_PLACEHOLDER } from '../utils/constants';

type MemberProps = {
	name: string;
	role: string;
	image?: string;
};

export function Member( { name, role, image }: MemberProps ) {
	return (
		<div className="member">
			<div className="member__image">
				<img
					src={ image || AVATAR_PLACEHOLDER }
					alt={ `avatar of ${ name }` }
				/>
			</div>

			<div className="member__meta">
				{ name }
				<span>{ role }</span>
			</div>
		</div>
	);
}
