import React, { Component } from "react";

interface ISearchService {
    getSuggestions(query: string): string[];
}

// Temporary implementation for fuzzy search using a static list of strings
class StaticSearchService implements ISearchService {
    allSuggestions: string[] = [
        "Wildlife Conservation",
        "Gujarat Map",
        "Banni Grassland",
        "Thorn-Scrub Forest",
        "Rain-fed Agriculture",
        "Mangroves",
        "Wildlife Protection",
        "Habitat Restoration",
        "Endangered Species",
        "Wildlife Sanctuary",
    ];

    getSuggestions(query: string): string[] {
        return this.allSuggestions.filter((suggestion) =>
            suggestion.toLowerCase().includes(query.toLowerCase())
        );
    }
}

interface SearchBarProps {
    searchService: ISearchService;
}
interface SearchBarState {
    query: string;
    suggestions: string[];
}

class SearchBar extends Component<SearchBarProps, SearchBarState> {
    constructor(props: SearchBarProps) {
        super(props);
        this.state = {
            query: "",
            suggestions: [],
        };
    }

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        this.setState({ query });

        // Use the search service to get suggestions
        const filteredSuggestions = this.props.searchService.getSuggestions(query);

        // Update the suggestions in the state
        this.setState({
            suggestions: query ? filteredSuggestions : [],
        });
    };

    handleSuggestionClick = (suggestion: string) => {
        this.setState({
            query: suggestion,
            suggestions: [],
        });
    };

    render() {
        const { query, suggestions } = this.state;

        return (
            <div className="relative w-full max-w-md">
                {/* Search Input */}
                <input
                    type="text"
                    value={query}
                    onChange={this.handleInputChange}
                    className="w-full px-4 py-2 rounded-md border border-transparent focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
                    placeholder="Search..."
                />

                {/* Search Button */}
                <button
                    className="absolute top-0 right-0 px-4 py-2 text-white bg-orange-500 rounded-md focus:outline-none hover:bg-orange-600 transition duration-300"
                >
                    Search
                </button>

                {/* Suggestions Dropdown */}
                {suggestions.length > 0 && (
                    <div className="absolute top-full left-0 w-full mt-1 bg-white rounded-md shadow-lg z-10">
                        <ul>
                            {suggestions.map((suggestion, index) => (
                                <li
                                    key={index}
                                    onClick={() => this.handleSuggestionClick(suggestion)}
                                    className="px-4 py-2 cursor-pointer hover:bg-orange-100 transition duration-200"
                                >
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

// Example usage of SearchBar with StaticSearchService
const searchService = new StaticSearchService();

export default function SearchBarComponent() {
    return <SearchBar searchService={searchService} />;
}
