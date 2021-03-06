import React , { useState , useEffect } from 'react';

const Pagination = (props) => {
    const [counter,setCounter] = useState(1);
    const [numberOfButtons , setnumberOfButtons ] = useState(3);
    useEffect(()=>{
        const value = counter*props.showperpage;
        props.onPaginationChange(value - props.showperpage , value);
    },[counter]);

    const onButtonClick = (type) => {
        if (type === "prev") {
            if (counter === 1) {
                setCounter(1);
            } else {
                setCounter(counter-1)
            }
        } else if (type === "next") {
            if (numberOfButtons === counter) {
                setCounter(counter);
            }else {
                setCounter(counter + 1);
            }
        }
    }
    return (
        <div className="d-flex justify-content-center">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><button className="page-link" onClick={()=>{onButtonClick("prev")}}>Previous</button></li>
                        {new Array(numberOfButtons).fill("").map((element,index)=>(
                            <li key={index} className={`page-item ${ (index + 1) === counter ? "active" : null }`}>
                                <a className="page-link" onClick={()=>setCounter(index+1)}>{index+1}</a>
                            </li>
                        ))}
                    <li className="page-item"><button className="page-link" href="#" onClick={()=>{onButtonClick("next")}}>Next</button></li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;
