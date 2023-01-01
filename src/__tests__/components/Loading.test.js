import { render } from "@testing-library/react";
import Loading from "../../presentation/components/common/loading/Loading";

describe("loading component", () => {
  test("it should render", () => {
    const { container } = render(<Loading />);
    expect(container).toMatchSnapshot();
  });
});
