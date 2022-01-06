import React, { useState } from 'react';
import '../css/movieRow.css'

export default ({ title, items }) => {
    const [scrollX, setScrollX] = useState(-400);

    const handleLeftArrow = () => {
        let x = scrollX + 150;
        if (x > 0) x = 0;
        setScrollX(x)
    }
    const handleRightArrow = () => {

    }

    return (
        <div className='movieRow'>
            <h2>{title}</h2>
            <div className="movieRow-left" onClick={handleLeftArrow}>

            </div>
            <div className="movieRow-right">

            </div>
            <div className="movieRow-listarea">
                <div className="movieRow-list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div className="movieRow-item" key={key}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

