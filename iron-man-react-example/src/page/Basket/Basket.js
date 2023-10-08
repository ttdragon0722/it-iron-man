import "./Basket.css"
import Fruit from "./Fruit";
import { v4 } from "uuid";

const Basket = () => {
    return (
        <>
            <center>
                <h1>Viscose的水果籃</h1>
                <ul>
                    {
                        ["apple", "banana", "grapes","durian"].map((value) => {
                            return <Fruit key={v4()}  fruit_name={value}></Fruit>
                        })
                    }
                </ul>
            </center>
        </>
    )
}

export default Basket;