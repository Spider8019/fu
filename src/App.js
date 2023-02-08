import './App.css';
import React from 'react';
import video from "./bg.mp4"
import logo from "./logo.png"

function App() {
  const gallery = [{
    key: 1, heading: "Carpet padding and underlayment  ",
    url: "https://www.flooringamerica.com/root/clientImages/MF7979web/empty-big-255.jpg"
  },
  { key: 1, heading: "Upholstery and cushion filling", url: "https://cdn.shopify.com/s/files/1/0312/6149/1336/files/Down_Pillow_Filling_1024x1024.jpg?v=1601464446" },
  { key: 1, heading: "Yoga blocks, balance aids, and exercise equipment  ", url: "https://thumbs.dreamstime.com/z/sport-equipment-skipping-rope-sports-shoes-water-bottle-smart-watch-sport-equipment-skipping-rope-sports-shoes-water-bottle-smart-174225576.jpg" },
  { key: 1, heading: "Soundproofing and insulation materials  ", url: "https://soundproofliving.com/wp-content/uploads/2019/02/sound-absorbing-materials.jpg" },
  { key: 1, heading: "Art supplies such as crafting foam and stencils  ", url: "https://images-cdn.ubuy.co.in/6361b5690969fc50066395ba-20-pack-craft-foam-sheets-thin-foam.jpg" },
  { key: 1, heading: "Packaging materials for protection during shipping.", url: "https://www.practicalecommerce.com/wp-content/uploads/images/0004/4028/IMG_20120208_170854_lightbox.jpg" }]
  const [value, setValue] = React.useState(1)
  const showDetail = (param) => {
    // console.log(param, typeof param)
    switch (param) {
      case 1: return <div className='bg-gray-100 h-full rounded shadow-xl overflow-hidden grid place-items-center'>
        <div>
          <p className='p-4 text-2xl font-semibold'>Leather</p>
          <p className='p-4'>Bonded leather is made by shredding leather scraps and leather fiber, then mixing it with bonding materials. The mixture is next extruded onto a cloth or paper backing, and the surface is usually embossed with a leather-like texture or grain. Bonded leather can be found in furniture, bookbinding, and various fashion accessories.
          </p>
        </div>
      </div >
      case 2: return <div className='bg-gray-100 h-full rounded shadow-xl overflow-hidden grid place-items-center'>
        <div>
          <p className='p-4 text-2xl font-semibold'>Textile</p>
          <p className='p-4'>The recycled textiles can also be used in creating new footwear, for insulation material in building construction or as cushioning in furniture, helping to reduce waste in these industries. In some cases, recycled textiles from shoes can even be utilized in car manufacturing, for example as part of the car's interior or for soundproofing.
          </p>
        </div>
      </div>
      case 3: return <div className='bg-gray-100 h-full rounded shadow-xl overflow-hidden grid place-items-center'>
        <div>
          <p className='p-4 text-2xl font-semibold'>Plastic</p>
          <p className='p-4'>Recycled plastic from shoes can be used to make several different products, including: Floor tiles, Decking and outdoor furniture, Playground equipment, Speed bumps, Traffic cones, Mats and runners, Waste bins and containers.
          </p>
        </div>
      </div>
      case 4: return <div className='bg-gray-100 h-full rounded shadow-xl overflow-hidden grid place-items-center'>
        <div>
          <p className='p-4 text-2xl font-semibold'>Rubber</p>
          <p className='p-4'>Heading 12Recycled rubber from shoes can be used for several purposes, including:
            Playground and athletic surfaces
          </p>
        </div>
      </div>
      case 5: return <div className='bg-gray-100 h-full rounded shadow-xl overflow-hidden grid place-items-center'>
        <div>
          <p className='p-4 text-2xl font-semibold'>Rubber</p>
          <p className='p-4'>Heading 12Recycled rubber from shoes can be used for several purposes, including:
            Playground and athletic surfaces
          </p>
        </div>
      </div>
      default: return <p>none</p>
    }
  }
  return (
    <div>
      <div className='h-2/3 relative bg-red-50'>
        <div className='h-2.3'>
          <video
            className='w-full h-2/3 object-cover'
            autoPlay
            mutedautoPlay
            muted
            loop
            // controls
            style={{ height: "50vh" }}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-white text-7xl font-bold text-center uppercase'>Reclaim the<br /> change.</p>
      </div>
      <div className='my-16 text-center w-2/3 mx-auto'>
        <img
        className='mx-auto'
          width="200"
          height="200"
          src={logo} alt='Company logo' />
        <p className='text-3xl capitalize font-semibold'>Welcome to EcoSoul, the leading shoe recycling company in India committed to reducing waste and promoting sustainability.</p>
        <p className='text-xl mx-auto'>Through our innovative process, we aim to collect discarded footwear and turn them into high-quality materials for new products. Inspired by the success of the Nike Grind program,  we are today able to divert millions of shoes from landfills every year and reduce our carbon footprint.  We're not only creating a more sustainable future but also promoting a circular economy.
          At EcoSoul, we believe that small steps can make a big impact. That's why we've made it our mission to make shoe recycling accessible and easy for everyone. Whether you're a business looking to reduce your carbon footprint or an individual looking to do your part, we're here to help. Join us on our mission to create a greener world, one shoe at a time !!</p>
      </div>
      <div className='grid place-items-center my-16'>
        <div className='grid grid-cols-3 gap-8 w-2/3'>
          {gallery.map((item, idx) => {
            return <div key={idx}
              className='rounded overflow-hidden shadow-xl hover:scale-105 hover:ease-in'
            >
              <img src={item.url}
                // className='w-80'
                className='h-60 object-cover'
                alt={item.heading}
              />
              <p className='p-4 font-semibold text-center'>{item.heading}</p>
            </div>
          })}
        </div>
      </div>
      <div className='my-16 text-center'>
        <p className='text-3xl capitalize font-semibold'>WHERE DOES ECOSOUL GRIND COME FROM?</p>
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
