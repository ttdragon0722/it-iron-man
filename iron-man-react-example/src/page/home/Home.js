import HelloWorld from "./components/HelloWorld";
import ScrollablePanel from "../../public/components/ScrollablePanel";

const HomePage = () => {

    let style = {
        "background": "black",
        "color": "white"
    }

    return (
        <>
            <h1 style={style} className="test">this is a HomePage</h1>
            <ScrollablePanel></ScrollablePanel>
            <HelloWorld name="rex">
                <div>i am a children in HelloWorld component</div>
            </HelloWorld>
            <HelloWorld name="lynn"></HelloWorld>
            <HelloWorld name="nach"></HelloWorld>
            <HelloWorld name="viscose"></HelloWorld>
        </>
    )
}

export default HomePage;