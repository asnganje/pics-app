import SingleImage from "./SingleImage";

const ImageList = ({images}) => {
    console.log(images)
    return(
        <div className="mt-5 grid grid-cols-5 gap-5">
            {images.map((img)=> {
                return(
                    <SingleImage key={img.id} img = {img}/>
                )
            })}
        </div>
    )
}

export default ImageList;