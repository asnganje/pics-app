import SingleImage from "./SingleImage";

const ImageList = ({images}) => {
    console.log(images)
    return(
        <div>
            {images.map((img)=> {
                return(
                    <SingleImage key={img.id} img = {img}/>
                )
            })}
        </div>
    )
}

export default ImageList;