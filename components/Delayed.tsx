import useDelayed from '../hooks/useDelayed';

type DeplayedProps = {
  className: string;
  latency: number;
  position: number;
};

const Delayed = ({ className, latency, position }: DeplayedProps) => {
  const { data } = useDelayed(latency);

  return (
    <div className={data && className} data-testid={`delayed-component-${position}`}>
      <p>{data && data.greeting + position}</p>
    </div>
  );
};

export default Delayed;
