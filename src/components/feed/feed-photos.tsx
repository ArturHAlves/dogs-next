import { Photo } from '@/actions/photos-get';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './feed.module.css';

type Props = {
  photos: Photo[];
};

export default function FeedPhotos({ photos }: Props) {
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {photos.map((photo, i) => (
        <li className={styles.photo} key={photo.id + i}>
          <Link href={`/foto/${photo.id}`} scroll={false}>
            <Image src={photo.src} width={1500} height={1500} alt={photo.title} sizes="80vw" />
            <span className={styles.visualizacao}>{photo.acessos}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
