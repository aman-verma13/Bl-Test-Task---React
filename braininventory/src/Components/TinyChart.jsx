import * as React from 'react';
import { ChartContainer } from '@mui/x-charts';
import { LinePlot } from '@mui/x-charts';
import { MarkPlot } from '@mui/x-charts';

const pData = [2400, 1398, 2800, 2508, 4500, 3800, 4300];
const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
];

export default function TinyChart(props) {
    return (
        <>
            <ChartContainer
                width={750}
                height={300}
                series={[{ type: 'line', data: pData }]}
                xAxis={[{ scaleType: 'point', data: xLabels }]}
                sx={{
                    '.MuiLineElement-root': {
                        stroke: props.color,
                        strokeWidth: 5,
                    },
                    '.MuiMarkElement-root': {
                        stroke: 'black',
                        scale: '0.6',
                        fill: '#fff',
                        strokeWidth: 5,
                    },
                }}
                disableAxisListener
            >
                <LinePlot />
                <MarkPlot />
            </ChartContainer>
        </>
    );
}