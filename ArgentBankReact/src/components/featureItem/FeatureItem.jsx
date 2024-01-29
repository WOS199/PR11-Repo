const FeatureItem = (props) => {
  const { imgSrc, imgAlt, title, content } = props;

  return (
    <div className="feature-item">
      <img src={imgSrc} alt={imgAlt} class="feature-icon" />
      <h3 class="feature-item-title">{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default FeatureItem;
