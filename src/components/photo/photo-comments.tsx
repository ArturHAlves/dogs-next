'use client';

import React, { useEffect, useRef } from 'react';
import styles from './photo-comments.module.css';
import { useUser } from '@/context/user-context';
import PhotoCommentsForm from './photo-comments-form';
import { Comment } from '@/actions/photo-get';

const PhotoComments = (props: { single: boolean; id: number; comments: Comment[] }) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = useRef<HTMLUListElement>(null);
  const { user } = useUser();

  useEffect(() => {
    if (commentsSection.current) {
      commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }
  }, [comments]);

  return (
    <>
      <ul className={styles.comments}>
        {comments.map(comment => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {user && <PhotoCommentsForm single={props.single} id={props.id} setComments={setComments} />}
    </>
  );
};

export default PhotoComments;
