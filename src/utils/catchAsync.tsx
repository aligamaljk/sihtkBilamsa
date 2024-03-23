// eslint-disable-next-line react-refresh/only-export-components
export default (callBack: (arg0: any) => Promise<any>) => {
  return (...rest : any) =>
    callBack(...rest as any ).catch(error => {
      console.log('error:', error);
      throw error;
    });
};
