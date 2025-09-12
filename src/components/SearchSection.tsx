import { Box, TextField } from "@mui/material";
type SearchSectionProps = {
  searchTerm: string;
  onChange: (term: string) => void;
};

export function SearchSection({ searchTerm, onChange }: SearchSectionProps) {
  return (
    <Box>
      <TextField
        label="Search TV Shows"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => onChange(e.target.value)}
      />
    </Box>
  );
}
