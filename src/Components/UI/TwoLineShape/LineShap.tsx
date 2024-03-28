import './TwoLineShape.scss';
function LineShap({
  color,
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
  let clr = color;
  if (!clr) {
    clr = '#fd7304';
  }
  console.log(clr);
  console.log(resSize);
  return (
    <div
      className='line-shape'
      style={{
        height: resSize.height,
        width: resSize.width,
        backgroundColor: clr
      }}
    ></div>
  );
}

export default LineShap;
