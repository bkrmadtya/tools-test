import { useCallback, useEffect, useState } from 'react';

type Response = {
  greeting: string;
};

const useDelayed = (latency: number): { data: Response | undefined } => {
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
