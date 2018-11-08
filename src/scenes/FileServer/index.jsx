const FileServer = location => () => {
  window.location = location;
  return null;
};

export default FileServer;