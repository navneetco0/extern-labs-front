import './App.css'
import { useState } from 'react';

function App() {
  const [indexStatus, setIndexStatus] = useState(null);
  const [images, setImages] = useState([
    'https://media.istockphoto.com/photos/cat-and-a-dog-lie-together-on-the-bed-pets-sleeping-on-a-cozy-gray-picture-id1385113345?b=1&k=20&m=1385113345&s=170667a&w=0&h=SLfjE8gT59F3sBfy40RK6UwOS-2q452vc0OF2xZuUNg=',
    'https://media.istockphoto.com/photos/labradoodle-dog-ordering-online-by-internet-for-home-delivery-picture-id1365754761?b=1&k=20&m=1365754761&s=170667a&w=0&h=vxRSFZw_PdWezAYaFX8FBD58L5oNTp0tuCD-kRfGBnA=',
    'https://media.istockphoto.com/photos/staffordshire-bull-terrier-mixed-breed-dog-with-a-head-tilt-picture-id1319300527?b=1&k=20&m=1319300527&s=170667a&w=0&h=Si08LShhMHXJQzMEXHbivxaW_lkQPcKEXI7stkm7psY=',
    'https://media.istockphoto.com/photos/playful-happy-smiling-pet-dog-running-in-the-grass-picture-id1320018473?b=1&k=20&m=1320018473&s=170667a&w=0&h=Q-U9yI4JjCJYSAzXZwpnM4HuaXPzo4K-vBsgO7lanyo=',
    'https://media.istockphoto.com/photos/happy-dog-picture-id1328887289?b=1&k=20&m=1328887289&s=170667a&w=0&h=kimIEPd1p6SUF3kHfGI_LXRbjD9iuffmb7-zPVuT1JY=',
    'https://media.istockphoto.com/photos/full-length-shot-of-an-adorable-dog-lying-on-the-sofa-at-home-picture-id1349321709?b=1&k=20&m=1349321709&s=170667a&w=0&h=tZRvTKAhxn_yL-aVuh3RnOTjq00l7h_JcBO8gstp7rM=',
    'https://media.istockphoto.com/photos/happy-and-energetic-golden-retriever-playing-chase-with-owner-picture-id1341759749?b=1&k=20&m=1341759749&s=170667a&w=0&h=dxMqd_I9k3A7lrgESWzwlN4Cpfs8kFYxaksVmRmB2pQ=',
  ]);

  const allowDrop = (ev) => {
    ev.preventDefault()
  }
  function drag(ev, index) {
    setIndexStatus(index)
  }
  const drop = (ev, index) => {
    ev.preventDefault();
    let array = images;
    [array[index], array[indexStatus]] = [array[indexStatus], array[index]];
    setImages(array);
    setIndexStatus(null);
  }

  return (
    <div
      className="App"
      style={{
        width: '100%',
        height: '230px',
        display: 'flex',
        overflow: 'scroll',
        position: 'relative',
      }}
    >
      {images.map((Element, index) => (
        <div key={index}>
          <img
          onDragStart={(event)=>drag(event, index)}
            draggable="true"
            src={Element}
            style={{ height: '200px' }}
            alt=""
          />
        </div>
      ))}
      <div
        style={{
          display: 'flex',
          width: '100%',
          position: 'fixed',
          zIndex: '2',
          top: '200px',
          margin: 'auto',
        }}
      >
        {images.map((Element, index) => (
          <div key={index} onDragOver={(event)=>allowDrop(event)} onDrop={(event)=>drop(event, index)}>
            <img src={Element} style={{ height: '40px' }} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
