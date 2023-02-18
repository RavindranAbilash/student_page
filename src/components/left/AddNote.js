import {Box, Button, Stack, TextField, Typography} from "@mui/material";


const AddNote = () => {
    return (
        <Box justifyContent="flex-start" alignItems="flex-start">
            <Stack>
                <Typography variant="h6">Add Note</Typography>
                <form style={{marginTop: 4}}>
                    <Stack>
                        <TextField
                            id="outlined-multiline-static"
                            label="Add your note for future Reference" variant="filled"
                            multiline
                            rows={4}
                        />
                        <Button type="submit" variant="contained" style={{marginTop: 8}}>Add Note</Button>
                    </Stack>
                </form>
            </Stack>
        </Box>
    )
}

export default AddNote;