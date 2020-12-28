import dog from "../img/dog.jpg";

// 条件渲染
function MyApp() {
    let flag = false;

    let red = {
        color: "red"
    };
    let blue = {
        color: "blue"
    };

    let box;
    if(flag) {
        box = <a href="#">百度</a>;
    } else {
        box = <a href="#">谷歌</a>;
    }

    let myimg;
    if(flag) {
        myimg = <img src={dog}/>;
    }

    return(
        <div>
            {/* 根据条件渲染不同的组件 */}
            { flag ? <span>登录</span> : <span>注册</span>}

            {/* 根据条件使用不同的样式 */}
            <p style={ flag ? red : blue}>测试样式</p>

            {/* 看条件是否成立来决定是否渲染组件 */}
            {flag ? <img src={dog}/> : "" }
            
            {/* 去除三目运算符的冒号 */}
            {flag && <img src={dog}/>}

            {/* 在JSX外部先使用if语句判断，来决定使用哪一个组件 */}
            {box}
            
        </div>
    )
}
export default MyApp;