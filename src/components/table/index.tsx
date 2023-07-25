import React from 'react'

type tableProps = {
    dataSource?: any,
    collums?: any,
    red?: string
}

const Table = ({ dataSource, collums }: tableProps) => {
    console.log(dataSource);
    const cols = collums.map((coll: any) => {
        return <td key={coll.key}>{coll.title}</td>
    })
    const data = dataSource?.map((item: any) => {
        const coll = collums?.map((colls: any) => {
            return <td key={colls.key}> {colls.render ? colls.render(item) : item[colls.dataIndex]}</td>
        })
        return <tr key={item.id}>{coll}</tr>
    })
    return (
        <div>
            <form>
                <thead><tr>{cols}</tr></thead>
                <tbody>{data}</tbody>
            </form>
        </div>
    )
}

export default Table