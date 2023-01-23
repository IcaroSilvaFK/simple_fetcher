const fetcher = {
  get: async (url: string) => {
    const response = await fetch(url);

    return response;
  },
  toJson: async (response: Response) => {
    return response.json();
  },
};
