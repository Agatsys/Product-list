import { connect } from "react-redux";
import MainPage from "./mainPage";


let mapStateToProps = (state) => {
    return {
        productsData: state.productsData
    }
}

const mainPageContainer = connect(mapStateToProps)(MainPage);

export default mainPageContainer;