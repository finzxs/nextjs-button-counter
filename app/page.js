export default function Page() {
  return (
    <main className="wrap">
      <h1>Button Counter</h1>

      {/* Default counter */}
      <section>
        <h2>Default</h2>
        {/* Client component rendered below */}
        <Counter />
      </section>

      {/* Custom props example */}
      <section>
        <h2>Custom Props</h2>
        <Counter initialCount={5} initialStep={2} />
      </section>
    </main>
  );
}

import Counter from "../components/Counter";
