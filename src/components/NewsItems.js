import React from 'react'

const NewsItems = (props)=> {
    let {title, description,imgUrl,newsUrl} = props;
    return (
      <div>
        <div className="card" >
            <img src={!imgUrl ? "https://gray-wbay-prod.cdn.arcpublishing.com/resizer/EN6LEpEGmlczItP_Qt42MYTKJV8=/1200x600/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/Y7Q662GTPFBLHAHUXTUUTSZ5Z4.jpeg" : imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Read more</a>
            </div>
        </div>
      </div>
    )
  }

export default NewsItems