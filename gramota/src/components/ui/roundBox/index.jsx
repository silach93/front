const RoundBox = ({ text }) => {
  return (
    <div className={'card'}>
      <h5 className={'card__title'}>{text.title}</h5>
      <p className={'card__descr'}>{text.desc}</p>
    </div>
  );
}

export default RoundBox;