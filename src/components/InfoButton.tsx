import InfoIcon from "@mui/icons-material/Info";
import type { IconButtonProps } from "@mui/material";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    Link,
    Typography,
} from "@mui/material";
import { type ReactNode, useState } from "react";

type Props = Omit<IconButtonProps, "onClick">;

const InfoButton = ({ ...iconButtonProps }: Props): ReactNode => {
    const [showDialog, setShowDialog] = useState(false);

    return (
        <>
            <IconButton
                {...iconButtonProps}
                onClick={() => {
                    setShowDialog(true);
                }}
            >
                <InfoIcon />
            </IconButton>

            <Dialog
                open={showDialog}
                maxWidth="sm"
                fullWidth
                onClose={() => {
                    setShowDialog(false);
                }}
            >
                <DialogTitle>About</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography>Version {appVersion}</Typography>
                        <Typography>Developed by DASPRiD</Typography>
                        <Typography>
                            <Link
                                href="https://github.com/bloop-box/bloop-box-config"
                                target="_blank"
                            >
                                Source
                            </Link>
                        </Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => {
                            setShowDialog(false);
                        }}
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default InfoButton;
