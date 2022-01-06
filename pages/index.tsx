import { Button, List } from 'antd';
import { useEffect, useState } from 'react'
import ListCardMovie from '../components/ListCardMovie';

export default function Home() {

  const [dataMovies, setdataMovies] = useState([]);
  const [newMovies, setNewMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingData, setLoadingData] = useState(false);
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    // window.onscroll = () => {
    //   if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
    //     // if (!noData) {
    //     loadNewMovies();
    //     console.warn("tets");
    //     // }
    //   }
    // }

    const getData = async () => {
      try {
        let getFromURL = await fetch('https://private-2fff44-bncfetest.apiary-mock.com/movies');
        let dataJson = await getFromURL.json();
        // setdataMovies(dataJson.data);

        let setPageData = [];
        let newData = [];
        let dataMovies = dataJson.data;

        // looping to split data each 10
        for (let i = 0; i < dataMovies.length; i += 10) {
          setPageData.push(dataMovies.slice(i, i + 10))
        }
        console.log(setPageData[0]);

        // looping to push newData
        for (let i = 1; i < setPageData.length; i++) {
          newData.push(setPageData[i]);
        }

        // console.log(newData);
        setLoading(false);
        setdataMovies(setPageData[0]);
        setNewMovies(newData);
      } catch (error) {
        console.warn(error);
      }
    }
    getData();
  }, []);

  const loadNewMovies = () => {
    if (newMovies.length !== 0) {
      let newDataMovies = [];
      newDataMovies.push(...dataMovies, ...newMovies[0]);
      newMovies.shift();
      console.log(newDataMovies);
      console.log(newMovies);
      setdataMovies(newDataMovies);
    } else {
      setNoData(true);
      // console.log("data habis");
    }
  }

  return (
    <div>
      <div style={{ padding: 30 }}>

        <ListCardMovie
          loading={loading}
          data={dataMovies}
        />
        {
          newMovies.length === 0 ? <div>Semua data sudah tampil</div> : <Button onClick={loadNewMovies}>Load more data</Button>
        }
      </div>
    </div>
  )
}
