import React from "react";
import SearchBar from "../containers/search_bar";
import WeatherList from "../containers/weather_list";

class APP extends React.Component {
    render() {
        return (
            <div>
                <SearchBar />
                <WeatherList />
            </div>
        )
    }
}

export default APP;