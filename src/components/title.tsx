import React from 'react';

type TitleProps = {
	text: string;
};

export function Title( { text }: TitleProps ) {
	return <p className="title">{ text }</p>;
}
