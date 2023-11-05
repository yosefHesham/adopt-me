import { Component } from "react";

type Props = {
  images: string[];
};
class Carousel extends Component<Props> {
  state: { active: number } = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (index: number) => {
    this.setState({ active: index });
  };
  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt={"animal thumbnail"} />

        <div className="carousel-smaller">
          {images.map((photo, index) => {
            return (
              //eslint-disable-next-line
              <img
                key={photo}
                src={photo}
                onClick={() => {
                  this.handleIndexClick(index);
                }}
                alt="animal thumbnail"
                className={index === active ? "active" : ""}
              ></img>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Carousel;
