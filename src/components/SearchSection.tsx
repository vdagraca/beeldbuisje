import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
type SearchSectionProps = {
  searchTerm: string;
  onChangeTextInput: (term: string) => void;
  genres?: string[];
  onChangeSelect: (genre: string) => void;
  selectedGenre?: string;
};

export function SearchSection({
  searchTerm,
  onChangeTextInput,
  genres,
  onChangeSelect,
  selectedGenre,
}: SearchSectionProps) {
  return (
    <Box>
      <TextField
        label="Search TV Shows"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => onChangeTextInput(e.target.value)}
      />
      <FormControl fullWidth>
        <InputLabel id="filter-label">Filter</InputLabel>
        <Select
          value={selectedGenre}
          onChange={(e) => onChangeSelect(e.target.value)}
        >
          <MenuItem value="">Alle genres</MenuItem>
          {genres?.map((genre) => (
            <MenuItem value={genre} key={genre}>
              {genre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
