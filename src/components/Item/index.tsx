import { ICar } from "@/interfaces/car";
import { GoTrash } from "react-icons/go";
import { Button } from "..";
type ItemProps = {
    car: ICar;
    onClick: (id: number | string) => void;
};

const Item = ({ car, onClick }: ItemProps) => {
    return (
        <li className="flex justify-between items-center p-2">
            {car.name}
            <Button type="danger" icon={<GoTrash />} onClick={() => onClick(car.id!)} />
        </li>
    );
};

export default Item;