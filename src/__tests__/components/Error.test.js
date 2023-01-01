import { render } from "@testing-library/react";
import Error from "../../presentation/components/common/error/Error";

describe("error component", () => {
  test("it should render", () => {
    const { container } = render(<Error />);
    expect(container).toMatchSnapshot();
  });
});
