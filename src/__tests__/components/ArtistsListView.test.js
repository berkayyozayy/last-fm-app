import { render } from "@testing-library/react";
import ArtistsListView from "../../presentation/components/artists/artists-list/ArtistsListView";

describe("ArtistsListView component", () => {
  test("it should render", () => {
    const { container } = render(<ArtistsListView />);
    expect(container).toMatchSnapshot();
  });
});
