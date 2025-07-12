import {
    AppBar,
    Button,
    Container,
    Divider,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    Toolbar,
    Typography,
} from "@mui/material";
import { type ReactNode, useState } from "react";
import CommandDialog from "@/components/CommandDialog.js";
import CommandDisplay from "@/components/CommandDisplay";
import InfoButton from "@/components/InfoButton";
import SetMaxVolumeForm from "@/forms/SetMaxVolumeForm";
import SetServerCredentialsForm from "@/forms/SetServerCredentialsForm";
import SetVolumeRangeForm from "@/forms/SetVolumeRangeForm.js";
import SetWifiCredentialsForm from "@/forms/SetWifiCredentialsForm";

type Command =
    | "set_wifi_credentials"
    | "set_server_credentials"
    | "set_max_volume"
    | "set_volume_range"
    | "add_config_tag"
    | "reset_config_tags"
    | "shut_down";

type DialogProps = {
    title: string;
    form: ReactNode | null;
};

const dialogProps: Record<Command, DialogProps> = {
    set_wifi_credentials: {
        title: "Set WiFi Credentials",
        form: <SetWifiCredentialsForm command="w" />,
    },
    set_server_credentials: {
        title: "Set Server Credentials",
        form: <SetServerCredentialsForm command="c" />,
    },
    set_max_volume: {
        title: "Set Max Volume",
        form: <SetMaxVolumeForm command="v" />,
    },
    set_volume_range: {
        title: "Set Volume Range",
        form: <SetVolumeRangeForm command="v" />,
    },
    add_config_tag: {
        title: "Add Config Tag",
        form: <CommandDisplay command="u" />,
    },
    reset_config_tags: {
        title: "Reset Config Tags",
        form: <CommandDisplay command="r" />,
    },
    shut_down: {
        title: "Shut Down",
        form: <CommandDisplay command="s" />,
    },
};

const App = (): ReactNode => {
    const [bloopBoxVersion, setBloopBoxVersion] = useState("5");
    const [command, setCommand] = useState<Command | null>(null);

    return (
        <>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                        Bloop Box Config
                    </Typography>
                    <InfoButton color="inherit" size="large" />
                </Toolbar>
            </AppBar>
            <Container component="main" sx={{ mt: 4, mb: 4 }}>
                <Stack spacing={2}>
                    <FormControl fullWidth>
                        <InputLabel>Bloop Box Version</InputLabel>
                        <Select
                            label="Bloop Box Version"
                            value={bloopBoxVersion}
                            onChange={(event) => {
                                setBloopBoxVersion(event.target.value);
                            }}
                        >
                            <MenuItem value="5">v5 or later</MenuItem>
                            <MenuItem value="2-4">v2 - v4</MenuItem>
                        </Select>
                    </FormControl>

                    <Divider />

                    <Button
                        variant="contained"
                        onClick={() => {
                            setCommand("set_wifi_credentials");
                        }}
                    >
                        Set WiFi Credentials
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => {
                            setCommand("set_server_credentials");
                        }}
                    >
                        Set Server Credentials
                    </Button>

                    {bloopBoxVersion === "2-4" ? (
                        <Button
                            variant="contained"
                            onClick={() => {
                                setCommand("set_max_volume");
                            }}
                        >
                            Set Max Volume
                        </Button>
                    ) : (
                        <Button
                            variant="contained"
                            onClick={() => {
                                setCommand("set_volume_range");
                            }}
                        >
                            Set Volume Range
                        </Button>
                    )}

                    <Button
                        variant="contained"
                        onClick={() => {
                            setCommand("add_config_tag");
                        }}
                    >
                        Add Config Tag
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => {
                            setCommand("reset_config_tags");
                        }}
                    >
                        Reset Config Tags
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => {
                            setCommand("shut_down");
                        }}
                    >
                        Shut Down
                    </Button>

                    {command !== null && (
                        <CommandDialog
                            {...dialogProps[command]}
                            onClose={() => {
                                setCommand(null);
                            }}
                        />
                    )}
                </Stack>
            </Container>
        </>
    );
};

export default App;
