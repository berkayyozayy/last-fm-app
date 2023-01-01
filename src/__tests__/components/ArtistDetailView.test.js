import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ArtistDetailView from "../../presentation/components/artists/artist-detail/artist-detail-view/ArtistDetailView";

describe("ArtistDetailView component", () => {
  test("it should render", () => {
    const { container } = render(
      <MemoryRouter>
        <ArtistDetailView />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
