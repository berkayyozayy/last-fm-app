import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TopAlbums from "../../presentation/components/artists/artist-detail/albums/TopAlbums";

describe("TopAlbums component", () => {
  test("it should render", () => {
    const { container } = render(
      <MemoryRouter>
        <TopAlbums />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
