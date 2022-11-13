function SearchBar(props) {
    return(
        <div className="search-bar">
            <input onChange={e => props.onFilterNameChange(e.target.value)}
            placeholder="Search for a country..."/>
            <select onChange={e=> props.onFilterRegionChange(e.target.value)}>
                <option label="Filter by Region"/>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia"> Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}

export default SearchBar;