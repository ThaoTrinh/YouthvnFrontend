import React from "react";
import matchSorter from 'match-sorter'
 
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
 
export default class DataTable extends React.Component {
    render() {
        const { data, columns } = this.props;
        return (
            <div>
                <ReactTable
                    data={data}
                    filterable
                    defaultFilterMethod={(filter, row) =>
                        String(row[filter.id]) === filter.value}
                    columns={columns}
                    defaultPageSize={10}
                    className="-striped -highlight -responsive"
                />
            </div>
        );
    }
}