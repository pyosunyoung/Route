import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {
  // const ppp = useParams()
  const {id} = useParams() // 이렇게 하면 id의 키값을 바로 들고 올 수 있다.주소 id가 aaaa라면 aaaa를 들고오겠지?
// console.log("ppp", params); // {id: '1'} 이렇게 id값 객체를 가져올 수 있다
// <Route path='/products/:id/:num' element={<ProductDetailPage/>}/>  app.js에서
// 이렇게 지정해줬기 떄문에 id가 자동으로 키값으로 들어가고 객체안 1은 url주소 값이다 즉 id의 파라미터값
// 그래서 만약 주소값이 http://localhost:3000/products/aaaa/34 라면 => {id: 'aaaa', num: '34'} 이렇게 출력됨
return (
    <div>
      <h1>Show ProductDetailPage{id}</h1> 
    </div>
  )
}
// Show ProductDetailPageaaaa
export default ProductDetailPage
