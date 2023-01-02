import { render } from "@testing-library/react";
import Card from "../../presentation/components/ui/card/Card";

describe("card component", () => {
  test("it should render", () => {
    const { container } = render(<Card />);
    expect(container).toMatchSnapshot();
  });

  test("it should render image correctly", () => {
    const imageUrl =
      "https://cdn.britannica.com/48/201348-050-525ECEBB/Norah-Jones-2012.jpg";
    const { container } = render(<Card image={imageUrl} />);
    const imageElement = container.querySelector("img");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", imageUrl);
  });

  test("it should render title", () => {
    const title = "Card Title";
    const { getByText } = render(<Card title={title} />);
    expect(getByText(title)).toBeInTheDocument();
  });
  test("it should render label", () => {
    const label = "Card Label";
    const { getByText } = render(<Card title={label} />);
    expect(getByText(label)).toBeInTheDocument();
  });

  test("it should render count", () => {
    const count = 12312;
    const { getByText } = render(<Card title={count} />);
    expect(getByText(count.toString())).toBeInTheDocument();
  });

  test("it should render listeners", () => {
    const listeners = 324234;
    const { getByText } = render(<Card title={listeners} />);
    expect(getByText(listeners.toString())).toBeInTheDocument();
  });
});
