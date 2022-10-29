import { LazyLoadImage } from "react-lazy-load-image-component";

const LazyLoad = ({ url }) => {
  return (
    <div>
      <LazyLoadImage alt="loading" src={url} />
    </div>
  );
};

export default LazyLoad;
