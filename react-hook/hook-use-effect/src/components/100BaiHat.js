import React, { useEffect, useState } from 'react';
import Start from './Reload';

export const Top100BaiHat = () => {



    //State
    const [topBaiHat, setTopBaiHat] = useState(null);





    useEffect(() => {


        const interval = setTimeout(() => {

            setTopBaiHat([
                {
                    "ten_ca_si": "Chi dan",
                    "bai_hat": "Tan vo",
                    "vi_tri": 1,
                },
                {
                    "ten_ca_si": "Khac Viet",
                    "bai_hat": "Anh khac hay em khac",
                    "vi_tri": 2,
                },
                {
                    "ten_ca_si": "Pham truong",
                    "bai_hat": "Trang giay trang",
                    "vi_tri": 3,
                },
            ]);

        }, 3000);

        console.log('useEffect has been called!');
    }, []);


    const handleClick = () => {
        setTopBaiHat([
            {
                "ten_ca_si": "Khac Viet",
                "bai_hat": "Anh khac hay em khac",
                "vi_tri": 1,
            },
            {
                "ten_ca_si": "Chi dan",
                "bai_hat": "Tan vo",
                "vi_tri": 2,
            },
        
            {
                "ten_ca_si": "Pham truong",
                "bai_hat": "Trang giay trang",
                "vi_tri": 3,
            },
        ]);
    };

    return (
        <div>
            {console.log("render")}
            <button className='startButton' onClick={handleClick}>
                cập nhật dữ liệu
            </button>
            <Start setTopBaiHat ={setTopBaiHat}/>

            <h1>Top 3 bài hat hot nhat</h1>
            {
                topBaiHat ? topBaiHat.map(function (baiHat, i) {

                    return <div key={i}>
                        <h1>Ca sĩ: {baiHat.ten_ca_si}</h1>
                        <h3>Bài Hát: {baiHat.bai_hat}</h3>
                        <h3>Bảng xếp hạng: {baiHat.vi_tri}</h3>
                    </div>
                }) : "loading"}

        </div>
    );
};

export default Top100BaiHat