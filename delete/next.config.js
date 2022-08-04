module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/auth/login",
        destination: "http://localhost:3001/auth/login",
      },
      {
        source: "/auth/signup",
        destination: "http://localhost:3001/auth/signup",
      }
    ];
  };
  return {
    rewrites,
  };
};