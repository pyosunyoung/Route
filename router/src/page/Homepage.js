import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Homepage = () => {
  const navigate = useNavigate();
  const goProductPage = () => {
    navigate('/products?q=pants')
  }
// ? 뒤에 있는 값은 커리값인데 url 경로에 영향을 미치지 않는다
// ?뒤에 쿼리는 products페이지에 해당 쿼리에 맞는 페이지를 보여주는 느낌임
// 본격적 쿼리값 가져오기 productPage ㄱㄱ
  return (
    <div>
      <h1>Homepage</h1>
      <Link to="/about">Go to about page</Link>
      <button onClick={goProductPage}>go to product page</button>
    </div>
  )
}

export default Homepage
