import './App.css';
import React from 'react';

function App() {
  const gallery = [{ key: 1, heading: "HEADING 1", url: "https://images.pexels.com/photos/14679222/pexels-photo-14679222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }, { key: 1, heading: "HEADING 1", url: "https://images.pexels.com/photos/14679222/pexels-photo-14679222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }, { key: 1, heading: "HEADING 1", url: "https://images.pexels.com/photos/14679222/pexels-photo-14679222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }, { key: 1, heading: "HEADING 1", url: "https://images.pexels.com/photos/14679222/pexels-photo-14679222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }, { key: 1, heading: "HEADING 1", url: "https://images.pexels.com/photos/14679222/pexels-photo-14679222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }, { key: 1, heading: "HEADING 1", url: "https://images.pexels.com/photos/14679222/pexels-photo-14679222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }]
  const [value,setValue]=React.useState(1)
  const showDetail = (param) => {
    console.log(param,typeof param)
    switch (param) {
      case 1: return <div className='bg-gray-100 h-full rounded shadow-xl overflow-hidden'>
        <img src="https://images.pexels.com/photos/14679222/pexels-photo-14679222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="asdfa" />
        <p className='p-4'>Heading 12</p>
      </div>
      case 2: return <div className='bg-gray-100 h-full rounded shadow-xl overflow-hidden'>
        <img src="https://images.pexels.com/photos/14679222/pexels-photo-14679222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="asdfa" />
        <p className='p-4'>Heading 12</p>
      </div>
      case 3: return <div className='bg-gray-100 h-full rounded shadow-xl overflow-hidden'>
        <img src="https://images.pexels.com/photos/14679222/pexels-photo-14679222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="asdfa" />
        <p className='p-4'>Heading 12</p>
      </div>
      case 4: return <div className='bg-gray-100 h-full rounded shadow-xl overflow-hidden'>
        <img src="https://images.pexels.com/photos/14679222/pexels-photo-14679222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="asdfa" />
        <p className='p-4'>Heading 12</p>
      </div>
      case 5: return <div className='bg-gray-100 h-full rounded shadow-xl overflow-hidden'>
        <img src="https://images.pexels.com/photos/14679222/pexels-photo-14679222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="asdfa" />
        <p className='p-4'>Heading 134</p>
      </div>
      default: return <p>none</p>
    }
  }
  return (
    <div>
      <div className='h-2/3 relative bg-red-50'>
        <video
          className='w-full h-2/3'
          autoPlay
          mutedautoPlay
          loop
        // controls
        >
          <source src="https://nike-grind-static.s3-us-west-2.amazonaws.com/materials.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-white text-5xl font-bold text-center'>MAXIMIZE PERFORMANCE<br />MINIMIZE IMPACT</p>
      </div>
      <div className='my-16 text-center'>
        <p className='text-3xl capitalize font-semibold'>NIKE GRIND MATERIALS</p>
        <p className='text-xl w-2/3 mx-auto'> Great design starts with the fundamentals. High-performance Nike Grind materials provide a premium foundation to build upon.</p>
      </div>
      <div className='grid place-items-center my-16'>
        <div className='grid grid-cols-3 gap-8 w-2/3'>
          {gallery.map((item, idx) => {
            return <div key={idx}
              className='rounded overflow-hidden shadow-xl hover:scale-105 hover:ease-in'
            >
              <img src={item.url}
                // className='w-80'
                alt={item.heading}
              />
              <p className='p-4 font-semibold text-center'>{item.heading}</p>
            </div>
          })}
        </div>
      </div>
      <div className='my-16 text-center'>
        <p className='text-3xl capitalize font-semibold'>WHERE DOES NIKE GRIND COME FROM?</p>
        <p className='text-xl w-2/3 mx-auto'>Footwear</p>
      </div>
      <div className='grid place-items-center'>
        <div className='mb-16 w-2/3 grid grid-cols-2 bg-red-500 p-4'>
          <div className='relative'>
            <img
              alt="adfa"
              src="https://i.pinimg.com/736x/23/a6/21/23a62144d45b5fb01e203400b15bf4f8--exploded-view-science-fair.jpg" />
            <button onClick={() => setValue(1)} className='text-3xl absolute left-[30%] top-[20%] rounded-full bg-gray-200 w-10 h-10 grid place-items-center border border-red-500'><p>+</p></button>
            <button onClick={() => setValue(2)} className='text-3xl absolute left-2/4 top-[35%] rounded-full bg-gray-200 w-10 h-10 grid place-items-center border border-red-500'><p>+</p></button>
            <button onClick={() => setValue(3)} className='text-3xl absolute left-[43%] top-[47%] rounded-full bg-gray-200 w-10 h-10 grid place-items-center border border-red-500'><p>+</p></button>
            <button onClick={() => setValue(4)} className='text-3xl absolute top-[60%] left-[60%] rounded-full bg-gray-200 w-10 h-10 grid place-items-center border border-red-500'><p>+</p></button>
            <button onClick={() => setValue(5)} className='text-3xl absolute left-[40%] top-[62%] rounded-full bg-gray-200 w-10 h-10 grid place-items-center border border-red-500'><p>+</p></button>
          </div>
          <div>
            {showDetail(value)}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
