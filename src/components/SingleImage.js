const SingleImage = ({img}) => {
    return(
            <div >
                <img src={img.urls.small} alt={img.slug}/>
            </div>
    )
}

export default SingleImage;