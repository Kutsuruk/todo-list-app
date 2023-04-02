import {FC} from "react";
import {Box, Typography} from "@mui/material";

const Header:FC = () => {
    return(
        <Box textAlign='left'>
            <Typography fontSize='35px' variant='h3'>
                Todo List App
            </Typography>
        </Box>
    )
}

export default Header