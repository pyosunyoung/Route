import React from 'react'
import { useNavigate } from 'react-router-dom'

const Aboutpage = () => {
  const navigate = useNavigate() // navigate는 함수를 리턴함
  const goToHomepage = () => {
    navigate('/')
  }
  return (
    <div>
      <h1>Aboutpage</h1>
      <button onClick={goToHomepage}>Go to Homepage</button>
    </div>
  )
}

export default Aboutpage
/// 홈페이지 이동하는 방식은 두개 1. link, 2. navigate 
//그래서 상황에 맞게 두개를 사용하면 됨
// 내가 어떤 함수안에서 사용해야 한다면 useNavigate
// 내가 그냥 바로 버튼 누르면 바로 홈페이지 이동 필요하다 그럴 떈 link 사용