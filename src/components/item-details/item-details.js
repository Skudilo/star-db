import React, { useEffect, useState } from 'react';
import './item-details.css';
import Spinner from '../spinner/spinner';
import ErrorBoundry from '../error-boundry';
import ErrorIndicator from '../error-indicator';

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Record };

const ItemDetails = (props) => {
  const { itemId, getData, getImgUrl } = props;
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!itemId) {
      return;
    }

    setLoading(true);
    let cancelled = false;

    getData(itemId)
      .then((item) => {
        !cancelled && setItem(item);
        !cancelled && setImage(getImgUrl(item));
        !cancelled && setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
    return () => (cancelled = true);
  }, [itemId]);

  if (error) {
    return <ErrorIndicator />;
  }

  if (!item && !loading) {
    return (
      <span style={{ margin: '0 auto' }}>Select a person from a list</span>
    );
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <ErrorBoundry>
      <div className="item-details card">
        <img
          className="item-image"
          onError={(e) => {
            e.target.src =
              'https://starwars-visualguide.com/assets/img/placeholder.jpg';
          }}
          src={image}
          alt=""
        />
        <div className="card-body">
          <h4>{item.name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(props.children, (child) => {
              return React.cloneElement(child, { item });
            })}
          </ul>
        </div>
      </div>
    </ErrorBoundry>
  );
};

export default ItemDetails;
