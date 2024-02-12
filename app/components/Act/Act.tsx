import {Divider, Table, TableColumnsType} from "antd";
import { Console } from "console";
import React, { Children } from "react";

interface Props{
    acts: ActDetails[];
}


const columns: TableColumnsType<ActDetails> = [
    {
        title: 'Номер СЭД',
        dataIndex: 'sedNum',
        key: 'sedNum'
    },
    {
        title: 'Дата СЭД',
        dataIndex: 'dateSed',
        key: 'dateSed'
    },
    {
        title: 'Исполнитель',
        dataIndex: 'contractorName',
        key: 'contractorName'
    },
    {
        title: 'Дата/время поулчения',
        dataIndex: 'dateTimeReceipt',
        key: 'dateTimeReceipt'
    },
    {
        title: 'Номер акта',
        dataIndex: 'numAct',
        key: 'numAct'
    },
    {
        title: 'Заказчик',
        dataIndex: 'customerName',
        key: 'customerName'
    },
    {
        title: 'Способ получения',
        dataIndex: 'methodObtainingName',
        key: 'methodObtainingName'
    },
    {
        title: 'Место отбора',
        dataIndex: 'placeCollect',
        key: 'placeCollect'
    },
    {
        title: 'Время отбора',
        dataIndex: 'dateTimeCollect',
        key: 'dateTimeCollect'
    },
    {
        title: 'Документы',
        dataIndex: 'docs',
        key: 'docs'
    },
    {
        title: 'Ссылка на СЭД',
        dataIndex: 'sedLink',
        key: 'sedLink',
        ellipsis: true,
        render: (text) => <a href={text}>{text}</a>,
    },
    {
        title: 'Примечание',
        dataIndex: 'comment',
        key: 'comment',
    },
    
]
  

// const rowSelection = {
//     onchange: (selectedRowKeys: React.Key[], selectedRows: ActDetails[]) => {
//         console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
//     },

//     getCheckboxProps: (record: ActDetails) => ({
//         name: record.numAct
//     }),
// };


export const Acts = ({acts}:Props) =>{
    console.log(acts);
    return (

        <div>
            <Divider />

            <Table
                // rowSelection={{
                //     type: 'radio',
                //  ...rowSelection,
                // }}
                bordered={true}
                columns={columns}
                dataSource={acts}
                
            />
        </div>
    );
}