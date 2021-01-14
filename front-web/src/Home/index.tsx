import './styles.css';
import { ReactComponent as MainImage } from './main.svg';

function Home() {
    return (
        <div className="home-container">
            <div className="home-content">
                <div className="home-actions">
                    <h1 className="home-tittle"> 
                        Faça seu pedido <br /> que entregamos <br /> pra voce!!!!
                    </h1>
                    <h3 className="home-subtittle">
                        Escolha seu pedido e em poucos minutos <br /> levaremos na sua porta
                    </h3>
                    <a href="orders" className="homr-btn-order">
                        FAZER PEDIDO
                    </a>
                </div>
                <div className="home-image">
                    <MainImage />
                </div>
            </div>
        </div>
    )

}

export default Home;