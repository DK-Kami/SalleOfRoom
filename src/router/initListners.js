export default function initListners(router, ...listners) {
  return store => {
    listners.flat().map(listner => {
      router[listner.type](listner.listner(store));
    });
  
    return router
  }
};
