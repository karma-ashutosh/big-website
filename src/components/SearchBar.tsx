import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import {blogData, titleToBlogUrl} from "@/components/Blog.tsx";
import { Search } from "lucide-react";

interface ISearchService {
    getSuggestions(query: string): string[];
}

// Temporary implementation for fuzzy search using a static list of strings
class StaticSearchService implements ISearchService {
    allSuggestions: string[] = blogData.map(b => b.title);

    getSuggestions(query: string): string[] {
        if (!query) {
            // Return the first 5 suggestions if the query is empty
            return this.allSuggestions.slice(0, 5);
        }
        return this.allSuggestions.filter((suggestion) =>
            suggestion.toLowerCase().includes(query.toLowerCase())
        );
    }
}

interface SearchBarProps {
    searchService: ISearchService;
    navigate: (path: string) => void;
}
interface SearchBarState {
    query: string;
    suggestions: string[];
    isFocused: boolean;
}

class SearchBar extends Component<SearchBarProps, SearchBarState> {
    constructor(props: SearchBarProps) {
        super(props);
        this.state = {
            query: "",
            suggestions: this.props.searchService.getSuggestions(""), // Show default suggestions
            isFocused: false,
        };
    }

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        this.setState({ query });

        // Use the search service to get suggestions
        const filteredSuggestions = this.props.searchService.getSuggestions(query);

        // Update the suggestions in the state
        this.setState({
            suggestions: query ? filteredSuggestions : filteredSuggestions.slice(0, 5),
        });
    };

    handleFocus = () => {
        this.setState({ isFocused: true });
    };

    handleBlur = () => {
        this.setState({ isFocused: false });
    };

    handleSuggestionClick = (suggestion: string) => {
        // Update the query in state and clear suggestions
        this.setState({
            query: suggestion,
            suggestions: [],
            isFocused: false,
        });

        // Navigate to the search results page for the selected suggestion
        this.props.navigate(titleToBlogUrl(suggestion));
    };

    handleSearch = () => {
        const { query } = this.state;

        if (query.trim() !== "") {
            // Navigate to the search results page for the entered query
            this.props.navigate(`/search?query=${encodeURIComponent(query)}`);
        }
    };

    render() {
        const { query, suggestions, isFocused } = this.state;

        return (
            <div className="relative w-full max-w-[200px]">
                {/* Search Input */}
                <input
                    type="text"
                    value={query}
                    onChange={this.handleInputChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    className="w-full px-4 py-2 rounded-md border border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800"
                    placeholder="Search..."
                />

                {/* Search Button */}
                <button
                    onClick={this.handleSearch}
                    className="absolute top-0 right-0 px-2 py-2 rounded-r-md focus:outline-none hover:bg-orange-100 transition duration-300"
                >
                    <Search className="h-5 w-5 text-orange-500" />
                </button>

                {/* Suggestions Dropdown */}
                {isFocused && suggestions.length > 0 && (
                    <div className="absolute top-full left-0 w-full mt-1 bg-white rounded-md shadow-lg z-10 overflow-hidden">
                        <ul>
                            {suggestions.map((suggestion, index) => (
                                <li
                                    key={index}
                                    onMouseDown={() => this.handleSuggestionClick(suggestion)} // Use onMouseDown to prevent blur
                                    className="px-4 py-2 cursor-pointer hover:bg-orange-100 transition duration-200 text-gray-700"
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

// Wrapper Component to Use useNavigate for Routing
const SearchBarWithNavigate = () => {
    const navigate = useNavigate();
    const searchService = new StaticSearchService();

    return <SearchBar searchService={searchService} navigate={navigate} />;
};

export default SearchBarWithNavigate;
