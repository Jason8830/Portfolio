import Wave from 'react-wavify';
import './Waves.css';
import sun from '../img/sun.png'
const Waves = () => (
  <div className="top">


<Wave id ="wave-1" fill="url(#gradient)">
  <defs>
    <linearGradient id="gradient" 
            options={{
              height: 100,
              amplitude: 20,
              speed: .8,
              points: 2
            }}
            gradientTransform="rotate(90)">
      <stop offset="10%"  stopColor="#3acbf7" />
      <stop offset="90%" stopColor="#000066" />
    </linearGradient>
  </defs>
</Wave>


<Wave id ="wave-2" fill="url(#gradient)">
  <defs>
    <linearGradient id="gradient" 
            options={{
              height: 200,
              amplitude: 100,
              speed: 2,
              points: 6
            }}
            gradientTransform="rotate(90)">
      <stop offset="10%"  stopColor="#3acbf7" />
      <stop offset="90%" stopColor="#000066" />
    </linearGradient>
  </defs>
</Wave>



<Wave id ="wave-3" fill="url(#gradient)">
  <defs>
    <linearGradient id="gradient" 
            options={{
              height: 100,
              amplitude: 100,
              speed: 1.5,
              points: 5
            }}
            gradientTransform="rotate(90)">
      <stop offset="10%"  stopColor="#3acbf7" />
      <stop offset="90%" stopColor="#000066" />
    </linearGradient>
  </defs>
</Wave>


<Wave id ="wave-4" fill="url(#gradient)">
  <defs>
    <linearGradient id="gradient" 
            options={{
              height: 80,
              amplitude: 300,
              speed: .2,
              points: 7
            }}
            gradientTransform="rotate(90)">
      <stop offset="10%"  stopColor="#3acbf7" />
      <stop offset="90%" stopColor="#000066" />
    </linearGradient>
  </defs>
</Wave>


<Wave id ="wave-5" fill="url(#gradient)">
  <defs>
    <linearGradient id="gradient" 
            options={{
              height: 80,
              amplitude: 300,
              speed: .2,
              points: 7
            }}
            gradientTransform="rotate(90)">
      <stop offset="10%"  stopColor="#3acbf7" />
      <stop offset="90%" stopColor="#000066" />
    </linearGradient>
  </defs>
</Wave>


<Wave id="bottom-wave" fill="url(#gradient)">

  <defs>
    <linearGradient id="gradient" 
            options={{
              height: 30,
              amplitude: 20,
              speed: 1,
              points: 5
            }}
            gradientTransform="rotate(90)">
      <stop offset="10%"  stopColor="#3acbf7" />
      <stop offset="90%" stopColor="#000066" />
    </linearGradient>
  </defs>
</Wave>


{/* <Wave id ="wave-4" fill="url(#gradient)">
  <defs>
    <linearGradient id="gradient" 
            options={{
              height: 30,
              amplitude: 10,
              speed: .8,
              points: 4
            }}
            gradientTransform="rotate(90)">
      <stop offset="10%"  stopColor="#3acbf7" />
      <stop offset="90%" stopColor="#000066" />
    </linearGradient>
  </defs>
</Wave>  */}




</div>

)

export default Waves;