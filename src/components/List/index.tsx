import { useState } from "react";
import { Item } from "..";
import { ICar } from "@/interfaces/car";

type ListProps = {
    data: ICar[];
    remove: (id: number | string) => void;
};

const List = ({ data, remove }: ListProps) => {

    return (
        <ul>
            {data?.map((car) => (
                <Item key={car.id} car={car} onClick={remove} />
            ))}
        </ul>
    );
};

export default List;
