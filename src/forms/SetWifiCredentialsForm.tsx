import { Stack, TextField } from "@mui/material";
import { type ReactNode, useState } from "react";
import CommandDisplay from "@/components/CommandDisplay";

type Props = {
    command: string;
};

const SetWifiCredentialsForm = ({ command }: Props): ReactNode => {
    const [ssid, setSsid] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Stack spacing={2}>
            <TextField
                label="SSID"
                required
                value={ssid}
                onChange={(event) => {
                    setSsid(event.target.value);
                }}
            />
            <TextField
                label="Password"
                required
                value={password}
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
            />
            <CommandDisplay command={command} parameters={[ssid, password]} />
        </Stack>
    );
};

export default SetWifiCredentialsForm;
