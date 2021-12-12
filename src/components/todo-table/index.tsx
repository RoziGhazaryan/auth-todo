import { FC, useEffect, useState } from 'react';
import { Button, Pagination, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import './style.scss';

interface Todo {
   id: number;
   title: string,
   description: string;
   status: string,
}

interface TableProps {
   title: string,
   allData: Todo[],
   current: number,
   setCurrent: any,
   total: number,
   pageSize: any,
   onChangeStatus: any,
}

const TodoTable: FC<TableProps> = ({ title, allData, current, setCurrent, total, pageSize, onChangeStatus }) => {
   const columns: ColumnsType<Todo> = [
      {
         key: 'id',
         title: 'Title',
         dataIndex: 'title',
      },
      {
         key: 'id',
         title: 'Description',
         dataIndex: 'description',
      },
      {
         key: 'id',
         title: 'Status',
         render: ({ id, status }) => <Button onClick={() => onChangeStatus({ id, status })}>{status}</Button>,
      },
   ];

   const [data, setData] = useState<any>([]);

   function onChangePage(page: number) {
      setCurrent(page);
   }

   console.log(allData, data);

   useEffect(() => {
      const d = allData.slice((current - 1) * pageSize, current * pageSize);
      setData(d);
   }, [allData])

   return (
      <div className='todo-table'>
         <h2>{title}</h2>
         <div className='todo-table--inner'>
            <Table<Todo>
               columns={columns}
               dataSource={data}
               pagination={false}
            />
            <Pagination
               current={current}
               onChange={onChangePage}
               total={total}
               pageSize={pageSize}
            />
         </div>
      </div>
   )
};

export default TodoTable;