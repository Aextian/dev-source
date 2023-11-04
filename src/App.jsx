import { useState } from 'react'
import figma from './assets/images/figma.png'
import material from './assets/images/material_icon.png'
// import figma from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <header className='header'>

        <div className="logo">Logo</div>

      </header>

      <div className="banner"></div>

      <aside>
        <ul>
          <li><a href="">All</a></li>
          <li><a href="">Documentations</a></li>
          <li><a href="">Design Tools</a></li>
          <li><a href="">Frontend Tools</a></li>
          <li><a href="">Javascript Libraries</a></li>
          <li><a href="">Typography</a></li>
          <li><a href="">Color</a></li>
          <li><a href="">Icons</a></li>
          <li><a href="">HTML Templates</a></li>
          <li><a href="">Code Snippets</a></li>
        </ul>
      </aside>

      <div className="main-container">
        <div className="card-container">

          <div className="card">
            <div className="card-content">
              <div className="logo">
                <img src={figma} alt="" />
              </div>
              <div className='description'>
                <h1>Figma</h1>
                <p>Design And Collaborate All in The Browser</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <div className="logo">
                <img src={material} alt="" />
              </div>
              <div className='description'>
                <h1>Figma</h1>
                <p>Design And Collaborate All in The Browser</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <div className="logo">
                <img src={material} alt="" />
              </div>
              <div className='description'>
                <h1>Figma</h1>
                <p>Design And Collaborate All in The Browser</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <div className="logo">
                <img src={material} alt="" />
              </div>
              <div className='description'>
                <h1>Figma</h1>
                <p>Design And Collaborate All in The Browser</p>
              </div>
            </div>
          </div>


          <div className="card">
            <div className="card-content">
              <div className="logo">
                <img src={material} alt="" />
              </div>
              <div className='description'>
                <h1>Figma</h1>
                <p>Design And Collaborate All in The Browser</p>
              </div>
            </div>
          </div>


          <div className="card">
            <div className="card-content">
              <div className="logo">
                <img src={material} alt="" />
              </div>
              <div className='description'>
                <h1>Figma</h1>
                <p>Design And Collaborate All in The Browser</p>
              </div>
            </div>
          </div>


          <div className="card">
            <div className="card-content">
              <div className="logo">
                <img src={material} alt="" />
              </div>
              <div className='description'>
                <h1>Figma</h1>
                <p>Design And Collaborate All in The Browser</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <div className="logo">
                <img src={material} alt="" />
              </div>
              <div className='description'>
                <h1>Figma</h1>
                <p>Design And Collaborate All in The Browser</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <div className="logo">
                <img src={material} alt="" />
              </div>
              <div className='description'>
                <h1>Figma</h1>
                <p>Design And Collaborate All in The Browser</p>
              </div>
            </div>
          </div>


          <div className="card">
            <div className="card-content">
              <div className="logo">
                <img src={material} alt="" />
              </div>
              <div className='description'>
                <h1>Figma</h1>
                <p>Design And Collaborate All in The Browser</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </>
  )
}

export default App
