import useHomeStore from "@/stores/modules/home";
const useStore = () => {
  return {
    home: useHomeStore(),
  };
};
export default useStore;
