import React from 'react'
import './detailsPage.scss'
import { connect } from 'react-redux'
import BackButton from './backButton/backButton'


const DetailsPage = (props) => {
    return (
        <div className='DetailPageWrapper'>
            <BackButton />
            <div className='name__DetailPageWrapper'>name</div>
            <div className='photo__DetailPageWrapper'>Photo</div>
            <div className='characteristics__DetailPageWrapper'>
                <div className='discription__DetailPageWrapper'> Discription</div>
                <div className='color__DetailPageWrapper'>Color</div>
                <div className='weight__DetailPageWrapper'>Weight</div>
                <div className='width__DetailPageWrapper'>Width</div>
                <div className='length__DetailPageWrapper'>Length</div>
                <div className='count__DetailPageWrapper'>Count</div>
                <div className='height__DetailPageWrapper'>Height</div>
            </div>
            <div className='comments__DetailPageWrapper'>comments</div>
            <div className='addComment__DetailPageWrapper'>add comment</div>
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