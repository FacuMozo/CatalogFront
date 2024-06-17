import React from 'react';

const ImageComponent = ({ imageUrl }) => {
  let ImageComponente = null;

  try {
    // Importa dinámicamente el SVG usando la ruta proporcionada en imageUrl
    ImageComponente = require( `../images${imageUrl}`);
    console.log(` importing image: ${imageUrl}`);
  } catch (error) {
    console.error(`Error importing image: ${error}`);
  }

  return (
    <div>
        {/* ../images{imageUrl} */}
      {/* {imageUrl}   */}
      {/* <img src={require( "../images/all-categories-icon.png")} alt="Imagen" /> */}
      <img src={require( `../images${imageUrl}`)} alt="Imagen" />
      <img src={ImageComponente} alt="Imagen" />
    </div>
  );
};

export default ImageComponent;