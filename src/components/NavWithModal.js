const NavWithModal = () => {
  const [modal, setModal] = React.useState (false);
  const tags = ['home', 'shop' ,'about', 'contact']; 
  
  const List = ({ props }) => {
    return props.map((item, index) => <li key={index} className='list-group-item'>{item}</li>)
  };

  return (
    <>
      <ReactBootstrap.Nav className='d-block d-sm-none'>
        {!modal &&
          <ReactBootstrap.Stack direction='horizontal' className='mob-abs position-absolute'>
            <ReactBootstrap.Image className='menu icon' alt='menu icon' src='./src/images/icon-hamburger.svg' onClick={() => setModal((prevState) => !prevState)} />
            <ReactBootstrap.Navbar.Brand ><ReactBootstrap.Image className='logo' alt='logo' src='./src/images/logo.svg' /></ReactBootstrap.Navbar.Brand>
          </ReactBootstrap.Stack>
        }
        {modal && 
          <div className='mod-wrapper position-fixed top-0 start-0'>
            <ReactBootstrap.Stack direction='horizontal' gap={5} className='mod p-4'>
              <ReactBootstrap.Image className='close icon' alt='close icon' src='./src/images/icon-close.svg' onClick={() => setModal((prevState) => !prevState)} />
              <ul className='list-group list-group-horizontal'>
                <List props={tags} />
              </ul>
            </ReactBootstrap.Stack>
          </div>
        }
      </ReactBootstrap.Nav>
      <ReactBootstrap.Nav className='desk-abs d-none d-sm-flex position-absolute'>
        <ReactBootstrap.Navbar.Brand ><ReactBootstrap.Image className='logo' alt='logo' src='./src/images/logo.svg' /></ReactBootstrap.Navbar.Brand>
        <ul className='list-group list-group-horizontal'>
          <List props={tags} />
        </ul>
      </ReactBootstrap.Nav>
    </>
  )
}

export default NavWithModal;