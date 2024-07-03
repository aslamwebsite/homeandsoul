import React, { forwardRef } from 'react';

const Container = forwardRef((props, ref) => {
  return (
    <section ref={ref} className={`${props._parentClass}`}>
      <div className="container">
        <div className='row'>
          {props.children}
        </div>
      </div>
    </section>
  );
});

export default Container;
