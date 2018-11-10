const ExternalRoute = location => () => {
  window.location.replace(location);
  return null;
};

export default ExternalRoute;