import React from 'react'
import { useSearchParams } from 'react-router-dom'

const ProductPage = () => {
  let [query, setQuery] = useSearchParams()
  console.log("dddd", query.get('q')) // dddd pants 출력
  // hompage.js에서 navigate('/products?q=pants')를 이렇게 설정해줘서 그럼
  //즉 useSearchParams()를 이용해서 query의 값을 가져올 수 있다.
  return (
    <div>
      <h1>Show All Products!!!</h1>
    </div>
  )
}

export default ProductPage
