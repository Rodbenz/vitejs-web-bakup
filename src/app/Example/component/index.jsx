import React from 'react'
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import FullWidthTextField from '../../../components/MUI/FullWidthTextField';
import DataTable from '../../../components/MUI/DataTables';

export default function ComponenExample() {
    const headCells = [
        {
            id: 'name',
            numeric: 'center',
            disablePadding: true,
            label: 'Dessert (100g serving)',
        },
        {
            id: 'calories',
            numeric: 'center',
            disablePadding: false,
            label: 'Calories',
        },
        {
            id: 'fat',
            numeric: 'center',
            disablePadding: false,
            label: 'Fat (g)',
        },
        {
            id: 'carbs',
            numeric: 'center',
            disablePadding: false,
            label: 'Carbs (g)',
        },
        {
            id: 'protein',
            numeric: 'center',
            disablePadding: false,
            label: 'Protein (g)',
        },
    ];

    function createData(id, name, calories, fat, carbs, protein) {
        return {
            id,
            name,
            calories,
            fat,
            carbs,
            protein,
        };
    }

    const rows = [
        createData(1, 'Cupcake', 305, 3.7, 67, 4.3),
        createData(2, 'Donut', 452, 25.0, 51, 4.9),
        createData(3, 'Eclair', 262, 16.0, 24, 6.0),
        createData(4, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData(5, 'Gingerbread', 356, 16.0, 49, 3.9),
        createData(6, 'Honeycomb', 408, 3.2, 87, 6.5),
        createData(7, 'Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData(8, 'Jelly Bean', 375, 0.0, 94, 0.0),
        createData(9, 'KitKat', 518, 26.0, 65, 7.0),
        createData(10, 'Lollipop', 392, 0.2, 98, 0.0),
        createData(11, 'Marshmallow', 318, 0, 81, 2.0),
        createData(12, 'Nougat', 360, 19.0, 9, 37.0),
        createData(13, 'Oreo', 437, 18.0, 63, 4.0),
    ];
    return (
        <div>
            <Paper className={'mb-8'}>
                <label htmlFor="" className='text-2xl font-bold py-1 px-5'>Example Component</label>
               <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-4'>
                        <FullWidthTextField labelName={'TextField'} required={'required'} />
                    </div>
                    <div className='col-md-4'>
                        <FullWidthTextField labelName={'TextField'} required={'required'}/>
                    </div>
                    <div className='col-md-4'>
                        <FullWidthTextField labelName={'TextField'} required={'required'}/>
                    </div>
                    <div className='col-md-12'>

                    </div>
                    <div className='col-md-12 py-9'>
                        <DataTable tableName="TEST TABLE" headCells={headCells} rows={rows}/>
                    </div>
                </div>
               </div>
            </Paper>
        </div>
    )
}
