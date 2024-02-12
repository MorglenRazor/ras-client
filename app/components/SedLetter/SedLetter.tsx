import { Divider, Table, TableColumnsType } from "antd";

interface Props{
    letters: SedLetter[];
}

const columns: TableColumnsType<SedLetter> = [
    {
        title: 'Номер СЭД',
        dataIndex: 'numSed',
        key: 'numSed'
    },
    {
        title: 'Дата СЭД',
        dataIndex: 'dateToSED',
        key: 'dateToSED'
    },
    {
        title: 'Ссылка на СЭД',
        dataIndex: 'linkToSED',
        key: 'linkToSED',
        ellipsis: true,
        render: (text) => <a href={text}>{text}</a>,
    }
];

const rowSelection = {
    onchange: (selectedRowKeys: React.Key[], selectedRows: SedLetter[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },

    getCheckboxProps: (record: SedLetter) => ({
        name: record.numSed
    }),
};

export const SedLetters = ({letters}: Props) =>{
    return(
        <div>
            <Divider/>
            <Table
            rowSelection={{
                type: 'radio',
             ...rowSelection,
            }}
            bordered={true}
            columns={columns}
            dataSource={letters}/>
        </div>
    );
}