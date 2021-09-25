import React from 'react'
//import { connect } from 'react-redux'




const DetailPage = () => {
        return (
            <div className='DetailPage'>
                {/* <BackButton /> */}
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

export default DetailPage;

// const mapStateToProps = (state, ownProps) => {
//     return {
//         productData: state.newProduct.productsData.filter(item => item === ownProps.match.params.id)
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {

//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);

//=========
// function doSmth() {
//     const bebra = 'some text'

//     return () => {
//         console.log(bebra)
//     }
// }

// const result = doSmth()
// result()

// const result2 = doSmth()()
