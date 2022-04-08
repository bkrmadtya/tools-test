import { useCallback, useEffect, useState } from 'react';

const useDelayed = (latency: number) => {
  const [data, setData] = useState();

  const fetchData = useCallback(async () => {
    const response = await fetch(`/api/delayed?latency=${latency}`);
    const json = await response.json();
    setData(json);
  }, [latency]);

  useEffect(() => {
    fetchData().catch(console.error);
  }, [fetchData]);

  return { data };
};

export default useDelayed;
