async function toJson(response: Response) {
  return response.json();
}

// const fetcher = {
//   get: async (url: string) => {
//     const response = await fetch(url);

//     return {
//       toJson:toJson(response)
//     }
//   },

// };

function fetcher() {
  const methods = {
    get: async (url: string) => {
      const response = await fetch(url);

      return {
        toJson: toJson(response),
      };
    },
    toJson: async (response: Response) => {
      return await response.json();
    },
    toText: async (response: Response) => {
      return await response.text();
    },
  };

  return {
    get: async (url: string) => {
      const response = await fetch(url);

      return {
        toJson: toJson(response),
      };
    },
    toJson: async (response: Response) => {
      return await response.json();
    },
    toText: async (response: Response) => {
      return await response.text();
    },
  };
}

const test = fetcher();

(async () => {
  const response = await (
    await test.get('https://api.github.com/users/IcaroSilvaFK')
  ).toJson;
})();
