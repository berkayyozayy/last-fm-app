import React, { useState, useRef, useEffect } from "react";
import Card from "../ui/card/Card";
import { Link } from "react-router-dom";
import styles from "./InfiniteScroll.module.css";
import config from "../../../config/config";
import Button from "../ui/button/Button";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef(null);
  const targetElement = useRef(null);
  const btnLabel = "Load More";
  const title = "Artist";

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          loadData();
        }
      }
    });

    if (targetElement.current) {
      observer.current.observe(targetElement.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const loadData = () => {
    if (!hasMore) {
      return;
    }

    fetch(`${config.defaultUrl}&page=${page}`)
      .then((res) => res.json())
      .then((res) => {
        const filteredData = res.artists.artist.filter(
          (artist) => !data.some((a) => a.mbid === artist.mbid)
        );
        setData([...data, ...filteredData]);

        if (!res.artists.artist) {
          setHasMore(false);
        }
      });
  };

  useEffect(() => {
    if (hasMore) {
      loadData();
    }
  }, [page]);

  return (
    <div className={styles["list-view"]}>
      {data.map((artist) => {
        return (
          <div key={"-link-" + artist.mbid + "--" + artist.name}>
            <Link
              to={`/artist/${artist.mbid}?name=${artist.name}`}
              className={styles.link}
            >
              <Card
                key={artist.mbid + artist.name}
                title={title}
                image={artist.image[4]["#text"]}
                label={artist.name}
                count={artist.playcount}
                listeners={artist.listeners}
              />
            </Link>
          </div>
        );
      })}
      {hasMore && (
        <div
          className={styles["btn-wrapper"]}
          ref={targetElement}
          onClick={() => setPage(page + 1)}
        >
          <Button label={btnLabel} />
        </div>
      )}
    </div>
  );
};

export default InfiniteScroll;
