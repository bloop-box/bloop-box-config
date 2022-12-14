import {
    AppBar,
    Container,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Stack,
    Toolbar,
    Typography,
} from '@mui/material';
import {useState} from 'react';
import CommandDisplay from '@/components/CommandDisplay';
import InfoButton from '@/components/InfoButton';
import SetMaxVolumeForm from '@/forms/SetMaxVolumeForm';
import SetServerCredentialsForm from '@/forms/SetServerCredentialsForm';
import SetWifiCredentialsForm from '@/forms/SetWifiCredentialsForm';

const App = () : JSX.Element => {
    const [command, setCommand] = useState('w');

    const forms = {
        'w': <SetWifiCredentialsForm command="w"/>,
        'c': <SetServerCredentialsForm command="c"/>,
        'v': <SetMaxVolumeForm command="v"/>,
        'u': <CommandDisplay command="u"/>,
        'r': <CommandDisplay command="r"/>,
        's': <CommandDisplay command="s"/>,
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" noWrap component="div" sx={{flexGrow: 1}}>
                        Bloop Box Config
                    </Typography>
                    <InfoButton color="inherit" size="large"/>
                </Toolbar>
            </AppBar>
            <Container component="main" sx={{mt: 4, mb: 4}}>
                <Stack spacing={2}>
                    <FormControl>
                        <FormLabel>Command</FormLabel>
                        <RadioGroup value={command} onChange={(event, value) => {
                            setCommand(value);
                        }}>
                            <FormControlLabel control={<Radio/>} value="w" label="Set WiFi Credentials"/>
                            <FormControlLabel control={<Radio/>} value="c" label="Set Server Credentials"/>
                            <FormControlLabel control={<Radio/>} value="v" label="Set Max Volume"/>
                            <FormControlLabel control={<Radio/>} value="u" label="Add Config Tag"/>
                            <FormControlLabel control={<Radio/>} value="r" label="Reset Config Tags"/>
                            <FormControlLabel control={<Radio/>} value="s" label="Shut Down"/>
                        </RadioGroup>
                    </FormControl>

                    {forms[command as keyof typeof forms]}
                </Stack>
            </Container>
        </>
    );
};

export default App;
