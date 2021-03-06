import React, { useMemo } from 'react';
import { DataItem } from './model';
import { AxisOptions, Chart } from 'react-charts';

interface ChartData {
    label:string,
    rowData: DataItem[]
} 
type Series = {
    label: string,
    data: DataItem[]
}

function MyChart(props:ChartData){
    const data: Series[] = React.useMemo(
        () => [
        {
            label: props.label,
            data: props.rowData
        }
    ], [props.label, props.rowData]); //useMemo for performance
    
    //creating the chart
    const primaryAxis = useMemo( 
        (): AxisOptions<DataItem> => ({
            getValue: (datum: DataItem) => datum.netprofit
        }),[])
    const secondaryAxes = useMemo(
        (): AxisOptions<DataItem>[] => [
        {
            getValue: (datum: DataItem) => datum.netprofit,
            elementType: 'line',
        }],[])
    return (
        <Chart 
            options={{
                data,
                primaryAxis,
                secondaryAxes
            }}
        />
    );

}

export default MyChart;