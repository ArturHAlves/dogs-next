import React from 'react';
import FeedPhotos from './feed-photos';
import { Photo } from '@/actions/photos-get';

type Props = {
  photos: Photo[];
};

export default function Feed({ photos }: Props) {
  return (
    <div>
      <FeedPhotos photos={photos} />
    </div>
  );
}
