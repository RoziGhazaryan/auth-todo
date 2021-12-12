import { FC, useEffect, useState } from 'react';
import { Pagination, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';
import './style.scss';
import './responsive.scss';
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
         render: (descr) => <div className='description'>{descr}</div>
      },
      {
         key: 'id',
         title: 'Status',
         render: ({ id, status }) => (
            <button
               className={`status-btn ${status === 'completed' ? 'completed' : 'active'}`}
               onClick={() => onChangeStatus({ id, status })}
            >
               {status}
               <span className='tooltip-text'>
                  click to set {status === 'active' ? 'completed' : 'active'}
               </span>
            </button>
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
         render: ({ id }) => (
            <DeleteOutlined className='delete-icon' onClick={() => deleteTodo({ id })} />
         )
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
         <h2 className='todo-type'>{title}</h2>
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