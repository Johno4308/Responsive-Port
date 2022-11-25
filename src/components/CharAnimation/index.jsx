import './index.scss'
  
//to animate letters      |  state   |  array  |  next letter index |
const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (    //map through array
        <span key={char + i} className={`${letterClass} _${i + idx}`}>  {/* assign unique idea per array element */}
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters