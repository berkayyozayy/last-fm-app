import { render } from "@testing-library/react";
import Card from "../../presentation/components/ui/card/Card";

describe("card component", () => {
  test("it should render", () => {
    const { container } = render(<Card />);
    expect(container).toMatchSnapshot();
  });
});
