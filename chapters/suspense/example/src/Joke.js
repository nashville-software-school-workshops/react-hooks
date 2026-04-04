// Resource wrapper for Suspense-compatible data fetching
function wrapPromise(promise) {
  let status = "pending";
  let result;

  let suspend = promise.then(
    r => {
      status = "success";
      result = r;
    },
    e => {
      status = "error";
      result = e;
    }
  );
  
  return {
    read() {
      if (status === "pending") {
        throw suspend; // throw a promise, which will tell suspense to show the fallback
      } else if (status === "error") {
        throw result; // throw an error, which can be handled by an ErrorBoundary
      } else if (status === "success") {
        return result; // return the actual data, which will be used in rendering the component
      }
    }
  };
}

// Fetch joke from API
function fetchJoke() {
  return fetch('https://official-joke-api.appspot.com/random_joke')
    .then(res => res.json());
}

// Create resource for the joke
const jokeResource = wrapPromise(fetchJoke());

export default function Joke() {
  const joke = jokeResource.read();

  return (
    <div className="joke-card">
      <p className="setup">{joke.setup}</p>
      <p className="punchline">{joke.punchline}</p>
    </div>
  );
}
