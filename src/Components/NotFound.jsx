import NotFoundImage from "../assets/download.png"

 const NotFound = () => {
  return (
    <div>
        {/* <img src={NotFoundImage} alt="" /> */}
        <img src={require("../assets/download.png")} alt="" />
    </div>
  )
}
export default NotFound