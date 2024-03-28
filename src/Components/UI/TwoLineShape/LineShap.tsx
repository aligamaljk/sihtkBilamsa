import './TwoLineShape.scss';
function LineShap({
  color = '#fd7304',
  size
}: {
  color?: string;
  size?: { height?: string; width?: string };
}) {
  const defaultSize = { height: '2px', width: '100%' };
  const resSize: { height: string; width: string } = {
    height: size?.height || defaultSize.height,
    width: size?.width || defaultSize.width
  };
  console.log(resSize);
  return (
    <div
      className='line-shape'
      style={{
        height: resSize.height,
        width: resSize.width,
        backgroundColor: color
      }}
    ></div>
  );
}

export default LineShap;
