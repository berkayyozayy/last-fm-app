import Card from "../ui/card/Card";
import styles from "./ArtistsListView.module.css";

function ArtistListView({ image, label, count, listeners }) {
  return (
    <Card
      image="https://i.picsum.photos/id/112/200/300.jpg?hmac=2Y23MnaG65tK7HHRGB9XvjPcMETuBqK4fiu8t5rbBdg"
      label="Fazla Gıda"
      count={9219}
      listeners={32432}
    />
  );
}

export default ArtistListView;
