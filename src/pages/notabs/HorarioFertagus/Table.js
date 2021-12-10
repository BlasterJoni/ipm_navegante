
import DataTable from 'react-data-table-component';

const columns = (list) => list.map((value, index) => {
    return { name: value, selector: row => row[value] }
})

const customStyles = {
    table: {
		style: {
            height:null,
            width:null,
		},
	},
	tableWrapper: {
		style: {
			display: 'table',
		},
	},
    headCells: {
		style: {
            width: '120px',
            alignItems: 'center',
			justifyContent: 'center',
		},
	},
    cells: {
		style: {
            alignItems: 'center',
			justifyContent: 'center',
            '&:not(:last-of-type)': {
				borderRightStyle: 'solid',
				borderRightWidth: '1px',
				borderRightColor: getComputedStyle(document.documentElement).getPropertyValue('--ion-color-medium'),
			},
		},
	},
};

const Table = (props) => {

    return (
        <DataTable
            columns={columns(props.cols)}
            data={props.data}
            striped
            responsive
            dense
            fixedHeader
            customStyles={customStyles}
        />
    );
};

export default Table;
