import { b as useUser } from "../server.mjs";
const useLoading = () => {
  const { userInfo } = useUser();
  const setGlobalLoading = (loading, content = "正在加载") => {
    if (userInfo.value.loading !== loading) {
      userInfo.value.loadingContent = content;
      userInfo.value.loading = loading;
    }
  };
  return { setGlobalLoading };
};
export {
  useLoading as u
};
//# sourceMappingURL=useLoading-35bd0ba7.js.map
