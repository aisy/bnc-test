import { Card, Descriptions } from 'antd';
import * as React from 'react';

interface ICardMovieProps {
  title?: string,
  img?: string,
  desc?: string,
}

const CardMovie: React.FunctionComponent<ICardMovieProps> = ({ title, img, desc }) => {

  const { Meta } = Card;

  return (
    <Card
      hoverable
      cover={
        <img alt={title} src={img} height={300} />
      }
    >
      <Meta
        title={title}
        description={desc}
      />
    </Card>
  );
};

export default CardMovie;
