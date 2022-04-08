import useDelayed from '../hooks/useDelayed';

type DeplayedProps = {
  className: string;
  latency: number;
  testId: string;
};

const Delayed = ({ className, latency, testId }: DeplayedProps) => {
  const { data } = useDelayed(latency);

  return (
    <div className={data && className} data-testid={testId}>
      <p>{data && data.greeting}</p>
    </div>
  );
};

export default Delayed;
