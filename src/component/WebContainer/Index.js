import React from 'react'

const Index = (props) => {
  return (
       <section className={`col-12 float-start ${props._parentClass}`}>
          <div className="container">
            <div className="row">
             <div className='web-container'>
             {props.children}
             </div>
              </div>
          </div>
        </section>
  )
}

export default Index