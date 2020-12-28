import "../css/List.css";

// 列表渲染
function List() {
    let arr = [
        <a href="#">百度</a>,
        <a href="#">新浪</a>,
        <a href="#">腾讯</a>,
        <a href="#">凤凰</a>
    ]

    let str = ["百度", "新浪", "腾讯", "凤凰"];


    return (
        <div>
            <header>
                {/* 列表渲染时每个元素必须提供key属性 */}
                {str.map((item, index) => {
                    return <a key={index} href="#">{item}</a>
                })}
            </header>
        </div>
    );
}

export default List;