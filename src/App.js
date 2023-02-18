import {Container, Stack} from "@mui/material";
import Left from "./layouts/Left";
import Right from "./layouts/Right";


const  App =()=> {
  return (
    <Container >
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="space-evenly"  marginTop={10}>
            <Left/>
            <Right/>
        </Stack>
    </Container>
  );
}

export default App;
