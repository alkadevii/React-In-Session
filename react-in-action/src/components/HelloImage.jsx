// Importing the image file from the assets folder
import Image from "./../assets/hello_extensions.png";

// Functional component to display an image
function HelloImage() {
  // Returning an img element with source and alt text
  return <img src={Image} alt="hello" />;
}

// Exporting the component so it can be used in other files
export default HelloImage;
