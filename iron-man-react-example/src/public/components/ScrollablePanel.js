import "./ScrollablePanel.css";
import Panel from "./Panel"

const ScrollablePanel = () => {
    return (
        <section className="scrollable-panel">
            <div className="scrollable-panel-title">
                <h1>最新消息</h1>
                <h1>
                    NEWS
                </h1>
            </div>
            <div className="scrollable-panel-content">
                <div className="panel-list">
                {[
                    {
                        text:"haha",
                        price:"87",
                        tag:"haha"
                    },
                    {
                        text:"title",
                        price:"187",
                        tag:"haha"
                    },
                    {
                        text:"iron man",
                        price:"987",
                        tag:"haha"
                    },
                    {
                        text:"hello world",
                        price:"123456",
                        tag:"haha"
                    }
                ].map((item) => (
                    <Panel 
                        text={item["text"]} 
                        price={item["price"]} 
                        tag={item["tag"]}></Panel>
                ))}

                </div>
            </div>
        </section>
    )
}

export default ScrollablePanel;