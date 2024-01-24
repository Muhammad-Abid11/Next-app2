export default function Home() {
  return (
    <>
      <h1>Hello Next</h1>
      <h4>
        this "index.tsx" page render in "_document.tsx"
      </h4>
      <ol>

        <br />
        <h1>
          <li>
            Components
            <h4>Component k name always capital</h4>
          </li>
        </h1>
        <br />
        <br />
        <h1>
          <li>
            Routing
            <h5>Next me Routing krne k liye "pages" k folder me "file" banao or uski Route ready hojayegi apne bus uska Name use krna hai</h5>
            <h5>type in URL "/child2" ya '/blog' q k humne "pages" k folder is name ki file bana hai... Yad rhy ye caseSensitive hai</h5>
          </li>
        </h1>

        <br />
        <h1>
          <li>
            Pages
            <h5>k folder important hai yhn hum Component nhi banaty hum sirf Page banaty hen </h5>
            <h5>Or us page me chezen import krten hen <i>Q k hum jo page banaye "Next" hamen uska "Route" dy dyga</i> </h5>
          </li >
        </h1>
        <br />

      </ol >
    </>
  );
}
