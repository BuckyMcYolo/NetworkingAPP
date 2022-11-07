import Link from "next/link";
import React from "react";
import Button from "../../ui/button";
import styles from "./event-item.module.css";
import Image from "next/image";

const EventItem = ({ title, image, date, location, id }) => {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <Image src={"/" + image} alt={title} width={250} height={160} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
        </div>
        <div className={styles.date}>
          <time> {humanReadableDate}</time>
        </div>
        <div className={styles.address}>
          <address>{formattedAddress}</address>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>Explore Event</Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
