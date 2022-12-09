import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material';
import {useSnackbar} from 'notistack';
import {useState} from 'react';

type Props = {
    command : string;
    parameters ?: unknown[];
};

const ndefReader = 'NDEFReader' in window ? new NDEFReader() : null;

const CommandDisplay = ({command, parameters} : Props) : JSX.Element => {
    const {enqueueSnackbar} = useSnackbar();
    const [nfcController, setNfcController] = useState<AbortController | null>(null);

    let result = command;

    if (parameters) {
        result += JSON.stringify(parameters);
    }

    const handleClick = async () => {
        if (!ndefReader) {
            await navigator.clipboard.writeText(result);
            enqueueSnackbar('Copied to clipboard', {variant: 'success'});
            return;
        }

        const abortController = new AbortController();
        setNfcController(abortController);

        try {
            await ndefReader.write(result, {signal: abortController.signal});
            enqueueSnackbar('Written to NFC tag', {variant: 'success'});
        } catch (error) {
            if (error instanceof Error && error.name === 'AbortError') {
                return;
            }

            enqueueSnackbar('Failed to write to NFC tag', {variant: 'error'});
        } finally {
            setNfcController(null);
        }
    };

    return (
        <Card>
            <CardActionArea onClick={handleClick}>
                <CardHeader
                    title="Command String"
                    subheader={ndefReader ? 'Write to NFC tag' : 'Copy to clipboard'}
                />
                <CardContent sx={{fontFamily: 'monospace'}}>{result}</CardContent>
            </CardActionArea>

            <Dialog open={nfcController !== null} maxWidth="sm" fullWidth>
                <DialogTitle>Write NFC Tag</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Hold your device to the NFC tag you want to write to.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        nfcController?.abort();
                    }}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </Card>
    );
};

export default CommandDisplay;
