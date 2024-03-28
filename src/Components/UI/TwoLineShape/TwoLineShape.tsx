import LineShap from './LineShap';

function TwoLineShape({
  translateX = '-35%',
  translateY = '-200%',
  l1 = { height: '5px', width: '50%' },
  l2 = { height: '6px' }
}: {
  translateX?: string;
  translateY?: string;
  l1?: { height?: string; width?: string };
  l2?: { height?: string; width?: string };
}) {
  return (
    <div
      className='two-line-shape'
      style={{ transform: `translate(${translateX}, ${translateY})` }}
    >
      <LineShap size={l1} />
      <LineShap size={l2} />
    </div>
  );
}

export default TwoLineShape;
