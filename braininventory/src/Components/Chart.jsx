import React from 'react'
import { BarChart } from '@mui/x-charts'

export default function Chart() {
    return (
        <>
            <BarChart
                xAxis={[
                    {
                        scaleType: 'band',
                        data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
                        categoryGapRatio: 0.6,
                        barGapRatio: 0.7
                    }
                ]}
                series={[{ data: [4, 3, 5, 2, 4, 5, 2, 4, 6, 7] }, { data: [1, 6, 3, 4, 7, 3, 4, 5, 8, 3] }]}
                width={800}
                colors={['#e64236', '#8dc934']}
                height={300}
            />
        </>
    )
}
