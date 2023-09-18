import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fethTmdbAPI from 'helpers/TmdbAPI';
import {
  DontReviews,
  ReviewsList,
  ReviewsListCaptions,
} from './Reviews.styled';

export default function Reviews() {
  const { moviesId } = useParams();
  const [reviewsItems, setReviewsItems] = useState([]);
  const [error, setError] = useState(true);

  useEffect(() => {
    function fetchReviewsItems(moviesId) {
      fethTmdbAPI(`movie/${moviesId}/reviews`)
        .then(resp => {
          setReviewsItems([...resp.results]);
        })
        .catch(error => {
          console.error(error);
          setError(true);
        })
        .finally(() => {
          setError(false);
        });
    }

    fetchReviewsItems(moviesId);
  }, [moviesId]);

  return (
    <>
      {!error && (
        <ReviewsList>
          {reviewsItems.length !== 0 ? (
            reviewsItems.map(item => {
              return (
                <li key={item.id}>
                  <ReviewsListCaptions>
                    Author: {item.author}
                  </ReviewsListCaptions>
                  <p>{item.content}</p>
                </li>
              );
            })
          ) : (
            <li>
              <DontReviews>
                We don't have any reviews for this movie.
              </DontReviews>
            </li>
          )}
        </ReviewsList>
      )}
    </>
  );
}
