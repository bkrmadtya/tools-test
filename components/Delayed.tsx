import useDelayed from '../hooks/useDelayed';

const Delayed = ({ latency }: { latency: number }) => {
  const { data } = useDelayed(latency);

  return (
    <div data-testid="delayed-component">{data ? <p>{JSON.stringify(data)}</p> : 'loading'}</div>
  );
};

export default Delayed;
