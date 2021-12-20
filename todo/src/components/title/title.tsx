import React from 'react';

interface Props {
    title: string,
};

const Title = ({ title }: Props) => (
    <h1 className="title">{title}</h1>
);

Title.defaultProps = {
    title: 'Simple title',
};

export default Title;
