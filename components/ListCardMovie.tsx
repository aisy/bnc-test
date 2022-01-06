import * as React from 'react';
import { List } from 'antd';
import CardMovie from './CardMovie';
import CardMovieSkeleton from './CardMovieSkeleton';

interface IListCardMovieProps {
  data?: Array<any>;
  loading?: boolean;
}

const ListCardMovie: React.FunctionComponent<IListCardMovieProps> = ({ data, loading }) => {



  return (
    <div>
      {
        loading ? <CardMovieSkeleton /> :
          <List
            grid={{ gutter: 16, column: 5 }}
            dataSource={data}
            renderItem={(item: any) => (
              <List.Item>
                <CardMovie
                  title={item.title}
                  img={item.imageUrl}
                />
              </List.Item>
            )}
          />
      }
    </div>
  );
};

export default ListCardMovie;
