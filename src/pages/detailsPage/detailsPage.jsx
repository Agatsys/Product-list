import React from 'react'
import './detailsPage.scss'
import { connect } from 'react-redux'
import BackButton from './backButton/backButton'
import Width from './width/width'
import Weight from './weight/weight'
import Photo from './photo/photo'
import Color from './color/color'
import Name from './name/name'
import Discription from './discription/discription'
import Length from './length/length'
import Count from './count/count'
import Height from './height/height'


const DetailsPage = (props) => {

    //console.log('!!!!!!!!!!!!!!!!!!!!')
    //console.log(props)

    return (
        <>
            
            <div className='DetailPageWrapper'>

                <BackButton />
                <Name name={props.productData.name}/>
                <Photo photo={props.productData.photo}/>
                <div className='characteristics__DetailPageWrapper'>
                    <Discription discription={props.productData.discription}/>
                    <Weight weight={props.productData.weight}/>
                    <Color color={props.productData.color}/>
                    <Width width={props.productData.width}/>
                    <Length length={props.productData.length}/>
                    <Count count={props.productData.count}/>
                    <Height height={props.productData.height}/>
                </div>
                <div className='comments__DetailPageWrapper'>comments</div>
                <div className='addComment__DetailPageWrapper'>add comment</div>
            </div>
        </>
    )
}

const mapStateToProps = (state, ownProps) => {

    const allProducts = state.newProduct.productsData
    const data = (allProducts.find(item => item.id === ownProps.match.params.id) || {})

    return {
        productData: data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);