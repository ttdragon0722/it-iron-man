import "./ScrollablePanel.css";
import Panel from "./Panel"

import { v4 } from "uuid";

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
                    {
                        ["HAHA","IRONMAN","IT","REX","哈哈","西西","123"].map(item => {
                            return <Panel key={v4()} text={item}></Panel>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default ScrollablePanel;