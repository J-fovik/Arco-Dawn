import { b as useUser } from '../server.mjs';

const useLoading = () => {
  const { userInfo } = useUser();
  const setGlobalLoading = (loading, content = "\u6B63\u5728\u52A0\u8F7D") => {
    if (userInfo.value.loading !== loading) {
      userInfo.value.loadingContent = content;
      userInfo.value.loading = loading;
    }
  };
  return { setGlobalLoading };
};

export { useLoading as u };
//# sourceMappingURL=useLoading-35bd0ba7.mjs.map
