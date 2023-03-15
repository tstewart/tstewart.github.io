import { Carousel, Row, Col } from 'react-bootstrap'

function PortfolioContent(props) {
    const portfolio = props.portfolio;
    return (
        <>
            <h3>{portfolio.title}</h3>
            {portfolio.link != null ? (
            <h6><a href={portfolio.link}>(link)</a></h6>
            ) : (<></>)}
            <p className="portfolio-description">{portfolio.description}</p>
        </>
    );
}

function PortfolioImg(props) {
    const portfolio = props.portfolio;
    return (
        typeof portfolio.img === "string" ? (
            <img src={portfolio.img}  alt={"An image from " + portfolio.title} className="portfolio-img" />
        ) :
            (
                <Carousel>
                    {portfolio.img.map((portfolio_img, idx) => {
                        return (
                            <Carousel.Item key={portfolio.title+"-"+idx}>
                                <img src={portfolio_img} alt={"An image from " + portfolio.title} className="portfolio-img" />
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            )
    );
}

// alignment (left,right)
// title
// link
// description
// img
function PortfolioSection(props) {
    var ElemLeft = props.alignment === "right" ? PortfolioContent : PortfolioImg;
    const ElemRight = props.alignment === "right" ? PortfolioImg : PortfolioContent;
    const portfolio = props.portfolio;
    return (
        <Row className="portfolio-section">
            <Col>
                <ElemLeft portfolio={portfolio} />
            </Col>
            <Col>
                <ElemRight portfolio={portfolio} />
            </Col>
        </Row>
    );
}

export default PortfolioSection;
