const ExternalRoute = location => () => {
  window.location = location;
  return null;
};

export default ExternalRoute;