import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Container } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'

export default function Navi({ isAuthenticated,handleSignOut,kullaniciAdi,setLevel,falseCount,trueCount,userPoints }) {


    
    return (
        <div>
            <Menu inverted color='violet' borderless> 

                <Container>
                    <Menu.Item as={Link} to='/'
                        className='fs-5 fw-bold fst-normal'
                        name='h4cktools'
                        position='left'
                    // active={activeItem === 'home'}
                    // onClick={this.handleItemClick}
                    />
                </Container>
                <Container>
                    <Menu.Menu position='right'>
                        {isAuthenticated ? <SignedIn userPoints={userPoints} falseCount={falseCount} trueCount={trueCount} setLevel={setLevel} handleSignOut={handleSignOut} kullaniciAdi={kullaniciAdi} /> : <SignedOut  />}

                        {/* <Menu.Item>
                                    <Button as={Link} to='/sign-up'  primary>Sign Up</Button>
                            </Menu.Item>
                            <Menu.Item>
                                <Button as={Link} to='/sign-in' grey>Sign In</Button>
                            </Menu.Item> */}
                    </Menu.Menu>
                    </Container>
            </Menu>

            <Menu inverted color='violet' vertical floated >

<Container>
    <Menu.Item as={Link} to='/'
        className='fs-7 fw-semibold fst-normal'
        name='Reconnaissance'
        position='left'
        
    // active={activeItem === 'home'}
    // onClick={this.handleItemClick}
    />
</Container>
<Container>
    <Menu.Item as={Link} to='/'
        className='fs-7 fw-semibold fst-normal'
        name='Resource Development'
        position='left'
    // active={activeItem === 'home'}
    // onClick={this.handleItemClick}
    />
</Container>
<Container>
    <Menu.Item as={Link} to='/'
        className='fs-7 fw-semibold fst-normal'
        name='Initial Access'
        position='left'
    // active={activeItem === 'home'}
    // onClick={this.handleItemClick}
    />
</Container>
<Container>
    <Menu.Item as={Link} to='/'
        className='fs-7 fw-semibold fst-normal'
        name='Execution'
        position='left'
    // active={activeItem === 'home'}
    // onClick={this.handleItemClick}
    />
</Container>
<Container>
    <Menu.Item as={Link} to='/'
        className='fs-7 fw-semibold fst-normal'
        name='Persistence'
        position='left'
    // active={activeItem === 'home'}
    // onClick={this.handleItemClick}
    />
</Container>
<Container>
    <Menu.Item as={Link} to='/'
        className='fs-7 fw-semibold fst-normal'
        name='Privilege Escalation'
        position='left'
    // active={activeItem === 'home'}
    // onClick={this.handleItemClick}
    />
</Container>
<Container>
    <Menu.Item as={Link} to='/'
        className='fs-7 fw-semibold fst-normal'
        name='Defense Evasion'
        position='left'
    // active={activeItem === 'home'}
    // onClick={this.handleItemClick}
    />
</Container>
<Container>
    <Menu.Item as={Link} to='/'
        className='fs-7 fw-semibold fst-normal'
        name='Credential Access'
        position='left'
    // active={activeItem === 'home'}
    // onClick={this.handleItemClick}
    />
</Container>
<Container>
    <Menu.Item as={Link} to='/'
        className='fs-7 fw-semibold fst-normal'
        name='Discovery'
        position='left'
    // active={activeItem === 'home'}
    // onClick={this.handleItemClick}
    />
</Container>
<Container>
    <Menu.Item as={Link} to='/'
        className='fs-7 fw-semibold fst-normal'
        name='Lateral Movement'
        position='left'
    // active={activeItem === 'home'}
    // onClick={this.handleItemClick}
    />
</Container>
<Container>
    <Menu.Item as={Link} to='/'
        className='fs-7 fw-semibold fst-normal'
        name='Collection'
        position='left'
    // active={activeItem === 'home'}
    // onClick={this.handleItemClick}
    />
</Container>
<Container>
    <Menu.Item as={Link} to='/'
        className='fs-7 fw-semibold fst-normal'
        name='Command and Control'
        position='left'
    // active={activeItem === 'home'}
    // onClick={this.handleItemClick}
    />
</Container>
<Container>
    <Menu.Item as={Link} to='/'
        className='fs-7 fw-semibold fst-normal'
        name='Exfiltration'
        position='left'
    // active={activeItem === 'home'}
    // onClick={this.handleItemClick}
    />
</Container>
<Container>
    <Menu.Item as={Link} to='/'
        className='fs-7 fw-semibold fst-normal'
        name='Impact'
        position='left'
    // active={activeItem === 'home'}
    // onClick={this.handleItemClick}
    />
</Container>
</Menu>

        </div>
    )
}
