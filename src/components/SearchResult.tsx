import { Box, InputAdornment, TextField, MenuItem } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CustomCard from "./CustomCard/CustomCard";
import { useEffect, useState } from "react";
import { automationTopics } from "../assets/data/CardsData";
import type { AutomationTopic } from "../interfaces/interfaces";

function SearchResult() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [filteredData, setFilteredData] = useState<AutomationTopic[]>(automationTopics);

  // Extract unique categories
  const categories = ["All", ...Array.from(new Set(automationTopics.map(item => item.category)))];

  useEffect(() => {
    const filtered = automationTopics.filter((topic) => {
      const searchText = searchTerm.toLowerCase();

      const matchesSearch =
        topic.title.toLowerCase().includes(searchText) ||
        topic.category.toLowerCase().includes(searchText) ||
        topic.aliases.some(alias => alias.toLowerCase().includes(searchText));

      const matchesCategory =
        categoryFilter === "All" || topic.category === categoryFilter;

      return matchesSearch && matchesCategory;
    });

    setFilteredData(filtered);
  }, [searchTerm, categoryFilter]);

  return (
    <Box className="p-8 space-y-4">
      {/* Search and Filter Section */}
      <Box className="flex flex-col md:flex-row gap-4">
        <TextField
          placeholder="Search by title, category, or alias"
          variant="outlined"
          fullWidth
          size="small"
          className="flex-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#999" }} />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          select
          label="Filter by Category"
          size="small"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="flex-1"
        >
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      {/* Cards Grid */}
      {filteredData.length > 0 ? (
        <Box className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredData.map((data) => (
            <CustomCard key={data.id} cardDetails={data} />
          ))}
        </Box>
      ) : (
        <Box className="text-center text-gray-500 pt-8">No results found.</Box>
      )}
    </Box>
  );
}

export default SearchResult;
