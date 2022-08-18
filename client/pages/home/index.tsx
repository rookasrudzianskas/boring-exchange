import Head from "next/head";
import Image from "next/image";

export default function Home() {
  // @ts-ignore
    return (
    <div className="flex h-screen bg-black">
      <Head>
        <title>Platforms on Vercel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <body>
        <div className="all">
            <div className="limiter">
                <header className="header">
                    <div className="header__logo-container">
                        <img src="img/logo.svg" alt="Via" className="header__logo"/>
                        <div className="header__logo-description">
                            <strong>Cross-chain</strong>
                            <div>liquidity aggregation protocol</div>
                        </div>
                    </div>

                    <ul className="header__socials">
                        <li>
                            <a className="header__social-link" href="https://twitter.com/via_protocol" target="_blank">
                                {/*<icon src="socials/twitter.svg" width="24" height="24"></icon>*/}
                                <span className="visually-hidden">Twitter</span>
                            </a>
                        </li>
                        <li>
                            <a className="header__social-link" href="https://discord.gg/viaexchange" target="_blank">
                                {/*<icon src="socials/discord.svg" width="24" height="24"></icon>*/}
                                <span className="visually-hidden">Discord</span>
                            </a>
                        </li>
                        <li>
                            <a className="header__social-link" href="https://medium.com/via-exchange" target="_blank">
                                {/*<icon src="socials/medium.svg" width="24" height="24"></icon>*/}
                                <span className="visually-hidden">Medium</span>
                            </a>
                        </li>
                        <li>
                            <a className="header__social-link" href="https://gitcoin.co/grants/4665/via-protocol"
                               target="_blank">
                                {/*<icon src="socials/gitcoin.svg" width="24" height="24"></icon>*/}
                                <span className="visually-hidden">Gitcoin</span>
                            </a>
                        </li>
                        <li>
                            <a className="header__social-link" href="https://github.com/viaprotocol" target="_blank">
                                {/*<icon src="socials/github.svg" width="24" height="24"></icon>*/}
                                <span className="visually-hidden">Github</span>
                            </a>
                        </li>
                    </ul>

                    <button type="button" className="header__burger-button">
                        <img src="./img/icons/menu-icon.svg" alt="Menu icon" width="24" height="24"/>
                    </button>

                    <nav className="header__actions">
                        <a href="https://docs.via.exchange/product-docs/" className="header__action-button"
                           target="_blank">
                            Docs
                        </a>
                        <button className="header__action-button header__products-button">
                            Products
                            {/*<icon className="header__products-icon" src="icons/close.svg" width="16" height="16"></icon>*/}
                        </button>
                        <div className="header__products">
                            <ul className="header__products-list">
                                <li className="header__product menu-product">
                                    <a href="https://router.via.exchange/" className="menu-product__wrapper"
                                       target="_blank" rel="noopener noreferrer">
                                        <div className="menu-product__image-wrapper">
                                            <img className="menu-product__image" width="24" height="24"
                                                 src="./img/icons/router.svg" alt="Cross-chain Aggregation Protocol"/>
                                        </div>
                                        <div className="menu-product__info">
                                            <h4 className="menu-product__title">Cross-chain Aggregation Protocol</h4>
                                            <p className="menu-product__description">The best router for any-to-any
                                                cross-chain swaps</p>
                                        </div>
                                    </a>
                                </li>
                                <li className="header__product menu-product menu-product--soon">
                                <a href="#" className="menu-product__wrapper">
                                    <div className="menu-product__image-wrapper">
                                        <img className="menu-product__image" width="24" height="24"
                                             src="./img/icons/lop.svg" alt="Limit Order Protocol"/>
                                    </div>
                                    <div className="menu-product__info">
                                        <h4 className="menu-product__title">Limit Order Protocol</h4>
                                        <p className="menu-product__description">First cross-chain limit order protocol
                                            for Private Market Makers</p>
                                    </div>
                                </a>
                            </li>
                                <li className="header__product menu-product">
                                    <a href="https://github.com/viaprotocol/via-sdk-js"
                                       className="menu-product__wrapper" target="_blank" rel="noopener noreferrer">
                                        <div className="menu-product__image-wrapper">
                                            <img className="menu-product__image" width="24" height="24"
                                                 src="./img/icons/api.svg" alt="API"/>
                                        </div>
                                        <div className="menu-product__info">
                                            <h4 className="menu-product__title">API</h4>
                                            <p className="menu-product__description">Access to multi-chain for wallets,
                                                games and marketplaces</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>

                <main>
                    <section className="first">
                        <div className="form-wrapper">
                            <a className="form-link" href="https://router.via.exchange" target="_blank">
                                <img src="img/backgrounds/bg-form.svg"/>
                            </a>
                        </div>
                        <h1>
                            Cross-chain<br/>
                            without limits
                        </h1>
                        <a data-button="large" href="https://router.via.exchange/" target="_blank">Launch dApp</a>

                        <div className="socials">
                            <a href="https://gitcoin.co/grants/4665/via-protocol" target="_blank">
                                {/*<icon src="socials/gitcoin.svg" width="24" height="24"></icon>*/}
                                <span className="visually-hidden">Gitcoin</span>
                            </a>
                            <a href="https://github.com/viaprotocol" target="_blank">
                                {/*<icon src="socials/github.svg" width="24" height="24"></icon>*/}
                                <span className="visually-hidden">Github</span>
                            </a>
                            <a href="https://discord.gg/viaexchange" target="_blank">
                                {/*<icon src="socials/discord.svg" width="24" height="24"></icon>*/}
                                <span className="visually-hidden">Discord</span>
                            </a>
                            <a href="https://twitter.com/via_protocol" target="_blank">
                                {/*<icon src="socials/twitter.svg" width="24" height="24"></icon>*/}
                                <span className="visually-hidden">Twitter</span>
                            </a>
                            <a href="https://medium.com/via-exchange" target="_blank">
                                {/*<icon src="socials/medium.svg" width="24" height="24"></icon>*/}
                                <span className="visually-hidden">Medium</span>
                            </a>
                        </div>
                    </section>

                    <div className="central-sections">
                        <section className="tools">
                            <h2>Bridges, DEXs, Aggregators<span className="dot">.</span></h2>
                            <p>We aggregate all cross-chain routers, which allows us to&nbsp;provide our users with
                                a&nbsp;vast selection of&nbsp;the&nbsp;most efficient routes for any&#8209;to&#8209;any
                                token exchanging.</p>
                            <div className="tools-switch">
                                <button className="active">All</button>
                                <button value="cross">Bridges <span className="number bridges-number">??</span></button>
                                <button value="swap">DEXs <span className="number dexs-number">??</span></button>
                            </div>
                            <div className="rows">
                                <div className="row-wrapper">
                                    <div className="row row-1">
                                        {/*<!-- items will be added using js -->*/}
                                    </div>
                                </div>
                                <div className="row-wrapper">
                                    <div className="row row-2">
                                        {/*<!-- items will be added using js -->*/}
                                    </div>
                                </div>
                                <div className="row-wrapper">
                                    <div className="row row-3">
                                        {/*<!-- items will be added using js -->*/}
                                    </div>
                                </div>
                                <div className="row-wrapper">
                                    <div className="row row-4">
                                        {/*<!-- items will be added using js -->*/}
                                    </div>
                                </div>
                                <div className="row-wrapper">
                                    <div className="row row-5">
                                        {/*// <!-- items will be added using js -->*/}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="features">
                            <a className="feature"
                               href="https://docs.via.exchange/product-docs/features/list-of-routes/filters"
                               target="_blank">
                                <div className="feature-top">
                                    {/*<icon src="features/feature-1.svg" width="40" height="34"></icon>*/}
                                    <h2>Smart filters and sorts</h2>
                                </div>
                                <p>
                                    Conduct a&nbsp;research about the&nbsp;bridge according the decentralization,
                                    the&nbsp;actuality of&nbsp;audits and&nbsp;existence of&nbsp;centralized relayers.
                                </p>
                            </a>
                            <a className="feature"
                               href="https://docs.via.exchange/product-docs/features/list-of-routes/security-score"
                               target="_blank">
                                <div className="feature-top">
                                    {/*<icon src="features/feature-2.svg" width="40" height="35"></icon>*/}
                                    <h2>Security score</h2>
                                </div>
                                <p>
                                    Eliminate the&nbsp;possibility of&nbsp;using a&nbsp;hacked or broken bridge
                                    by&nbsp;analyzing the&nbsp;success of&nbsp;10&nbsp;past transactions.
                                </p>
                            </a>
                            <a className="feature"
                               href="https://docs.via.exchange/product-docs/features/list-of-routes/success-rate"
                               target="_blank">
                                <div className="feature-top">
                                    {/*<icon src="features/feature-3.svg" width="40" height="40"></icon>*/}
                                    <h2>Success rate</h2>
                                </div>
                                <p>
                                    Set filters for&nbsp;bridges, DEXs, and slippage, then choose the&nbsp;best route
                                    considering all&nbsp;attributes.
                                </p>
                            </a>
                        </section>
                    </div>
                </main>

                <footer>
                    <img src="img/logo-footer.svg" alt="Via" width="74" height="16"/>
                    <div className="description-and-year">
                        <span className="description">Cross&#8209;chain aggregation protocol, 2022</span>
                    </div>
                    <a href="https://docs.via.exchange/product-docs/" className="docs-link" target="_blank">Docs</a>
                </footer>
            </div>
        </div>

        <section className="mobile-menu">
            <header className="mobile-menu__header">
                <button type="button" className="mobile-menu__close">
                    {/*<icon src="icons/close.svg" width="16" height="16"></icon>*/}
                </button>

                <a href="https://docs.via.exchange/product-docs/" className="mobile-menu__docs" target="_blank"
                   rel="noopener noreferrer">
                    <span>Via Docs</span>
                    <img src="./img/icons/external.svg" alt="External link" width="16" height="16"/>
                </a>
            </header>

            <h3 className="mobile-menu__title">Products</h3>

            <ul className="mobile-menu__products">
                <li className="mobile-menu__product menu-product">
                    <a href="https://router.via.exchange/" className="menu-product__wrapper" target="_blank"
                       rel="noopener noreferrer">
                        <div className="menu-product__image-wrapper">
                            <img className="menu-product__image" width="24" height="24" src="./img/icons/router.svg"
                                 alt="Cross-chain Aggregation Protocol"/>
                        </div>
                        <div className="menu-product__info">
                            <h4 className="menu-product__title">Cross-chain Aggregation Protocol</h4>
                            <p className="menu-product__description">The best router for any-to-any cross-chain
                                swaps</p>
                        </div>
                    </a>
                </li>
                <li className="mobile-menu__product menu-product menu-product--soon">
                <a href="#" className="menu-product__wrapper">
                    <div className="menu-product__image-wrapper">
                        <img className="menu-product__image" width="24" height="24" src="./img/icons/lop.svg"
                             alt="Limit Order Protocol"/>
                    </div>
                    <div className="menu-product__info">
                        <h4 className="menu-product__title">Limit Order Protocol</h4>
                        <p className="menu-product__description">First cross-chain limit order protocol for Private
                            Market Makers</p>
                    </div>
                </a>
            </li>
                <li className="mobile-menu__product menu-product">
                    <a href="https://github.com/viaprotocol/via-sdk-js" className="menu-product__wrapper"
                       target="_blank" rel="noopener noreferrer">
                        <div className="menu-product__image-wrapper">
                            <img className="menu-product__image" width="24" height="24" src="./img/icons/api.svg"
                                 alt="API"/>
                        </div>
                        <div className="menu-product__info">
                            <h4 className="menu-product__title">API</h4>
                            <p className="menu-product__description">Access to multi-chain for wallets, games and
                                marketplaces</p>
                        </div>
                    </a>
                </li>
            </ul>
            {/*<router className="mobile-menu__socials">*/}
                <li>
                    <a className="mobile-menu__social-link" href="https://gitcoin.co/grants/4665/via-protocol"
                       target="_blank">
                        {/*<icon src="socials/gitcoin.svg" width="24" height="24"></icon>*/}
                        <span className="visually-hidden">Gitcoin</span>
                    </a>
                </li>
                <li>
                    <a className="mobile-menu__social-link" href="https://github.com/viaprotocol" target="_blank">
                        {/*<icon src="socials/github.svg" width="24" height="24"></icon>*/}
                        <span className="visually-hidden">Github</span>
                    </a>
                </li>
                <li>
                    <a className="mobile-menu__social-link" href="https://discord.gg/viaexchange" target="_blank">
                        {/*<icon src="socials/discord.svg" width="24" height="24"></icon>*/}
                        <span className="visually-hidden">Discord</span>
                    </a>
                </li>
                <li>
                    <a className="mobile-menu__social-link" href="https://twitter.com/via_protocol" target="_blank">
                        {/*<icon src="socials/twitter.svg" width="24" height="24"></icon>*/}
                        <span className="visually-hidden">Twitter</span>
                    </a>
                </li>
                <li>
                    <a className="mobile-menu__social-link" href="https://medium.com/via-exchange" target="_blank">
                        {/*<icon src="socials/medium.svg" width="24" height="24"></icon>*/}
                        <span className="visually-hidden">Medium</span>
                    </a>
                </li>
            {/*</router>*/}
        </section>
        {/*<script src="./js/index.js" type="module"></script>*/}
        {/*<script src="./js/tools.js"></script>*/}
        {/*<script src="./js/features.js"></script>*/}

        </body>
    </div>
  );
}
