import React from 'react'
import './detailsPage.scss'
import { connect } from 'react-redux'
import BackButton from './backButton/backButton'


const DetailsPage = (props) => {
    return (
        <div className='DetailPage'>
            <BackButton />
            <div>name</div>
            <div>Discription</div>
            <div>Color</div>
            <div>Weight</div>
            <div>Width</div>
            <div>Length</div>
            <div>Count</div>
            <div>Photo</div>
            <div>Height</div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        productData: state.newProduct.productsData.filter(item => item === ownProps.match.params.id)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);