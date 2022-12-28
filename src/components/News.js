import React,{useState, useEffect} from 'react'
import NewsItems from './NewsItems'
import PropTypes from 'prop-types';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

const News =(props)=>{
  const [articles, setArticles]=useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading]= useState(true)
  const [totalResults, setTotalResults] = useState(0)

 
  useEffect(() => {
    const updateNews= async()=>{
      props.setProgress(10);
      const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fedaddf0837e4ebbbe63bcc32e51529d&page=${page}&pageSize=12`;
      const  data= await fetch(url);
      setLoading(true)
      props.setProgress(30);
      const parsedData = await data.json();
      props.setProgress(70);
      console.log(parsedData);
      setArticles(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      setLoading(false)
      props.setProgress(100);
    };
   updateNews();
  },[]);

  const fetchMoreData= async()=>{
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fedaddf0837e4ebbbe63bcc32e51529d&page=${page + 1}&pageSize=12`;
    setPage( page + 1)
    const  data= await fetch(url);
    const parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  }
  // const handlePrevClick = async ()=>{
  //   setPage(page - 1)
  //   updateNews();
  // }
  // const handleNextClick = async ()=>{
  //   if(page+1 > Math.ceil(totalResults/12)){

  //   }else{
  //     setPage(page + 1)
  //     updateNews();
  // }
  // }
  
    
    return (
      <div>
        <div className='container my-3'>
            <h2>Headlines.</h2>
            {loading && <Loading />}
            <InfiniteScroll 
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Loading />}
            >
              <div className='container'>
                <div className='row'>
                  {articles.map((element)=>{
                    return <div className='col-md-4' key={element.url}>
                    <NewsItems title={element.title ? element.title.slice(0,45) : ""} description={element.description ? element.description.slice(0,90) : ""} imgUrl={element.urlToImage} newsUrl={element.url} />
                </div>
                  })}
                  </div> 
              </div>
            </InfiniteScroll>
            {/* <div className='d-flex justify-content-between'>
            <button type="button" disabled={page<=1} className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>
            <button type="button" disabled={page+1 > Math.ceil(totalResults/12)} className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
            </div> */}
        </div>
      </div>
    )
  }


News.defaultProps = {
  country:'us',
  pageSize:12,
}
News.propTypes = {
  country : PropTypes.string,
  pageSize : PropTypes.number,
}
export default News