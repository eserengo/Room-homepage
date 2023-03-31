const Head = ({children}) => {
  const [theme, setTheme] = React.useState('one');

  const prevSlider = () => {
    theme === 'one' ? setTheme('three') : theme === 'three' ? setTheme('two') : setTheme('one');
  }

  const nextSlider = () => {
    theme === 'one' ? setTheme('two') : theme === 'two' ? setTheme('three') : setTheme('one');
  }

  return (
    <header className='row head position-relative top-0 start-0'>
      <section id={theme} className='slider col-12 col-sm-7'>
        {children}
        <ReactBootstrap.Image className='angle left position-absolute' alt='angle left icon' src='./src/images/icon-angle-left.svg' onClick={prevSlider} />
        <ReactBootstrap.Image className='angle right position-absolute' alt='angle right icon' src='./src/images/icon-angle-right.svg' onClick={nextSlider} />
      </section>
      <section className='description col-12 col-sm-5'>
        {theme === 'one' &&
          <>
            <h1 className='primary title mb-3'>Discover innovative ways to decorate</h1>
            <p className='para mb-3'>We provide unmatched quality, comfort, and style for property owners across the country.
              Our experts combine form and function in bringing your vision to life. Create a room in your
              own style with our collection and make your property a reflection of you and what you love.</p>
          </>
        }
        {theme === 'two' &&
          <>
            <h1 className='primary title mb-3'>We are available all across the globe</h1>
            <p className='para mb-3'>With stores all over the world, it's easy for you to find furniture for your home or place of business.
              Locally, we’re in most major cities throughout the country. Find the branch nearest you using our
              store locator. Any questions? Don't hesitate to contact us today.</p>
          </>
        }
        {theme === 'three' &&
          <>
            <h1 className='primary title mb-2'>Manufactured with the best materials</h1>
            <p className='para mb-2'>Our modern furniture store provide a high level of quality. Our company has invested in advanced technology
              to ensure that every product is made as perfect and as consistent as possible. With three decades of
              experience in this industry, we understand what customers want for their home and office.</p>
          </>
        }
        <ReactBootstrap.Stack direction='horizontal' gap={3} className='shop-wrapper'>
          <p className='shop text-uppercase m-0 me-3'>shop now</p>
          <ReactBootstrap.Image className='arrow' alt='arrow icon' src='./src/images/icon-arrow.svg' />
        </ReactBootstrap.Stack>
      </section>
    </header>
  );
}

export default Head;