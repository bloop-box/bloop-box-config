import {Stack, TextField} from '@mui/material';
import {useState} from 'react';
import CommandDisplay from '@/components/CommandDisplay';

type Props = {
    command : string;
};

const SetServerCredentialsForm = ({command} : Props) : JSX.Element => {
    const [hostname, setHostname] = useState('');
    const [port, setPort] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Stack spacing={2}>
                <TextField
                    label="Hostname"
                    required
                    value={hostname}
                    onChange={event => {
                        setHostname(event.target.value);
                    }}
                    inputProps={{inputMode: 'url'}}
                />
                <TextField
                    label="Port"
                    required
                    value={port}
                    onChange={event => {
                        setPort(event.target.value);
                    }}
                    inputProps={{inputMode: 'numeric'}}
                />
                <TextField
                    label="Username"
                    required
                    value={username}
                    onChange={event => {
                        setUsername(event.target.value);
                    }}
                />
                <TextField
                    label="Password"
                    required
                    value={password}
                    onChange={event => {
                        setPassword(event.target.value);
                    }}
                />
            </Stack>

            <CommandDisplay command={command} parameters={[hostname, parseInt(port, 10), username, password]}/>
        </>
    );
};

export default SetServerCredentialsForm;
