import Head from 'next/head';

import styles from 'styles/Home.module.css';

import Delayed from 'components/Delayed';

type DelayedProps = {
  count: number;
  latency: number;
};

const DelayedPage = ({ count, latency }: DelayedProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tools Test application</title>
        <meta name="description" content="Testing delayed content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h4 className={styles.title} data-testid="delayed-page-title">
          Here are some delayed contents
        </h4>
        {Array(count)
          .fill(0)
          .map((_, i) => (
            <Delayed
              className={styles.card}
              key={i}
              testId={`delayed-component-${i + 1}`}
              latency={latency}
            />
          ))}
      </main>
    </div>
  );
};

export const getServerSideProps = async (context: any) => {
  const { latency, count } = context.query;

  const getPositiveNum = (numStr: string) => Math.abs(parseInt(numStr, 10));

  return {
    props: {
      latency: getPositiveNum(latency) || 2000,
      count: getPositiveNum(count) || 4,
    },
  };
};

export default DelayedPage;
