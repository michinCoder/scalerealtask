import React from 'react'
// import { Row, Col, Card, Container, Button} from 'react-bootstrap'

import NavigationBar from './HomePage/NavigationBar' 
import ProductContainer from './HomePage/ProductContainer'


function HomePage() {

  return (
      <>
          <NavigationBar/>
          <ProductContainer/>
      </>
  )
}

export default HomePage