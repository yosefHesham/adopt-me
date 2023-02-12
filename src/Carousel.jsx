import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-api.com/pets/none.jpg"],
  };

  handleChangeIndex(index) {
    console.log(this);
    this.setState({ active: index });
  }

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <section className="carousel">
        <img src={images[active]} alt="animal hero" />
        <section className="carousel-smaller">
          {images.map((photo, index) => (
            //eslint-disable-next-line
            <img
              onClick={() => {
                this.handleChangeIndex(index);
              }}
              alt="animal-thumbnail"
              key={photo}
              src={photo}
              className={index === active ? "active" : " "}
            />
          ))}
        </section>
      </section>
    );
  }
}

export default Carousel;
