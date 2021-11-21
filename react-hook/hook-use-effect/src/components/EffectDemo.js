import React, {useEffect, useState} from 'react';

export const EffectDemo = () => {
    //State
    const [fullName, setFullName] = useState({name: 'Khởi tạo', familyName: 'khởi tạo'});
    const [time, setTime] = useState(0);
    const [title,setTitle] = useState('Khởi tạo');

    

    
    useEffect(() => {

        
        const interval = setInterval(() => {
     
            setFullName({name:'Call lần',familyName: 'Call lần'});
            setTime((prev => prev + 1))
          }, 2000);
        
        console.log('useEffect has been called!');
       // setFullName({name:'chuyen',familyName: 'HCT'});
    },[]);


    const handleClick = () => {
        setFullName({name:'Sự kiện click',familyName: 'Sự kiện Click'});
      };

    return( 
        <div>
            {console.log("render")}
            <button className='startButton' onClick={handleClick}>
                cập nhật dữ liệu
            </button>
    
            
            <h1>Title: {title}</h1>
            <h3>Name: {fullName.name}</h3>
            <h3>Family Name: {fullName.familyName}</h3>
            <span>{time}</span>
        </div>
    );
};

export default EffectDemo