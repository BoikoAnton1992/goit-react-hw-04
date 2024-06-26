import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
export default function ImageGallery({ listImages, openModal }) {
  return (
    <ul className={css.galleryContainer}>
      {listImages.map(item => {
        return (
          <li key={item.id}>
            <ImageCard onClick={openModal} image={item} />
          </li>
        );
      })}
    </ul>
  );
}
