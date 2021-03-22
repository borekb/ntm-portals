import { helloFromJs } from '@example/lib/index';
import { helloFromTs, helloSnakeCase } from '@example/lib/needs-transpilation';

function IndexPage() {
  return (
    <div>
      <h1>
        next-transpile-modules with <code>portal:</code>
      </h1>
      <p>
        This comes from <code>lib</code>:
      </p>
      <ul>
        <li>{helloFromJs}</li>
        <li>{helloFromTs}</li>
        <li>{helloSnakeCase}</li>
      </ul>
    </div>
  );
}

export default IndexPage;
