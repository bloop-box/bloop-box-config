import { Slider, Stack } from "@mui/material";
import { type ReactNode, useState } from "react";
import CommandDisplay from "@/components/CommandDisplay";

type Props = {
    command: string;
};

const SetVolumeRangeForm = ({ command }: Props): ReactNode => {
    const [volume, setVolume] = useState([0, 100]);

    return (
        <Stack spacing={2}>
            <Slider
                value={volume}
                step={5}
                min={0}
                max={100}
                marks
                valueLabelDisplay="auto"
                onChange={(_event, value) => {
                    setVolume(value as [number, number]);
                }}
            />

            <CommandDisplay command={command} parameters={[volume[0] / 100, volume[1] / 100]} />
        </Stack>
    );
};

export default SetVolumeRangeForm;
