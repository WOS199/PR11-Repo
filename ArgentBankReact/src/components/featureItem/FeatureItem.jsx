const FeatureItem = (props) => {
  const { imgSrc, imgAlt, title, content } = props;

  return (
    <div className="feature-item">
      <img src={imgSrc} alt={imgAlt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default FeatureItem;
