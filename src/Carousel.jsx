import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-api.com/pets/none.jpg"],
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <section className="carousel">
        <img src={images[active]} alt="animal hero" />
        <section className="carousel-smaller">
          {images.map((photo, index) => (
            <img
              alt="animal-thumbnail"
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
            />
          ))}
        </section>
      </section>
    );
  }
}

export default Carousel;
