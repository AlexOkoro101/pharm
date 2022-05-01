import { Box, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { Drug } from "../../types";

const SearchResults: React.FC<{ filteredDrugs: Drug[] }> = ({filteredDrugs}) => {
    return (
        <Box sx={{margin: 4}}>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mb: 2}}
            >
                Top result
            </Typography>

            {filteredDrugs?.map((drug, index) => (
                <Box key={index} sx={{ flexGrow: 1, borderBottom: '1px solid #ddd', pt: 3, pb: 3 }}>
                    <Box sx={{ display: 'flex', gap: 2}}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ background: "#E7F1FF", borderRadius: '10px', ml: 1 }}
                        >
                            <Image src="/img/1.svg" alt="image" height="50" width="50"/>
                        </IconButton>
                        <Box>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ color: "#053F63", fontSize: "14px", mb: 1, mt: 1 }}
                            >
                                {drug.name}
                            </Typography>

                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ color: "#677B9C", fontSize: "12px"}}
                            >
                                {drug.gram}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Box>
    )
}

export default SearchResults;