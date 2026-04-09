import './Introduction.css'

function Introduction() {
  return (
    <div className="introduction">
      <h1 className="name">Justin Zhao</h1>
      <p className="bio">
        I am currently a Senior Software Engineer at{' '}
        <a href="https://eliseai.com/" target="_blank" rel="noopener noreferrer">
          EliseAI
        </a>
        , previously working in quant trading at Five Rings. I graduated from
        Johns Hopkins University in 2023 with a BS in Computer Science and a
        double major in Applied Mathematics and Statistics as well as MSE in
        Computer Science.
      </p>
    </div>
  )
}

export default Introduction
