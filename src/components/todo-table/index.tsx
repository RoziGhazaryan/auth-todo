import { FC, useEffect, useState } from 'react';
import { Button, Pagination, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import './style.scss';
import moment from 'moment';
interface Todo {
   id: number;
   name: string,
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
   deleteTodo: any,
}

const TodoTable: FC<TableProps> = (
   {
      title,
      allData,
      current,
      setCurrent,
      total,
      pageSize,
      onChangeStatus,
      deleteTodo,
   }) => {

   const columns: ColumnsType<Todo> = [
      {
         key: 'id',
         title: 'Name',
         dataIndex: 'name',
         sorter: {
            compare: (a: any, b: any) => a.name.localeCompare(b.name),
         },
      },
      {
         key: 'id',
         title: 'Description',
         dataIndex: 'description',
      },
      {
         key: 'id',
         title: 'Status',
         render: ({ id, status }) => (
            <Button onClick={() => onChangeStatus({ id, status })}>{status}</Button>
         )
      },
      {
         key: 'id',
         title: 'Created at',
         dataIndex: 'creationDate',
         render: (creationDate) => <h4>{moment(creationDate).fromNow()}</h4>,
         sorter: (a: any, b: any) => moment(a.creationDate).unix() - moment(b.creationDate).unix(),
      },
      {
         key: 'id',
         title: 'Delete',
         render: ({ id }) => <Button onClick={() => deleteTodo({ id })}>DELETE</Button>,
      },
   ];

   const [data, setData] = useState<any>([]);

   function onChangePage(page: number) {
      setCurrent(page);
   }

   useEffect(() => {
      const pageData = allData.slice((current - 1) * pageSize, current * pageSize);
      setData(pageData);
   }, [allData, current, pageSize])

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