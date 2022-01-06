import { Card, Descriptions } from 'antd';
import * as React from 'react';
import { HeartOutlined } from '@ant-design/icons';

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
      {/* <Meta
        title={title}
        description={desc}
      /> */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ fontSize: 18, fontWeight: "bold" }}>{title}</div>
        <HeartOutlined />
      </div>

      <div></div>
    </Card>
  );
};

export default CardMovie;
