import styled from 'styled-components';
import { Button, IconButton } from '@mui/material';
import { Save as SaveIcon, Delete as DeleteIcon } from '@mui/icons-material';

const Navbar = () => {
    return (
        <>
            <h1>E commerce</h1>
            <div>
                {/* Using icons within a Button */}
                <Button
                    variant="contained"
                    startIcon={<SaveIcon />}
                    endIcon={<DeleteIcon />}
                >
                    Save and Delete
                </Button>

                {/* Using IconButton with an icon */}
                <WrapperButton aria-label="delete">
                    <DeleteIcon />
                </WrapperButton>
            </div>
        </>
    )
}
export default Navbar;


const WrapperButton = styled(IconButton)`

&:hover{
  background-color:gray
}
`