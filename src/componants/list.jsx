import React, { useState } from 'react';
import Data from '../data';

function List(params) {
    const [getList,setList] = useState(Data);
    return(
        <React.Fragment>
            <div className="container">
                <div className="list-group">
                    {Data.map(v => (
                        <div className="list-group-item list-group-item-action">{v.id}. {v.title}</div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}
export default List;