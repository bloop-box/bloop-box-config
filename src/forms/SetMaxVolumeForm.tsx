import {Slider, Stack} from '@mui/material';
import {useState} from 'react';
import CommandDisplay from '@/components/CommandDisplay';

type Props = {
    command : string;
};

const SetMaxVolumeForm = ({command} : Props) : JSX.Element => {
    const [volume, setVolume] = useState(100);

    return (
        <>
            <Stack spacing={2}>
                <Slider
                    value={volume}
                    step={5}
                    min={0}
                    max={100}
                    marks
                    valueLabelDisplay="auto"
                    onChange={(event, value) => {
                        setVolume(value as number);
                    }}
                />
            </Stack>

            <CommandDisplay command={command} parameters={[volume / 100]}/>
        </>
    );
};

export default SetMaxVolumeForm;
