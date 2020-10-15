import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <Container>
                {/* Row and Column give you access to bootstrap grid.
                    Here we are just trying to center the copyright
                */}
                <Row>
                    <Col className='text-center py-3'>
                        Copyright &copy; PaulDhillon
                    </Col>

                </Row>

            </Container>
        </footer>
    )
}

export default Footer