import Header from '../../ui-components/header'
import Slider from './slider'
import Footer from '../../ui-components/footer'
import AboutBrand from './aboutBrand'
import Products from './products'
import Gallery from './gallery'

const Home = () => {

    return (
        <>
            <Header/>
            <Slider/>
            <AboutBrand/>
            <Products/>
            <Gallery/>
            <Footer/>
        </>
    )
}

export default Home