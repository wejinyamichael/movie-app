import React from 'react'

function Search() {
  return (
    <div>
        <div className="search">
            <input placeholder='search movies...' className="search"></input>
            {/* <input
            value={props.value}
            onChange={(event) => props.setSearchValue{event.target.value}
            }
            placeholder='search movies...' className="search"></input> */}
        </div>
    </div>
  )
}

export default Search