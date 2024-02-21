import React from 'react'
import "./Home.css"

const Home = () => {
  const user = {
    imageUrl: 'https://img.freepik.com/premium-photo/robot-character_861875-11346.jpg'

  }
  return (
    <>
      <div id="header">
        <div className="container">
          <div className="row">
            <div className="right-column">
              <img src={user.imageUrl} alt="imageforUser" />
            </div>
            <div className="left-column">
              <h1>Hello</h1>
              <h2>Unleash the power of your mind at BrainSHarpen! Engage in captivating animations, interactive quizzes, and exciting learning adventures for a brain-boosting experience!</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row-1">
            <h1 className='heading'>Change the Way <br />Things are Going</h1>
            <p>Ever feel like your brain is on slow mode? Ready to turbocharge your problem-solving skills and boost your speed in building awesome things? Dive into BrainBoost – where we make learning lightning-fast and super fun! Unleash your full potential and join the adventure of accelerated brainpower!</p>
          </div>
        </div>
      </div>

      <main>
        <div id="main">
          <div className="cointainer">
            <div className="heading"><h1>Courses</h1></div>
            <div className="cards">
              <div class="card-1">
                <p>A glass-like card to demonstrate the <strong>Glassmorphism UI design</strong> trend.</p>
                <p class="card-footer">Created by Rahul C.</p>
              </div>
              <div class="card-1">
                <p>A glass-like card to demonstrate the <strong>Glassmorphism UI design</strong> trend.</p>
                <p class="card-footer">Created by Rahul C.</p>
              </div>
              <div class="card-1">
                <p>A glass-like card to demonstrate the <strong>Glassmorphism UI design</strong> trend.</p>
                <p class="card-footer">Created by Rahul C.</p>
              </div>
            </div>
            <div className="explorebtn">
                <a href="#">Explore Courses</a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home