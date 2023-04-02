import {Box, Button, TextField} from "@mui/material";
import React, {useState} from "react";

const Panel = () => {
    const [inputValue, setInputValue] = useState('')

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value} = event.target
        setInputValue(value)
    }

    return(
        <Box>
            <TextField id="outlined-basic"
                       label="Outlined"
                       variant="outlined"
                       onChange={onChange}
            />
            <TextField id="outlined-basic"
                       label="Outlined"
                       variant="outlined"
            />

            <Button variant="contained">Contained</Button>
        </Box>
    )
}

export default Panel