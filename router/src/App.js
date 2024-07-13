import './App.css';
import Aboutpage from './page/Aboutpage';
import Homepage from './page/Homepage';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';
import LoginPage from './page/LoginPage';
import { useState } from 'react';
import UserPage from './page/UserPage';
// rediect  : 어떤 페이지에 들어가려했지만 로그인이 안되어서 로그인 페이지로 화면전환 바뀌는
function App() {
  const [authenticate, setAuthenticate] = useState(false);
  // authenticate = false면 로그인 x 로그인 필요 , true면 로그인 한것
  const PrivateRoute = () => { // 이거 컴포넌트임, 유저가 로그인 했으면 유저페이지를 보여주고 로그인 안했다면 로그인 페이지를 보여줘보자
    return authenticate == true ? <UserPage/> : <Navigate to="/login"/>
  } // 이렇게 하면 user페이지로 들어가도 login페이지로 바뀜 왜냐 authenticate가 현재 false이기 때문
  // true면 그 반대임
// Navigate라는 컴포넌트는 리다이랙트 하게 도와주는 컴포넌트이다 useNavigate랑은 다른것
  return (
    <div >
      <Routes>
        <Route path='/' element={<Homepage/>}/> 
        <Route path='/about' element={<Aboutpage/>}/> 
        <Route path='/products' element={<ProductPage/>}/> 
        <Route path='/products/:id/:num' element={<ProductDetailPage/>}/> 
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/user' element={<PrivateRoute/>}/> 
      </Routes>
    </div> // 
  );
} 

export default App;
// Routes : 상황에 맞게 컴포넌트를 switch해주는 역할 routes태그 안에 해당 페이지를 
// 정의해주면 됨 정의할 때 쓰는 태그가 Route이다.
//페이지의 주소는 각각 다르다. 그래서 path는 각 페이지의 주소
//element는 그 주소일 때 보여주고 싶은 페이지(예: homepage.js 주소로 이동)
/// 홈페이지 이동하는 방식은 두개 1. link, 2. navigate 
//그래서 상황에 맞게 두개를 사용하면 됨
// 내가 어떤 함수안에서 사용해야 한다면 useNavigate
// 내가 그냥 바로 버튼 누르면 바로 홈페이지 이동 필요하다 그럴 떈 link 사용

// 쇼핑몰 페이지를 예를 들어서 어떤 상품을 클릭했을 때 디테일 페이지로 넘어가게
// 설정하고 싶을 때 그리고 선택한 상품에 따라 페이지가 다 달라지기 때문에 이럴때는
//url 디자인이 중요하다. restful routes = 요즘 사용하는 url 디자인 패턴

//http 명령어
// get : fetch해서 데이터를 가져올 떄 쓰임
// post : 새로운 데이터를 만들어낼 때 사용
// put : 기존 데이터를 수정할 때 사용
// delete : 삭제 명령어

//전체 데이터를 보여주고 싶다 /subjects
// 하나의 아이템만 보여주고 싶다 /subject/:id
// :는 파라미터라는 뜻 => 매개변수
// 즉 :id는 변하는 값이다. 변하는 id값을 보여주는 것 :id는 하위페이지 느낌이다.

//http://localhost:3000/products/1
//http://localhost:3000/products/2
//http://localhost:3000/products/3 즉 이렇게 3페이지 모두 같은 <ProductDetailPage/>
// 페이지를 가리킨다.

// 그렇다면 /subject/:id이 아이디값을 가져와서 해당 아이템을 보여줘야하는데
// 이 id값(파라미터)을 어떻게 가져올까? => productDetailPage로 이동 useParmas 사용함

// 이제 주소 ? 뒤에 값을 읽어내는 즉 쿼리를 읽어내는 것도 해보자 => hompage.js ㄱㄱ

// 이제 가면 안되는 페이지 설정해보자 예로 로그인 한 유저만 보일 수 있는 페이지
// 경로를 상황에 맞춰서 보여주게 설정해보자
// rediect 어떤 페이지에 들어가려했지만 로그인이 안되어서 로그인 페이지로 화면전환 바뀌는
