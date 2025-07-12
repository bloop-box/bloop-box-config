import CloseIcon from "@mui/icons-material/Close";
import { AppBar, Container, Dialog, IconButton, Toolbar, Typography } from "@mui/material";
import { type ReactNode, useState } from "react";

type Props = {
    title: string;
    form: ReactNode | null;
    onClose: () => void;
};

const CommandDialog = ({ title, form, onClose }: Props): ReactNode => {
    const [open, setOpen] = useState(true);

    return (
        <Dialog
            fullScreen
            open={open}
            slotProps={{
                transition: {
                    onExited: onClose,
                },
            }}
        >
            <AppBar position="sticky">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>

            <Container component="main" sx={{ mt: 4, mb: 4 }}>
                {form}
            </Container>
        </Dialog>
    );
};

export default CommandDialog;
