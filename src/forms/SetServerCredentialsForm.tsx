import {Stack, TextField} from '@mui/material';
import {useState} from 'react';
import CommandDisplay from '@/components/CommandDisplay';

type Props = {
    command : string;
};

const SetServerCredentialsForm = ({command} : Props) : JSX.Element => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Stack spacing={2}>
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

            <CommandDisplay command={command} parameters={[username, password]}/>
        </>
    );
};

export default SetServerCredentialsForm;
