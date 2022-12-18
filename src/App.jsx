import Tilt from 'react-parallax-tilt'
import CatFace from './cat.jpg'
export default function App() {

  const style = {
    body:'flex justify-center items-center w-screen h-screen bg-gradient-to-t from-sky-300 to-sky-200 font-sans',
    tilt:'flex-col flex w-1/3 h-3/5 bg-cyan-100 p-10 rounded-xl shadow-2xl',
    board:'w-max shadow-2xl bg-cyan-400 p-6 bg-opacity-50 rounded-lg relative right-20 bottom-16 items-center',
    photo:'w-48 h-48 absolute -left-16 top-16 object-cover ring-4 rounded-full',
    contact:'relative -top-28 -right-60 p-4 bg-cyan-200 bg-opacity-70 w-max rounded',
    text:'text-lg py-3 relative bottom-28 left-16 w-3/4 text-right font-serif'
  }

  return ( 
    <div className={style.body}>
      <Tilt 
      glareEnable={true} 
      glareColor='#7dd3fc' 
      scale={1.1} 
      perspective={2000}
      className={style.tilt}
      style={{
        transformStyle:'preserve-3d'
        }}>
        <div 
        className={style.board}
        style={{
          transform:'translateZ(6em)',
          transformStyle:'preserve-3d'
        }}>
          <img 
          src={CatFace} 
          alt="cat face" 
          className={style.photo}
          style={{
            borderRadius:'50%',
            transform:'translateZ(-1em)',
          }}/>
          <div 
          className='text-4xl text-white font-bold'>
            Hello. It's Me.
          </div>
        </div>
        <div 
        className={style.contact}
        style={{
          transform:'translateZ(3em)',
          textShadow:'5px 5px 10px #7dd3fc'
          }}>
          <div>
            <i class="fa-solid fa-phone"></i> +1 234 567 890
          </div>
          <div>
            <i class="fa-regular fa-envelope"></i> 3ddesigner@mymail.com
          </div>
        </div>
        <div 
        style={{transform:'translateZ(5em)'}}
        className={style.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit similique vel doloremque molestias, totam officiis nesciunt ullam provident sit, voluptas odit id quidem est quam suscipit enim exercitationem quisquam beatae.
        </div>
        <div 
        className='absolute bottom-8 flex flex-col' 
        style={{transform:'translateZ(6em)'}}>
          <div></div>
          <i className="w-max py-1 text-3xl text-slate-800 hover:text-cyan-500 transition fa-brands fa-facebook"></i>
          <i className="w-max py-1 text-3xl text-slate-800 hover:text-cyan-500 transition fa-brands fa-youtube"></i>
          <i className="w-max py-1 text-3xl text-slate-800 hover:text-cyan-500 transition fa-brands fa-instagram"></i>
          <i className="w-max py-1 text-3xl text-slate-800 hover:text-cyan-500 transition fa-brands fa-twitter"></i>
        </div>
      </Tilt>
    </div>
  )
}

