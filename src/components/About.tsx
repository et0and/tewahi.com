import HomeHeader from './Header/HomeHeader';
import Footer from './Footer/Footer';
import BubbleLink from './Generics/BubbleLink';

export default function About() {
    return (
        <div className="layout-container">
            <HomeHeader />

            <section className="layout">
                <div className="measure-narrow hero-text">
                <p>Star Market is the easiest 
                    way to obtain a Star.
                </p>
                <p>
                Stars are gateways to building businesses, supernodes, and other provider services on 
                    the Urbit Network.
                </p>

                <p>
                    Urbit is a clean-slate OS and network.
                    Learn more about Urbit at <a href="urbit.org" target="_blank">Urbit.org</a>.
                </p>
            </div>
            </section>

            <section className="layout token-info">
                <table className="mb-4em">
                    <tbody>
                        <tr>
                            <td>Token Name</td>
                            <td>Wrapped Star</td>
                        </tr>
                        <tr>
                            <td>Token Symbol</td>
                            <td>WSTR</td>
                        </tr>
                        <tr>
                            <td>Token Icon</td>
                            <td><img style={{width:'96px', height: '96px'}}src="/assets/wstr-logo-192.png" /></td>
                        </tr>
                    </tbody>
                </table>

                <table className="mb-4em">
                    <tbody>
                        <tr>
                            <td>Token Description</td>
                            <td>WSTR is a token representing a 'wrapped urbit star', with 1 (fungible) WSTR representing one (nonfungible) star. $WSTR is intended to bring liquidity to the star asset class, which is a primary investment mechanism on the Urbit network.</td>
                        </tr>
                    </tbody>
                </table>

                <table>
                    <tbody>
                        <tr>
                            <td>Contract Address</td>
                            <td>
                                <a target="_blank" href="https://github.com/ransonhobbes/stardust">etherscan link to contract address goes here once launched</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Contract Source</td>
                            <td><a target="_blank" href="https://github.com/ransonhobbes/stardust">https://github.com/ransonhobbes/stardust</a></td>
                        </tr>
                        <tr>
                            <td>Token Website</td>
                            <td><a href="https://star.market">https://star.market</a></td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className="layout">
                <h3 className="gray-title">Audit References</h3>
                <ul>
                    <BubbleLink
                        href="https://18108973658826589741.googlegroups.com/attach/73008de92defe/Preliminary%20Stardust%20Audit%20Report%20v2.pdf?part=0.2&view=1&vt=ANaJVrFY0pvUAvtKp022657-C1GOkCllq0QoQqxiBniLR9IzFbGxSPXQS0qmlHHKUacRtjkabt27FDSbqdZzAI0FKoxxml3RUEQ_wnnRpzpU_rR1E3PicAQ"
                        title="Optilistic Audit"
                        caption="Security audit from Optilistic"
                    >
                    <img 
                        alt="lock icon"
                        className="bubble" src="assets/lock-bg.png" />
                    </BubbleLink>
                     <BubbleLink
                        href="https://18108973658826589741.googlegroups.com/attach/51257300be160/Sigma%20Prime%20-%20Urbit%20-%20Stardust%20Smart%20Contract%20Security%20Assessment%20v1.0.pdf?part=0.1&view=1&vt=ANaJVrE6sFqTUiND0NB1qOyFg7Xo_TuRX4QHnkoY1NOpv8FlP2QEz3gWynLm0MZo4ZsB3h2MQywvFCCv3-ossLb5j9Ytg9BraEiuR4jG6PMk2Ngp4H71g2E"
                        title="Sigma Prime Audit"
                        className="mt-2"
                        caption="Smart contract security review from Sigma Prime"
                    >
                        <img 
                            alt="lock icon"
                            className="bubble" src="assets/lock-bg.png" />
                    </BubbleLink>
                </ul>
            </section>
            <Footer />
            
        </div>
    )
}