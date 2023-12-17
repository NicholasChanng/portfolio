import './index.scss'
import html from '../../../assets/images/logo1.png'
import css from '../../../assets/images/logo2.png'
import javascript from '../../../assets/images/logo3.png'
import react from '../../../assets/images/logo192.png'
import java from '../../../assets/images/java.png'
import python from '../../../assets/images/python.png'
import sass from '../../../assets/images/sass.png'

const Skills = () => {
  // const scrollers = document.querySelectorAll('.scroller')
  // addAnimation()

  // function addAnimation() {
  //   scrollers.forEach((scroller) => {
  //     scroller.setAttribute('data-animated', true)

  //     const scrollerInner = scroller.querySelector('.scroller-inner')
  //     const scrollerContent = Array.from(scrollerInner.children)

  //     scrollerContent.forEach((item) => {
  //       const duplicatedItem = item.cloneNode(true)
  //       duplicatedItem.setAttribute('aria-hidden', true)
  //       scrollerInner.appendChild(duplicatedItem)
  //     })
  //   })
  // }

  return (
    <div className="scroller">
      <ul className="skills-list scroller-inner">
        <li>
          <img src={react} alt="react" />
        </li>
        <li>
          <img src={javascript} alt="javascript" />
        </li>
        <li>
          <img src={html} alt="html" />
        </li>
        <li>
          <img src={css} alt="css" />
        </li>
        <li>
          <img src={sass} alt="sass" />
        </li>
        <li>
          <img src={python} alt="python" />
        </li>
        <li>
          <img src={java} alt="java" />
        </li>
        <li>
          <img src={react} alt="react" />
        </li>
        <li>
          <img src={javascript} alt="javascript" />
        </li>
        <li>
          <img src={html} alt="html" />
        </li>
        <li>
          <img src={css} alt="css" />
        </li>
        <li>
          <img src={sass} alt="sass" />
        </li>
        <li>
          <img src={python} alt="python" />
        </li>
        <li>
          <img src={java} alt="java" />
        </li>
      </ul>
    </div>
  )
}

export default Skills
