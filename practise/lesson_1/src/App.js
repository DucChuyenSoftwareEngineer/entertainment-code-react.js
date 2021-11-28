import React from 'react'
import { useState } from 'react';
import   CauThu  from './component/CauThu'
import { cauthu } from './fake/cauthu';



function App() {
  const [list, setList] = useState(cauthu)
  return (
    <>
      {
        list.map(function(quoc_gia,i){
            return <CauThu danh_sach={quoc_gia.danh_sach} quoc_gia={quoc_gia.quoc_gia}  key={i}/>
        })
      }

    </>

  )
}

export default App



