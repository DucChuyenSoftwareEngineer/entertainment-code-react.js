import { useRef } from 'react';

export default function Start({ setTopBaiHat }) {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.value && setTopBaiHat([
        {
            "ten_ca_si": "Lý Hải",
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
    <div className='Start'>
      <input
        type='text'
        className='startInput'
        placeholder='Enter your name'
        ref={inputRef}
      />
      <button className='startButton' onClick={handleClick}>
        Start
      </button>
    </div>
  );
}
