import { Card, List, Skeleton } from 'antd';
import * as React from 'react';

interface ICardMovieSkeletonProps {
}

const CardMovieSkeleton: React.FunctionComponent<ICardMovieSkeletonProps> = (props) => {
  return (
    <List
      grid={{ gutter: 16, xl: 5, lg: 5, md: 1, sm: 1, xs: 1 }}
      dataSource={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      renderItem={(item: any) => (
        <List.Item>
          <Card
            cover={
              <Skeleton.Button active={true} style={{ height: 300, width: "100%" }} block />
            }
          >
            <Skeleton active />
          </Card>
        </List.Item>
      )}
    />
  );
};

export default CardMovieSkeleton;
