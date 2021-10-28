import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import './featured.scss'

const Featured = ({type}) => {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "TV Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="romance">Romance</option>
                    </select>
                </div>
            )}
            <img
                src="https://occ-0-64-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQs7cpuAEY0wlXr_qwOVC2bOjAXOCb-mak22l31B6Alh0QfMkaUSGVGiwOVojwTl9rezZjRQaW7UPWlsgee-pXanjqt6.webp?r=ad6"
                alt=""
            />
            <div className="info">
                <img
                    src="https://occ-0-64-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABY8z9YH-DPW_bguunAIq9EWwPp0hEh_Eh-OvA-HfEQPAqMm0JhPRwhRO1juqGD4yEHIIOKsO4gIHw9Kwb4Zczw63p_58KkVb9MjMSLpEI6P4uQrrvUSuhlP7hvxLUlgwMov5a5CDT2aNIcEPYoZ6W3162YyfE6Y7Yl9SnbwAs1ce0A.webp?r=f15"
                    alt=""
                />
                <span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni expedita quo ullam saepe, enim deserunt nostrum adipisci labore debitis,
                    molestias eveniet aperiam alias rerum laudantium tempore dicta atque. Eos, adipisci.
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>More Info</span>
                    
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured
