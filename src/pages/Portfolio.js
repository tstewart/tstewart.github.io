import { ContentPage as Page } from './Page'
import { GetPortfolio } from '../Data'
import PortfolioSection from '../components/PortfolioSection';

const portfolio = GetPortfolio();

function Portfolio() {
    var id = 0;
    return (
        <Page id="portfolio" title="Portfolio">
            {portfolio.map((portfolio_item, idx) => {
                id = id + 1;
                var alignment = id%2 ? "right" : "left";
                return (
                    <PortfolioSection key={"portfolio-"+idx} portfolio={portfolio_item} alignment={alignment} />
                );
            })}
        </Page>
    );
}

export default Portfolio;