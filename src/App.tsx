
import "./App.css";
// import { ICar } from "./interfaces/car";
// import { Button, Item, List, Form } from "./components";
// import { useState } from "react";
// import Table from "./components/table";
// import ListProduct from "./components/productList/productList";
// import Counter from "./components/counter/couter";
import Count from "./redux/count"
import Product from "./redux/product";
function App() {
    // const item = [
    //     { id: 1, name: 'san pham a' },
    //     { id: 2, name: 'san pham b' },
    //     { id: 3, name: 'san pham c' },
    //     { id: 4, name: 'san pham d' },
    // ]
    // const carData = [
    //     { id: 1, name: "BMW", price: 100 },
    //     { id: 2, name: "Mercedes", price: 150 },
    //     { id: 3, name: "Audi", price: 200 },
    // ]
    // const collums = [
    //     { title: "Tên sản phẩm", dataIndex: "name", key: "name" }, // column
    //     { title: "price", dataIndex: "price", key: "price", render: ({ price }: any) => <span className="font-bold text-red-500">{price * 2}</span>, }, // column
    // ]
    // const [cars, setCars] = useState<ICar[]>(item);


    // const removeCar = (id: number | string) => {
    //     console.log(id);
    //     const dele = cars.filter(car => car.id !== id)
    //     setCars(dele);
    // };
    // const createItem = (car: ICar) => {
    //     console.log(car);
    //     setCars([...cars, car]);
    // }

    return (
        <>
            <div>

                {/* <Form onAdd={createItem} />
                <List data={cars} remove={removeCar} />
                <Table dataSource={carData} collums={collums} />
                <ListProduct />
                <br />
                <Counter /> */}
                <Count />
                <br />
                <Product />





            </div>
        </>
    );
}

export default App;
