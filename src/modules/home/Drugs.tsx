import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Drug } from "../../types";

const Drugs: React.FC<{ filteredMain: Drug[] }> = ({filteredMain}) => {
    const handleClick = () => {

    };
    return (
        <Box sx={{margin: 4}}>
            <Stack direction="row" sx={{flexWrap: "wrap", gap: 5}}>
                {filteredMain?.map((drug, index) => (
                    <Card key={index} color="primary" sx={{width: '200px', cursor: 'pointer'}} onClick={handleClick}>
                        <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: "#E7F1FF"}}>
                            <Image src={drug.image} height={100} width={100} alt="image" />
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
                            
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </Box>
    );
};

export default Drugs;