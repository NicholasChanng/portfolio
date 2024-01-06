import './index.scss'

export default function Hamburger() {
  // const [open, setOpen] = useState(false)

  // let menuRef = useRef()

  // useEffect(() => {
  //   let handler = (e) => {
  //     if (!menuRef.current.contains(e.target)) {
  //       setOpen(false)
  //       console.log(menuRef.current)
  //     }
  //   }

  //   document.addEventListener('mousedown', handler)

  //   return () => {
  //     document.removeEventListener('mousedown', handler)
  //   }
  // })

  return (
    <div
      className="hamburger-container"
      // onClick={() => {
      //   setOpen(!open)
      // }}
    >
      <label className="hamburger-menu">
        <input type="checkbox" />
      </label>
      <aside className="links-container">
        <nav className="hamburger-links">
          <a href="#home">Home</a>

          <a href="#education">Education</a>

          <a href="#portfolio">Portfolio</a>

          <a href="#contact">Contact</a>
        </nav>
      </aside>
    </div>
  )
}
