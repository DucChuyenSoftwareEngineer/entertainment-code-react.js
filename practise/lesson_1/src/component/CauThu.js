import React from 'react'

function CauThu(props) {
    return (
        <div>
            <h1> Quốc Gia {props.quoc_gia} </h1>
            
            {
                props.danh_sach ? props.danh_sach.filter(item => item.Tuoi >= 30).map(function (item, i) {
                    return (
                        <div key={i}>
                            <h2>{item.Ten}</h2>
                            <h2>{item.Tuoi}</h2>
                            <h2>{item.cau_lac_bo}</h2>
                        </div>
                    )
                }) : (
                    <div>
                        loading
                    </div>
                )
            }
        </div>
    )
}

export default CauThu;