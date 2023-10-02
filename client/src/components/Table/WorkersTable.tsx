import React from 'react'
import { useTable } from 'react-table'

interface TableProps {
    data: any[];
    columns: any[];
  }

const WorkersTable: React.FC<TableProps> = ({ data, columns }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({
        columns,
        data,
      });
    
      return (
        <table
        {...getTableProps()}
        className=" w-full table-auto "
      >
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  className=" p-2"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="hover:bg-gray-100 ">
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="text-sm p-2"
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      
      );
    
};

export default WorkersTable
