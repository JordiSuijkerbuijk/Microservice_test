import { useLoaderData } from 'remix';

import fetch from '../utils/fetch';

export const loader = async () => {
  const movies = await fetch('http://host.docker.internal:4000/content');

  return movies;
};

export default function Index() {
  const movies = useLoaderData();

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a target='_blank' href='https://remix.run/tutorials/blog' rel='noreferrer'>
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a target='_blank' href='https://remix.run/tutorials/jokes' rel='noreferrer'>
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target='_blank' href='https://remix.run/docs' rel='noreferrer'>
            Remix Docs
          </a>
        </li>
        {movies &&
          movies.data.map((item: any, key: number) => (
            <li key={key}>
              <div> {item.attributes.Title} </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
