const SingleImage = ({img}) => {
    return(
            <div className="h-[15vh] w-[20vh]">
                <img src={img.urls.small} alt={img.slug} className="border border-rounded-md"/>
            </div>
    )
}

export default SingleImage;