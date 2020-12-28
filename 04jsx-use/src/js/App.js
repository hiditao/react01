import '../css/App.css';
import dog from "../img/dog.jpg";
import bg from "../img/bg.jpg";

function App() {
  let a = 10, b = 20;
  let mystyle = {
    color: "red",
    fontSize: 20
  };
  let arr = [
    <span>元素</span>,
    <a href="#">链接</a>,
    <input placeholder="请输入" />
  ];

  let isLogin = false;
  let flag = false;



  return (
    <div className="App">
      <h1>使用表达式</h1>
      <p> 1 + 1 = {1 + 1}</p>
      <p> {a} + {b} = {a + b} </p>
      <p> {a % 2 === 0 ? "偶数" : "奇数"} </p>

      <h1>使用样式</h1>
      <p style={mystyle}>测试样式</p>
      <p style={{ color: "blue", fontFamily: "楷体" }}>测试样式</p>


      <h1>使用图片: 在JSX中不能直接使用相对路径地址的图片</h1>
      <img src={dog}/>
      <img src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3351367313,2722709745&fm=26&gp=0.jpg"/>
      {/* <img src={require('../img/dog.jpg')}/> */}
      

      <h1>使用背景图片</h1>
      <div style={{height: 200,backgroundImage: `url(${bg})`}}></div>
      <div style={{height: 200,backgroundImage: "url(https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2987436096,405684408&fm=26&gp=0.jpg)"}}></div>
      {/* <div style={{height: 200,backgroundImage: `url(${require('../img/dog.jpg')})`}}></div> */}
    </div>
  );
}

export default App;
