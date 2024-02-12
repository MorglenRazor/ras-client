import { Table } from "antd";

interface Props{
    reagents: Reagent[];
}

// const columnsReagent: TableColumnsType<Reagent> =[
//     {
//         title: 'Номер документа',
//         dataIndex: 'numDoc',
//         key: 'numDoc'
//     },
//     {
//         title: 'Дата получения',
//         dataIndex: 'dateIssue',
//         key: 'dateIssue'
//     },
//     {
//         title: 'Номер скважины/пробы',
//         dataIndex: 'numWellOrBacth',
//         key: 'numWellOrBacth'
//     },
//     {
//         title: 'Кол-во реагента',
//         dataIndex: 'countReagent',
//         key: 'countReagent'
//     },
//     {
//         title: 'Номер пломбы',
//         dataIndex: 'numSealOnSample',
//         key: 'numSealOnSample'
//     },
//     {
//         title: 'Соответствие',
//         dataIndex: 'accordance',
//         key: 'accordance'
//     },
//     {
//         title: 'Производитель',
//         dataIndex: 'manufacturerReagent',
//         key: 'manufacturerReagent'
//     },
// ]


export const Reagents = ({reagents}:Props) =>{
    return(
        <div>
            <Table<Reagent> bordered={true} dataSource={reagents}>
            <Table.Column<Reagent> title="Номер документа" dataIndex="numDoc" key="numDoc"/>
                <Table.Column<Reagent> title="Место получения" dataIndex="dateIssue" key="dateIssue"/>
                <Table.Column<Reagent> title="Номер скважины/пробы" dataIndex="numWellOrBacth" key="numWellOrBacth" />
                <Table.Column<Reagent> title="Кол-во реагента"  dataIndex="countReagent" key="countReagent" />  
                <Table.Column<Reagent> title="Номер пломбы" dataIndex="numSealOnSample" key="numSealOnSample" />
                <Table.Column<Reagent> title="Соответствие"  dataIndex="accordance" key="accordance" />            
                <Table.Column<Reagent> title="Производитель" dataIndex="manufacturerReagent" key="manufacturerReagent" />
            </Table>
        </div>
    );
}