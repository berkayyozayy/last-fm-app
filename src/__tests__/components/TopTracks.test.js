import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TopTracks from "../../presentation/components/artists/artist-detail/tracks/TopTracks";

describe("TopTracks component", () => {
  test("it should render", () => {
    const { container } = render(
      <MemoryRouter>
        <TopTracks />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
