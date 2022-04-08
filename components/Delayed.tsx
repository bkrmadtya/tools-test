import useDelayed from '../hooks/useDelayed';

type DeplayedProps = {
  latency: number;
  testId: string;
};

const Delayed = ({ latency, testId }: DeplayedProps) => {
  const { data } = useDelayed(latency);

  return (
    <div data-testid={testId}>
      <p>{data && data.greeting}</p>
    </div>
  );
};

export default Delayed;
