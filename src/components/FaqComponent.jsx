import React from 'react'
import { faq } from '../data'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import { data } from 'react-router'

const FaqComponent = () => {
  return (
    <div className='faq'>
      <Container>
        <Row>
          <Col>
            <h2 className='text-center fw-bold'>
              Pertanyaan yang sering ditanyakan
            </h2>
          </Col>
        </Row>
        <Row className='row-cols-lg-2 row-cols-1 g-4 pt-5'>
          {faq.map((data) => {
            return (
              <Col key={data.id}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>{data.title}</Accordion.Header>
                    <Accordion.Body>
                      {data.desc}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default FaqComponent