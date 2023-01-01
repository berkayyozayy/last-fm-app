import { render } from "@testing-library/react";
import ListView from "../../presentation/components/ui/list-view/ListView";

describe("list view component", () => {
  test("it should render", () => {
    const { container } = render(<ListView />);
    expect(container).toMatchSnapshot();
  });
});
