import {Card, CardActionArea, CardContent, CardHeader} from '@mui/material';
import {useSnackbar} from 'notistack';

type Props = {
    command : string;
    parameters ?: unknown[];
};

const CommandDisplay = ({command, parameters} : Props) : JSX.Element => {
    const {enqueueSnackbar} = useSnackbar();

    let result = command;

    if (parameters) {
        result += JSON.stringify(parameters);
    }

    const handleClick = async () => {
        if (!('NDEFReader' in window)) {
            await navigator.clipboard.writeText(result);
            enqueueSnackbar('Copied to clipboard', {variant: 'success'});
            return;
        }

        const ndef = new NDEFReader();

        try {
            await ndef.write(result);
            enqueueSnackbar('Written to NFC tag', {variant: 'success'});
        } catch {
            enqueueSnackbar('Failed to write to NFC tag', {variant: 'error'});
        }
    };

    return (
        <Card>
            <CardActionArea onClick={handleClick}>
                <CardHeader title="Command String" subheader="Click to copy"/>
                <CardContent sx={{fontFamily: 'monospace'}}>{result}</CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CommandDisplay;
