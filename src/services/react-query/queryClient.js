import { QueryClient } from "@tanstack/react-query";
import { message } from "antd";

const onErrorHandler = (error) => {
  console.log("onErrorHandler  error:", { error });
  const code = error?.response?.status;
  console.log('errorerrorerrorerrorerrorerror:'+ error);
  console.log('errorerrorerrorerrorerrorerror:'+ error?.response?.data?.errors);
  if (code === 401) {
    message.warning('Please login before taking this action');
    // console.log('onErrorHandler  before taking this action:');
    // localStorage.clear();
    // window.location.replace('auth?action=login');
    return null;
  }

  if (code >= 400 || code < 500) {
    message.error(error.message);
  } else {
    message.error(
      "We're sorry. Something went wrong. A team of highly trained developers has been dispatched to handle this situation!"
      // "حدث خطأ ما الرجاء المحاولة مرة اخرى "
      // "برجاء المحاولة مرة اخرى و التصال بالانترنت"
      );
  }
  return error;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // refetchOnMount: false,
      refetchOnWindowFocus: false,
      // refetchOnReconnect: false,
      retry: 2,
      onSuccess: (res) => {
        // console.log('onSuccess Global queries', res);
        // if (res?.code !== 200) {
        //   message(res?.message);
        // }
        // if (res?.validation) {
        //   res.validation?.forEach(err => {
        //     message.error(err);
        //   });
        // }
      },
      onError: onErrorHandler,
      networkMode: "always",
    },
    mutations: {
      onSuccess: (res) => {
        // console.log('onSuccess Global mutations', res);
        if (res?.code === 200) {
          message.success(res?.message);
        }
        if (res?.validation) {
          res.validation?.forEach((err) => {
            // message.error(err, { autoClose: false })
            message.error(err);
          });
        }
      },
      onError: onErrorHandler,
      // networkMode: 'always',
    },
  },
});

export default queryClient;
