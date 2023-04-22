import Navi from './Navi'
import CategoryList from './CategoryList'
import ProductList from './ProductList'
import { Container, Row, Col } from 'reactstrap'

function App() {
  // let titleProduct = "new product title";
  let productInfo = { title: "productlist", baskaBisey: "bisey" }
  // let titleCategory = "new product title";
  let categoryInfo = { title: "categorylist" }
  // let anotherd = "baska";

  return (
    <div className="App">
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList info={categoryInfo} />
          </Col>
          <Col xs="9">
            <ProductList info={productInfo} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
