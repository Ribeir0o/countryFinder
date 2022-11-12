function SearchBar() {
    return(
        <div className="search-bar">
            <input className=""
            placeholder="Search for a country..."/>
            <select>
                <option label="Filter by Region"/>
                <option value="Africa"> Africa</option>
                <option value="America"> America</option>
                <option value="Asia"> Asia</option>
                <option value="Europe"> Europe</option>
                <option value="Oceania"> Oceania</option>
            </select>
        </div>
    )
}

export default SearchBar;